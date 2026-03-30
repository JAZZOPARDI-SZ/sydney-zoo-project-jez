import React, { useEffect, useMemo } from 'react';
import minusIcon from './minus-icon.svg'
import plusIcon from './plus-icon.svg'
import ticketDefault from './ticket.svg'
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip'
import Calendar from 'react-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-calendar/dist/Calendar.css';

import './calendar.css';

import '../../../styles/tailwind.scss';
import moment from 'moment';
import { formatInTimeZone } from 'date-fns-tz';

interface TileProps {
    fieldValues: any;
}

interface ITicket {
    [key: string]: number
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

/** Maps API fare_*_price keys to CMS ticket keys */
const FARE_TO_TICKET_KEY: Record<string, string> = {
    fare_adult_price: 'adult',
    fare_child_price: 'child',
    fare_infant_price: 'infant',
    fare_concession_price: 'concession',
};

/** Parses API fare value (string or number) to number */
const parseFare = (val: unknown): number => {
    if (typeof val === 'number' && !Number.isNaN(val)) return val;
    if (typeof val === 'string') {
        const n = parseFloat(val);
        return Number.isNaN(n) ? 0 : n;
    }
    return 0;
};

/** API prices keyed by product_code for direct lookup */
type ApiPricesByProductCode = Record<string, Record<string, number>>;

/** Maps (product_category_code, hour) -> product_code for category-based lookup */
type CategoryHourToProductCode = Record<string, Record<number, string>>;

/** Maps product_code -> product_category_code (for resolving time-specific codes like DAY-0900) */
type ProductCodeToCategory = Record<string, string>;

const DATE_PRICE_API_URL = '/hs/serverless/datepricerequest';

/** Returns today at midnight in Australia/Sydney (Sydney Zoo's timezone) - avoids server UTC showing wrong date for AU users */
const getCurrentDateInSydney = (): Date => {
  const formatter = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const parts = formatter.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '0';
  const year = parseInt(get('year'), 10);
  const month = parseInt(get('month'), 10) - 1; // 0-indexed for Date
  const day = parseInt(get('day'), 10);
  return new Date(year, month, day);
};

const SYDNEY_TZ = 'Australia/Sydney';

const formatCalendarDateInSydney = (d: Date) => formatInTimeZone(d, SYDNEY_TZ, 'yyyy-MM-dd');
const getCurrentHourInSydney = (d: Date = new Date()) => Number(formatInTimeZone(d, SYDNEY_TZ, 'H'));

/** Normalizes a date to local midnight for consistent calendar display across timezones */
const toLocalMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

/** Placeholder time slots shown while API is loading - stable reference to avoid useEffect loops */
const LOADING_PLACEHOLDER_TIMES: { id: string; label: string; hour: number }[] = [
  { id: 'loading-0', label: '—', hour: 9 },
  { id: 'loading-1', label: '—', hour: 10 },
  { id: 'loading-2', label: '—', hour: 11 },
  { id: 'loading-3', label: '—', hour: 12 },
  { id: 'loading-4', label: '—', hour: 13 },
];

const Tile = ({ fieldValues }: TileProps) => {
    const { details, tickets, products, productHelpText, note, tableHeading, specialDates } = fieldValues;

    /** Single Sydney "today" for this mount — avoids repeated getCurrentDateInSydney() during render */
    const [sydneyToday] = React.useState(() => getCurrentDateInSydney());

    const [selectedTickets, setSelectedTickets] = React.useState<ITicket>(() => {
        const initial: ITicket = {};
        (fieldValues?.tickets || []).forEach((ticket: any) => { initial[ticket.key] = 0; });
        return initial;
    });

    // Sync state when tickets change (e.g. CMS config updates) - add any new keys
    React.useEffect(() => {
        if (!tickets?.length) return;
        setSelectedTickets((prev) => {
            const next = { ...prev };
            let changed = false;
            tickets.forEach((ticket: any) => {
                if (!(ticket.key in next)) {
                    next[ticket.key] = 0;
                    changed = true;
                }
            });
            return changed ? next : prev;
        });
    }, [tickets]);

    const addTicket = (ticket: any) => {
        setSelectedTickets((prev) => ({
            ...prev,
            [ticket.key]: (prev[ticket.key] ?? 0) + 1,
        }));
    };

    const removeTicket = (ticket: any) => {
        setSelectedTickets((prev) => ({
            ...prev,
            [ticket.key]: Math.max(0, (prev[ticket.key] ?? 0) - 1),
        }));
    };
    const [activeStartDate, setActiveStartDate] = React.useState(sydneyToday);
    const [monthGroupOffset, setMonthGroupOffset] = React.useState(0);
  const [ticketType, setTicketType] = React.useState("day");
  const [quantities, setQuantities] = React.useState({
    adult: 0,
    concession: 0,
    child: 0,
    infant: 0
  });

    const [selectedTime, setSelectedTime] = React.useState('time1');
    const [disabledTimes, setDisabledTimes] = React.useState([]);
    const [valueDay, onChangeDay] = React.useState<any>(sydneyToday);

    // API prices: product_code -> { adult, child, infant, concession }
    const [apiPricesByProductCode, setApiPricesByProductCode] = React.useState<ApiPricesByProductCode | null>(null);
    // Maps (product_category_code, hour) -> product_code for CMS products using category codes
    const [categoryHourToProductCode, setCategoryHourToProductCode] = React.useState<CategoryHourToProductCode | null>(null);
    // Maps product_code -> product_category_code (so DAY-0900 can resolve to correct time slot)
    const [productCodeToCategory, setProductCodeToCategory] = React.useState<ProductCodeToCategory | null>(null);
    const [apiPricesLoading, setApiPricesLoading] = React.useState(false);
    const [apiPricesError, setApiPricesError] = React.useState<string | null>(null);
    const [apiUnavailableCategories, setApiUnavailableCategories] = React.useState<string[]>([]);

    const isSameDate = (d1, d2) => {
        return (
          d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate()
        );
      }

    /** Time slots derived from API (product_long_description, time_from) */
    type TimeSlot = { id: string; label: string; hour: number };
    const [apiTimeSlots, setApiTimeSlots] = React.useState<TimeSlot[]>([]);

    /** Extract label from product_long_description: "DAY-0900 - 9am" -> "9am", "DAY-1300 - After 1pm" -> "After 1pm" */
    const getLabelFromProductDescription = (desc: string): string => {
      if (!desc || typeof desc !== 'string') return '';
      const parts = desc.split('-');
      return (parts[parts.length - 1] || '').trim();
    };

    /** Extract sort hour from product_code: "DAY-0900" -> 9, "DAY-1300" -> 13, "DAY-1800" -> 18 */
    const getHourFromProductCode = (productCode: string): number => {
      if (!productCode || typeof productCode !== 'string') return 9;
      const match = productCode.match(/(\d{4})$/);
      if (!match) return 9;
      return parseInt(match[1].substring(0, 2), 10);
    };

    const times = apiTimeSlots.length > 0 ? apiTimeSlots : LOADING_PLACEHOLDER_TIMES;





  /** Check if product is unavailable for the selected date (from API) */
  const isProductUnavailable = (product: any) => {
    const code = product?.productCode?.trim?.();
    return code && apiUnavailableCategories.includes(code);
  };

  /** Price display string: loading, unavailable, "-", or "$XX.XX" */
  const getPriceDisplay = (product: any) => {
    if (apiPricesLoading) return '...';
    if (isProductUnavailable(product)) return 'Unavailable';
    if (!selectedAnyTickets) return '-';
    return calculatePrice(product).toFixed(2);
  };

  /** Resolve product_code for a product: always use selected hour so price matches arrival time */
  const resolveProductCode = (product: any): string | null => {
    if (!apiPricesByProductCode || !categoryHourToProductCode) return null;
    const code = product?.productCode?.trim?.() || null;
    const selected = times.find((t) => t.id === selectedTime);
    const hour = selected?.hour ?? (times[0]?.hour ?? 9);

    // Resolve category: code may be category (COVID-DAY) or product_code (DAY-0900)
    let category: string | null = null;
    if (code) {
      category = categoryHourToProductCode[code] ? code : (productCodeToCategory?.[code] ?? null);
    }
    // Fallback when productCode is empty: use first available category from API
    if (!category) {
      const categories = Object.keys(categoryHourToProductCode);
      category = categories[0] || null;
    }
    if (!category) return null;

    let productCode = categoryHourToProductCode[category]?.[hour];
    // Fallback: if exact hour not found, use nearest available hour for this category
    if (!productCode && categoryHourToProductCode[category]) {
      const hours = Object.keys(categoryHourToProductCode[category]).map(Number).sort((a, b) => a - b);
      const nearestHour = hours.find((h) => h >= hour) ?? hours[hours.length - 1];
      productCode = nearestHour != null ? categoryHourToProductCode[category][nearestHour] : undefined;
    }
    return productCode && apiPricesByProductCode[productCode] ? productCode : null;
  };

  const calculatePrice = (product: any) => {
    const productCode = resolveProductCode(product);
    if (productCode && apiPricesByProductCode?.[productCode]) {
      const prices = apiPricesByProductCode[productCode];
      return Object.keys(selectedTickets).reduce((acc, key) => {
        const price = prices[key] ?? 0;
        return acc + ((selectedTickets[key] ?? 0) * price);
      }, 0);
    }
    // Prices come from API only; return 0 when unavailable
    return 0;
  };

const hexToRgba = (hex: string, opacity: number) => {
    // Remove # if present
    hex = hex.replace('#', '');
  
    // Expand shorthand hex (#abc → #aabbcc)
    if (hex.length === 3) {
      hex = hex.split('').map((x) => x + x).join('');
    }
  
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  
  const hasSpecialDateForToday = (
    specialDates?: Array<{ specialDateToshowCustomeColumnData: string | number }>,
    valueDay?: any
  ): boolean => {
  
    if (!Array.isArray(specialDates) || specialDates.length === 0) return false;
    
      const slectedDateValue = new Date(valueDay);
        slectedDateValue.setTime(slectedDateValue.getTime());

        const oneDay = 24 * 60 * 60 * 1000;
  
    return specialDates.some((item) => {
       const ts = Number(item.specialDateToshowCustomeColumnData) + oneDay;
      if (!isFinite(ts)) return false;
  
      return isSameDate(new Date(ts), slectedDateValue);
    });
  };

    const handleBuyClick = (valueDay) => {
    const selected = times.find(t => t.id === selectedTime);
    if (!selected || !valueDay) return;

    // Create ISO timestamp from selectedDate + selected hour
    const dateObj = new Date(valueDay);
     dateObj.setTime(dateObj.getTime() - dateObj.getTimezoneOffset()*60000);
    dateObj.setUTCHours(selected.hour, 0, 0, 0);
   const isoTime = dateObj.toISOString().split('.')[0] + 'Z';

    const labelMap: Record<string, string> = {
  Adult: 'adult',
  Child: 'child',
  Concession: 'conc',
  Infant: 'inf',
  Senior: 'snr',
};
    const params = new URLSearchParams();
    params.append("time", isoTime);


// Add selected tickets dynamically
Object.entries(selectedTickets)
  .filter(([_, quantity]) => quantity > 0)
  .map(([key, quantity]) => {
    const ticketType = tickets?.find((ticket) => ticket.key === key)?.ticket;
    const label = labelMap[ticketType] || key.toLowerCase();
    params.append(label, String(quantity));
});
    return params;
  };

    const selectedAnyTickets = Object.values(selectedTickets).some((value: number) => value > 0);
    const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, count) => sum + count, 0);
    };
    //const formatedDate = moment(new Date(valueDay)).format("YYYY-MM-DD");

      const baseDate = sydneyToday;
const currentMonth = baseDate.getMonth();
const currentYear = baseDate.getFullYear();

const firstVisibleMonthIndex = currentMonth + monthGroupOffset;
const firstVisibleYear = currentYear + Math.floor(firstVisibleMonthIndex / 12);
const firstVisibleMonth = ((firstVisibleMonthIndex % 12) + 12) % 12;
const isPastDisabled = new Date(firstVisibleYear, firstVisibleMonth, 1) <= new Date(currentYear, currentMonth, 1);
    
  useEffect(() => {
    const todaySydney = formatCalendarDateInSydney(new Date());
    const selectedSydney = formatCalendarDateInSydney(new Date(valueDay));
    const isToday = todaySydney === selectedSydney;

    let disabled: string[] = [];

    if (isToday) {
      const currentHour = getCurrentHourInSydney();
      disabled = times.filter((time) => currentHour >= time.hour).map((time) => time.id);
    }

    setDisabledTimes(disabled);
    const nextAvailable = times.find((time) => !disabled.includes(time.id));
    setSelectedTime(nextAvailable ? nextAvailable.id : '');
  }, [valueDay, times]);

  const lastFetchedDateRef = React.useRef<string | null>(null);
  const [retryTrigger, setRetryTrigger] = React.useState(0);

  // Fetch date prices from API when calendar date changes
  useEffect(() => {
    if (!valueDay) return;

    const dateStr = moment(valueDay).format('YYYY-MM-DD');
    if (lastFetchedDateRef.current === dateStr) return;
    lastFetchedDateRef.current = dateStr;

    let cancelled = false;

    const fetchPrices = async (retryCount = 0) => {
      setApiPricesLoading(true);
      setApiPricesError(null);
      setApiUnavailableCategories([]);
      setApiTimeSlots([]);

      try {
        const res = await fetch(DATE_PRICE_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Retry-After': '2' },
          body: JSON.stringify({ date: dateStr }),
        });
        const data = await res.json();

        if (cancelled) return;

        if (!res.ok) {
          setApiPricesError(data.message || `Error ${res.status}`);
          setApiPricesByProductCode(null);
          setCategoryHourToProductCode(null);
          setProductCodeToCategory(null);
          setApiTimeSlots([]);
          setApiPricesLoading(false);
          lastFetchedDateRef.current = null;
          return;
        }

        // Build maps: product_code -> prices, (product_category_code, hour) -> product_code, product_code -> category
        // Build time slots from API: label from product_long_description (split by '-', last item), hour from time_from
        const byProductCode: ApiPricesByProductCode = {};
        const byCategoryHour: CategoryHourToProductCode = {};
        const productToCategory: ProductCodeToCategory = {};
        const timeMap = new Map<number, TimeSlot>();
        (data.prices || []).forEach((row: any) => {
          const productCode = row.product_code?.trim?.();
          const categoryCode = row.product_category_code?.trim?.();
          if (!productCode) return;
          const rowDate = (row.date || '').toString().trim();
          const isForSelectedDate = rowDate === dateStr;
          // Use product_code for hour (e.g. DAY-0900 -> 9, DAY-1300 -> 13, DAY-1800 -> 18) so display order matches: 9am 10am 11am 12pm After 1pm 2pm 3pm 4pm After 6pm
          const hour = getHourFromProductCode(productCode);
          // Build time slot: only for selected date; key by hour to deduplicate (e.g. MEM-U-0900 and MEM-P-0900 both show as single "9am")
          if (isForSelectedDate) {
            const label = getLabelFromProductDescription(row.product_long_description) || `${hour <= 12 ? hour : hour - 12}${hour < 12 ? 'am' : 'pm'}`;
            if (!timeMap.has(hour)) {
              timeMap.set(hour, { id: `time-${hour}`, label, hour });
            }
          }
          // Prices per ticket type
          const prices: Record<string, number> = {};
          Object.entries(FARE_TO_TICKET_KEY).forEach(([fareKey, ticketKey]) => {
            prices[ticketKey] = parseFare(row[fareKey]);
          });
          byProductCode[productCode] = prices;
          productToCategory[productCode] = categoryCode || '';
          // Category + hour -> product_code for CMS products using category codes
          if (categoryCode) {
            if (!byCategoryHour[categoryCode]) byCategoryHour[categoryCode] = {};
            byCategoryHour[categoryCode][hour] = productCode;
          }
        });

        const timeSlots = Array.from(timeMap.values()).sort(
          (a, b) => a.hour - b.hour || a.id.localeCompare(b.id)
        );
        setApiTimeSlots(timeSlots);
        setApiPricesByProductCode(Object.keys(byProductCode).length ? byProductCode : null);
        setCategoryHourToProductCode(Object.keys(byCategoryHour).length ? byCategoryHour : null);
        setProductCodeToCategory(Object.keys(productToCategory).length ? productToCategory : null);
        setApiUnavailableCategories(data.unavailableCategories || []);
      } catch (err: any) {
        if (!cancelled) {
          setApiPricesError(err?.message || 'Failed to load prices');
          setApiPricesByProductCode(null);
          setCategoryHourToProductCode(null);
          setProductCodeToCategory(null);
          setApiTimeSlots([]);
        }
      } finally {
        if (!cancelled) setApiPricesLoading(false);
      }
    };

    fetchPrices();
    return () => { cancelled = true; };
  }, [valueDay, retryTrigger]);

  /** Fare type rows for Price List table - derived from API prices for the selected time slot */
  const fareTypeRows = useMemo(() => {
    if (!apiPricesByProductCode || !productCodeToCategory || !categoryHourToProductCode) return [];
    const categories = (products || [])
      .map((p: any) => p?.productCode?.trim?.())
      .filter((c: string) => c && categoryHourToProductCode[c]);
    if (categories.length === 0) {
      categories.push(...Object.keys(categoryHourToProductCode));
    }
    const fareConfig = (tickets || []).map((t: { key: string; ticket: string; note?: string }) => ({
      key: t.key,
      categoryType: (t.ticket + (t.note ? ' ' + t.note : '')).trim().toUpperCase(),
    }));

    // Get selected hour from selected time slot (e.g. "After 1pm" -> 13)
    const selected = times.find((t: { id: string; hour: number }) => t.id === selectedTime);
    const hour = selected?.hour ?? (times[0]?.hour ?? 9);

    return fareConfig.map(({ key, categoryType }) => {
      const items = categories.map((productCategoryCode) => {
        // Resolve product_code for this category + selected hour (same logic as resolveProductCode)
        let productCode = categoryHourToProductCode[productCategoryCode]?.[hour];
        if (!productCode && categoryHourToProductCode[productCategoryCode]) {
          const hours = Object.keys(categoryHourToProductCode[productCategoryCode]).map(Number).sort((a, b) => a - b);
          const nearestHour = hours.find((h) => h >= hour) ?? hours[hours.length - 1];
          productCode = nearestHour != null ? categoryHourToProductCode[productCategoryCode][nearestHour] : undefined;
        }

        let FarePrice: string;
        if (!productCode || !apiPricesByProductCode[productCode]) {
          FarePrice = '-';
        } else {
          const p = apiPricesByProductCode[productCode][key] ?? 0;
          FarePrice = p === 0 ? 'FREE' : `From $${p.toFixed(2)}`;
        }
        return { productCategoryCode, FarePrice };
      });
      return { categoryType, items };
    });
  }, [apiPricesByProductCode, productCodeToCategory, categoryHourToProductCode, products, tickets, selectedTime, times]);

  
	return (
        <div className={['relative'].join(' ')}>

                <p className='text-center font-semibold mb-[25px] text-base md:text-xl'>Select your visit date</p>
        

    <div className='px-[10px] space-y-[5px] w-full md:w-[370px] mx-auto mb-[40px]'>
      
                                <div className="calendar-month-bar">


    <button className={`month-pre-arrow-btn ${isPastDisabled ? 'month-button-disable' : ''}`} onClick={() => setMonthGroupOffset((prev) => prev - 3)} disabled={isPastDisabled}> ‹ </button>

 
    {[0, 1, 2].map((i) => {
      const monthIndex = sydneyToday.getMonth() + monthGroupOffset + i;
      const year = sydneyToday.getFullYear() + Math.floor(monthIndex / 12);
      const month = (monthIndex + 12) % 12; // 0–11 always
      const date = new Date(year, month, 1);
      const isActive = activeStartDate.getMonth() === month && activeStartDate.getFullYear() === year;
      return (<button className={`month-btn ${isActive ? 'active-month' : ''}`} key={i} onClick={() => setActiveStartDate(date)}> 
      {date.toLocaleString('default', { month: 'short' })}</button>);
    })}


    <button className='month-next-arrow-btn' onClick={() => setMonthGroupOffset((prev) => prev + 3)}> › </button>
  </div>
                    <div className='bg-white p-[10px] flex items-center calendar calendar__container__content'>

            <Calendar 
              selectRange={false}
              onChange={(val) => {
                const d = Array.isArray(val) ? val[0] : val;
                onChangeDay(d ? toLocalMidnight(new Date(d)) : d);
              }} 
              value={Array.isArray(valueDay) ? valueDay[0] : valueDay} 
              minDate={sydneyToday}
              activeStartDate={activeStartDate}
              tileDisabled={() => apiPricesLoading}
              onActiveStartDateChange={({ activeStartDate }) =>
                setActiveStartDate(activeStartDate ? toLocalMidnight(new Date(activeStartDate)) : sydneyToday)
              }
              formatShortWeekday={(locale, date) =>
                date.toLocaleDateString(locale, { weekday: 'short' }).charAt(0)
              }
              navigationLabel={({ date, locale }) =>
                date.toLocaleDateString(locale, { month: 'long' }) // Show full month name
              }
              prev2Label={null}
              next2Label={null}
              showNavigation={true}
            />
            </div>
            </div>

          {apiPricesError && (
            <div className="text-center mb-4">
              <p className="text-amber-600 font-medium text-sm mb-2">
                {apiPricesError}
              </p>              
            </div>
          )}

<p className="text-center font-semibold mb-[25px] text-base md:text-xl">Select your arrival time</p>
            <div className='px-[10px] space-y-[5px] w-full md:w-[500px] mx-auto mb-[40px] items-center justify-center'>
                    <div className='p-[10px] flex items-center time-selection justify-center'>
             {times.map((time) => {
          const isDisabled = apiTimeSlots.length === 0 || disabledTimes.includes(time.id);
          return (
            <div key={time.id}>
              <input
                type="radio"
                id={time.id}
                name="arrival"
                checked={apiTimeSlots.length > 0 && selectedTime === time.id}
                onChange={() => apiTimeSlots.length > 0 && setSelectedTime(time.id)}
                disabled={isDisabled}
              />
              <label
                className={`time-label ${isDisabled ? 'selected-time-disabled' : ''}`}
                htmlFor={time.id}
              >
                {time.label}
              </label>
            </div>
          );
        })}
    
            </div>
            </div>    

          {details &&
                <p className='text-center font-semibold mb-[25px] text-base md:text-xl'>{details}</p>
            }
      
            <div className='px-[10px] space-y-[5px] w-full md:w-[370px] mx-auto mb-[40px]'>
                {tickets?.map((ticket: any) => (
                    <div key={ticket.key} className='bg-white p-[10px] flex items-center'>
                        <div className='flex space-x-[5px] items-center mr-[15px]'>
                            <img src={minusIcon} onClick={() => removeTicket(ticket)} className='h-[38px] w-[30px] select-none cursor-pointer user-drag' draggable="false" alt="minus" />
                            <input type="number" pattern="\d*" value={selectedTickets[ticket.key] ?? 0} readOnly className='appearance-none w-10 h-[34px] text-center text-lg font-bold bg-grey-50' />
                            <img src={plusIcon} onClick={() => addTicket(ticket)} className='h-[38px] w-[30px] select-none cursor-pointer user-drag' draggable="false" alt="plus" />
                            
                        </div>
                        <p>{ticket?.ticket} {ticket?.note}</p>
                        {ticket?.ticket === 'Concession' && (
                            <>
                                <a href="#" id="not-clickable">
                                    <Icon icon="akar-icons:info-fill" className='text-green-500 w-8' data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!" />
                                </a>
                                <Tooltip anchorSelect="#not-clickable" place='right' className='!bg-sky-600 max-w-[200px] !font-semibold' openOnClick>
                                    Must show student, pensioner, senior, DVA or disability card on entry.
                                </Tooltip>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:flex lg:flex-row max-w-[1140px] mx-auto hidden lg:block '>
            {products?.map((product: any, index: number) => (
                <div key={index} className={[
                    'w-full flex flex-col',
                    product?.productTheme === 'orange' ? 'bg-white' : '',
                    product?.productTheme === 'sky' ? 'bg-sky-400' : '',
                    product?.productTheme === 'grey' ? 'bg-grey-600' : '',
                    product?.productTheme === "custom" ? product?.is_enable_dates_to_cards ? hasSpecialDateForToday(product?.specialDatesToshowCusColumnData, valueDay) ? "ds-block" : "ds-none" : "ds-block" : "" ].filter(Boolean).join(" ")}
                    style={{
                  ...(product?.productTheme === "custom"
                    ? {
                        backgroundColor: hexToRgba(product?.productThemeBg, 0.5),
                      }
                    : {}),
                }}          
                    >
                    <div className={[
                        'p-[15px] text-center tracking-[2.5px] font-semibold text-[13px] md:text-lg uppercase  dynamic-header flex items-center justify-center',
                        product?.productTheme === 'orange' ? 'text-orange-500' : '',
                        product?.productTheme === 'sky' ? 'text-brown-600' : '',
                        product?.productTheme === 'grey' ? 'text-white' : '',
                        ].join(" ")} style={{
                        minHeight: product?.product_style?.header_height_mobile
                          ? `${product.product_style.header_height_mobile}px`
                          : undefined,
                        ...(product?.productTheme === "custom"
                          ? {
                              color: product?.productThemeText,
                            }
                          : {}),
                      }}
                    >
                        {product?.tagLine}
                    </div>
                    <style>
                      {`
                        @media (min-width: 768px) {
                          .dynamic-header {
                            min-height: ${product?.product_style?.header_height_desktop || 58}px !important;
                          }
                        }
                      `}
                      </style>
                    <div className={[
                        'border-t-[10px] pt-[20px] px-[10px] flex flex-col items-center relative',
                        'before:border-t-[20px] before:border-x-[20px] before:absolute before:border-transparent before:top-full before:left-1/2 before:-translate-x-1/2 before:h-0 before:w-0',
                        product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500' : 'text-white',
                        product?.productTheme === 'sky' ? 'border-sky-600 before:border-t-sky-600 bg-sky-600' : '',
                        product?.productTheme === 'grey' ? 'border-grey-900 before:border-t-grey-900 bg-grey-900' : '',
                        product?.productTheme === 'custom' ? 'custom-border-top' : '',
                    ].join(' ')} style={{
                        ...(product?.productTheme === "custom"
                          ? {
                              backgroundColor: hexToRgba(product?.productThemeBg, 1),
                              color: product?.productThemeText,
                              borderColor: hexToRgba(product?.productThemeBg, 1),
                              "--custom-border-top-color": hexToRgba(product?.productThemeBg, 1) // dynamic before border-top
                            }
                          : {
                              "--custom-border-top-color": "#5e7aa2" // fallback
                            }
                        )
                      } as React.CSSProperties} >
                        <img src={product?.image?.src} className='w-[45px] h-[45px] mt-[10px]' alt={product?.image?.alt} />
                        <p className='p-[10px] text-center tracking-[2.5px] font-semibold text-sm md:text-lg uppercase'>
                            {product?.productName}                            
                        </p>
                        <div className={[
                            'text-[24px] lg:text-[40px] leading-[1.2em] font-extrabold mt-2 mb-4',
                            product?.productTheme === 'orange' ? 'text-[#333]' : 'text-white'
                        ].join(' ')}>
                            ${getPriceDisplay(product)}
                        </div>
                        {selectedAnyTickets ?
                            <div className={[
                                'space-y-1 pb-[20px]',
                                product?.productTheme === 'orange' ? 'text-[#333]' : 'text-white'
                            ].join(' ')}>
                                {Object.keys(selectedTickets).filter((key) => selectedTickets[key] > 0).map((key: string) => (
                                    <div key={key} className='flex justify-center'>
                                        <p>{selectedTickets[key]} x {tickets?.find((ticket) => ticket.key == key)?.ticket ?? ''}</p>
                                    </div>
                                ))}
                            </div>
                        :
                            <p className={[product?.productTheme === 'orange' ? 'text-red-600' : 'text-white', 'text-center font-bold italic mb-5'].join(' ')}>{productHelpText}</p>
                        }
                    </div>
                    <div className={['px-2.5 mb-[40px] lg:mb-[0px] pb-[46px] pt-[30px] text-center relative h-full', product?.productTheme === 'grey' ? 'text-white' : 'text-black'].join(' ')}>
                        <div className='text-sm lg:text-lg space-y-[30px]' dangerouslySetInnerHTML={{__html: product?.description}}/>
                        <div className='absolute top-full -translate-y-1/2 w-full'>
                            {isProductUnavailable(product) ? (
                                <span className={[
                                    'w-[90%] text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full opacity-60 cursor-not-allowed',
                                    product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500 border-2 bg-white' : '',
                                    product?.productTheme === 'sky' ? 'bg-sky-500 text-white' : '',
                                    product?.productTheme === 'grey' ? 'bg-[#636363] text-white' : ''
                                ].join(' ')}>Unavailable</span>
                            ) : (
                                <a
                                    href={`${product?.link?.url?.href}?${handleBuyClick(valueDay)}`}
                                    target={product?.link?.open_in_new_tab ? "_blank" : "_self"}
                                    rel={product?.link?.rel ? product?.link?.rel : undefined}
                                    className={[
                                        'w-[90%] text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full',
                                        product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500 border-2 bg-white' : '',
                                        product?.productTheme === 'sky' ? 'bg-sky-500 text-white' : '',
                                        product?.productTheme === 'grey' ? 'bg-[#636363] text-white' : ''
                                    ].join(' ')} style={
                                        product?.productTheme === "custom"
                                          ? { backgroundColor: hexToRgba(product?.productThemeBg, 1), color: product?.productThemeText}
                                          : {}
                                      }
                                >Buy now</a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            </div>

                        <div className='grid grid-cols-1 lg:flex lg:flex-row max-w-[1140px] mx-auto block lg:hidden '>
            {products?.map((product: any, index: number) => (
               <div
  key={index}
  className={[
    "w-full flex flex-col",
    product?.productTheme === "orange" ? "bg-white" : "",
    product?.productTheme === "sky" ? "bg-sky-400" : "",
    product?.productTheme === "grey" ? "bg-grey-600" : "",
    product?.productTheme === "custom"
      ? product?.is_enable_dates_to_cards
        ? hasSpecialDateForToday(
            product?.specialDatesToshowCusColumnData,
            valueDay
          )
          ? "ds-block"
          : "ds-none"
        : "ds-block"
      : "",
  ]
    .filter(Boolean)
    .join(" ")}
  style={
    product?.productTheme === "custom"
      ? { backgroundColor: hexToRgba(product?.productThemeBg, 0.5) }
      : {}
  }
>
  {/* ---------- ROW 1: HEADER ---------- */}
  <div
    className={[
      "p-[15px] text-center tracking-[2.5px] font-semibold text-[13px] md:text-lg uppercase dynamic-header flex items-center justify-center",
      product?.productTheme === "orange" ? "border-b-[10px]  text-orange-500 border-orange-500" : "",
      product?.productTheme === "sky" ? "text-brown-600 bg-sky-600" : "",
      product?.productTheme === "grey" ? "text-white bg-grey-900" : "",
      product?.productTheme === "custom" ? "" : "",
    ].join(" ")}
    style={{
      minHeight: product?.product_style?.header_height_mobile
        ? `${product.product_style.header_height_mobile}px`
        : undefined,
      ...(product?.productTheme === "custom"
        ? { color: product?.productThemeText,  backgroundColor: hexToRgba(product?.productThemeBg, 1),
              "--custom-border-top-color": hexToRgba(
                product?.productThemeBg,
                1
              ), }
        : {"--custom-border-top-color": "#5e7aa2"}),
    }}
  >
    {product?.tagLine}
  </div>

  <style>
    {`
      @media (min-width: 1024px) {
        .dynamic-header {
          min-height: ${
            product?.product_style?.header_height_desktop || 58
          }px;
        }
      }
    `}
  </style>

  {/* ---------- ROW 2: TWO COLUMNS ---------- */}
  <div className="w-full grid grid-cols-2">

    {/* ---------- LEFT COLUMN (PRICE CARD) ---------- */}
    <div
      className={["px-2.5 pb-[20px] pt-[20px] text-center h-full",
        product?.productTheme === "grey" ? "text-white" : "text-black"
      ].join(" ")}
    >


      <p className="pb-[5px] text-center tracking-[2.5px] font-semibold text-sm md:text-lg uppercase">
        {product?.productName}
        {product?.productCode && (
          <span className="ml-2 text-sm opacity-80">({product.productCode})</span>
        )}
      </p>

      <div
        className={[
          "text-[24px] lg:text-[40px] leading-[1.2em] font-extrabold mt-1 mb-2",
          product?.productTheme === "orange" ? "text-[#333]" : "text-white",
        ].join(" ")}
      >
        ${getPriceDisplay(product)}
      </div>

      {selectedAnyTickets ? (
        <div
          className={[
            "space-y-1 pb-[10px]",
            product?.productTheme === "orange" ? "text-[#333]" : "text-white",
          ].join(" ")}
        >
          {Object.keys(selectedTickets)
            .filter((key) => selectedTickets[key] > 0)
            .map((key: string) => (
              <div key={key} className="flex justify-center">
                <p>
                  {selectedTickets[key]} x{" "}
                  {tickets?.find((ticket) => ticket.key == key)?.ticket ?? ''}
                </p>
              </div>
            ))}
        </div>
      ) : (
        <p
          className={[
            product?.productTheme === "orange"
              ? "text-red-600"
              : "text-white",
            "text-center font-bold italic mb-3",
          ].join(" ")}
        >
          {productHelpText}
        </p>
      )}
    </div>

    {/* ---------- RIGHT COLUMN (DESCRIPTION + BUTTON) ---------- */}
    <div
      className={[
        "px-2.5 pb-[20px] pt-[20px] text-center h-full",
        product?.productTheme === "grey" ? "text-white" : "text-black",
      ].join(" ")}
    >
      <div
        className="text-sm lg:text-lg space-y-[20px]"
        dangerouslySetInnerHTML={{ __html: product?.description }}
      />
    </div>

  </div>

    <div
    className={[
      "flex items-center justify-center",
    ].join(" ")}
  >
          <div className="w-1/2 mb-[20px]">
        {isProductUnavailable(product) ? (
          <span
            className={[
              "w-[90%] text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full opacity-60 cursor-not-allowed",
              product?.productTheme === "orange"
                ? "border-orange-500 text-orange-500 border-2 bg-white"
                : "",
              product?.productTheme === "sky" ? "bg-sky-500 text-white" : "",
              product?.productTheme === "grey" ? "bg-[#636363] text-white" : "",
            ].join(" ")}
          >
            Unavailable
          </span>
        ) : (
          <a
            href={`${product?.link?.url?.href}?${handleBuyClick(valueDay)}`}
            target={product?.link?.open_in_new_tab ? "_blank" : "_self"}
            rel={product?.link?.rel ? product?.link?.rel : undefined}
            className={[
              "w-[90%] text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full",
              product?.productTheme === "orange"
                ? "border-orange-500 text-orange-500 border-2 bg-white"
                : "",
              product?.productTheme === "sky" ? "bg-sky-500 text-white" : "",
              product?.productTheme === "grey" ? "bg-[#636363] text-white" : "",
            ].join(" ")}
            style={
              product?.productTheme === "custom"
                ? {
                    backgroundColor: hexToRgba(product?.productThemeBg, 1),
                    color: product?.productThemeText,
                  }
                : {}
            }
          >
            Buy now
          </a>
        )}
      </div>
  </div>

</div>

            ))}
            </div>


            <div className='mt-[50px] text-center text-brown-600' dangerouslySetInnerHTML={{__html: note}} />
            <p 
                className='font-bold text-[22px] lg:text-[32px] my-12 relative text-center before:left-1/2 before:-translate-x-1/2 before:h-2 before:bg-orange-500 before:w-20 lg:before:w-14 before:absolute before:-bottom-2'
            >
                Price List
            </p>
            <div className='flex justify-center mb-8 lg:mb-12 text-center overflow-x-auto'>

            <table className='w-full max-w-[1200px] table-fixed border-collapse border border-[#F0EEEC]'>
            <colgroup>
                {tableHeading?.map((heading: any, index: number) => {
                    const showCustom =
                        heading?.productTheme === "custom" &&
                        heading?.is_enable_dates_to_cards === true &&
                        hasSpecialDateForToday(heading?.specialDatesToshowCusColumnData, valueDay);
                    if (heading?.productTheme === "custom" && !showCustom) return null;
                    return <col key={index} style={{ width: `${heading?.heading_column_width ?? 33}%` }} />;
                })}
            </colgroup>
            <thead>
                <tr>
                    {tableHeading?.map((heading: any, index: number) => {
                        const showCustom =
                            heading?.productTheme === "custom" &&
                            heading?.is_enable_dates_to_cards === true &&
                            hasSpecialDateForToday(heading?.specialDatesToshowCusColumnData, valueDay);
                        if (heading?.productTheme === "custom" && !showCustom) return null;
                        return (
                            <th
                                key={index}
                                className={[
                                    'text-center font-bold p-1 lg:p-5 uppercase text-lg overflow-hidden',
                                    heading?.productTheme === 'orange' ? ' text-orange-500 border-orange-500 border-t-[10px] bg-white' : '',
                                    heading?.productTheme === 'sky' ? 'bg-[#5E7AA2] text-white border-[#5E7AA2] border-t-[10px]' : '',
                                    heading?.productTheme === 'grey' ? 'bg-[#343434] text-white border-[#343434] border-t-[10px]' : '',
                                    heading?.productTheme === 'custom' ? 'border-t-[10px]' : ''
                                ].join(' ')}
                                style={{
                                    ...(heading?.productTheme === "custom"
                                        ? {
                                            backgroundColor: hexToRgba(heading?.productThemeBg, 1),
                                            color: heading?.productThemeText,
                                            borderColor: hexToRgba(heading?.productThemeBg, 1),
                                            "--custom-border-top-color": hexToRgba(heading?.productThemeBg, 1),
                                        }
                                        : {
                                            "--custom-border-top-color": "#5e7aa2",
                                        })
                                } as React.CSSProperties}
                            >
                                <div className='flex flex-col items-center justify-center text-[14px] lg:text-[18px]'>
                                    <img src={heading?.image?.src} alt={heading?.image?.alt} className='w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] my-[10px]' />
                                    {heading?.title}
                                </div>
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {fareTypeRows.map((row: { categoryType: string; items: Array<{ productCategoryCode: string; FarePrice: string }> }, index: number) => (
                    <React.Fragment key={index}>
                        <tr className='bg-white'>
                            <td
                                colSpan={tableHeading?.filter((h: any) => {
                                    const showCustom = h?.productTheme === "custom" && h?.is_enable_dates_to_cards === true && hasSpecialDateForToday(h?.specialDatesToshowCusColumnData, valueDay);
                                    return h?.productTheme !== "custom" || showCustom;
                                }).length || 1}
                                className='p-1 lg:p-5 overflow-hidden text-black bg-white text-[14px] lg:text-[18px] font-semibold border border-[#F0EEEC]'
                            >
                                {row.categoryType}
                            </td>
                        </tr>
                        <tr className='bg-white'>
                            {tableHeading?.map((heading: any, colIndex: number) => {
                                const productCode = products?.find((p: any) => p?.productTheme === heading?.productTheme)?.productCode?.trim?.();
                                const item = row.items?.find((i) => i.productCategoryCode === productCode);
                                const farePrice = item?.FarePrice ?? '-';

                                const showCustom =
                                    heading?.productTheme === "custom" &&
                                    heading?.is_enable_dates_to_cards === true &&
                                    hasSpecialDateForToday(heading?.specialDatesToshowCusColumnData, valueDay);
                                if (heading?.productTheme === "custom" && !showCustom) return null;

                                return (
                                    <td
                                        key={colIndex}
                                        className={[
                                            'p-1 lg:p-5 overflow-hidden text-center border border-[#F0EEEC]',
                                            heading?.productTheme === 'orange' ? 'text-black bg-white' : '',
                                            heading?.productTheme === 'sky' ? 'bg-sky-400 text-black' : '',
                                            heading?.productTheme === 'grey' ? 'bg-grey-600 text-white' : '',
                                        ].join(' ')}
                                        style={
                                            heading?.productTheme === "custom"
                                                ? {
                                                    backgroundColor: hexToRgba(heading?.productThemeBg, 0.5),
                                                    color: heading?.productThemeText,
                                                }
                                                : {}
                                        }
                                    >
                                        <div className={`${
                                            heading?.productTheme === 'grey'
                                                ? 'text-white'
                                                : '!text-brown-600'
                                        } text-[14px] lg:text-[18px] font-semibold`}>
                                            {farePrice}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
            </table>
                   
            </div>
            <div className='sticky bottom-0 py-7 px-4 lg:px-[20px] flex flex-col justify-center gap-4 lg:gap-6 border-t border-brown-600 bg-grey-200'>
                <style>{`
                    a[data-custom-hover]:hover {
                        background-color: var(--custom-hover-bg) !important;
                        filter: brightness(0.95);
                    }
                `}</style>
                <p className='font-bold lg:hidden text-center'>I want to buy:</p>
                <div className='flex flex-wrap justify-center gap-4 lg:gap-6 items-stretch'>
                    {products?.map((product: any, index: number) => {
                        const showCustom =
                            product?.productTheme === "custom" &&
                            product?.is_enable_dates_to_cards === true &&
                            hasSpecialDateForToday(product?.specialDatesToshowCusColumnData, valueDay);
                        if (product?.productTheme === "custom" && !showCustom) return null;

                        const linkHref = product?.link?.url?.href;
                        if (!linkHref) return null;

                        const isUnavailable = isProductUnavailable(product);

                        return (
                            <div key={index} className='min-h-[60px] lg:min-h-0 flex items-center justify-center'>
                                {isUnavailable ? (
                                    <span
                                        className={[
                                            "text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full opacity-60 cursor-not-allowed",
                                            product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500 border-2 bg-white' : '',
                                            product?.productTheme === 'sky' ? 'bg-sky-500 text-white' : '',
                                            product?.productTheme === 'grey' ? 'bg-[#636363] text-white' : '',
                                        ].join(' ')}
                                        style={
                                            product?.productTheme === "custom"
                                                ? { backgroundColor: hexToRgba(product?.productThemeBg, 0.5), color: product?.productThemeText }
                                                : {}
                                        }
                                    >
                                        Unavailable
                                    </span>
                                ) : (
                                    <>
                                        <a
                                            href={`${linkHref}?${handleBuyClick(valueDay)}`}
                                            target={product?.link?.open_in_new_tab ? "_blank" : "_self"}
                                            rel={product?.link?.rel ? product?.link?.rel : undefined}
                                            className={[
                                                'text-[14px] font-bold py-3 px-1 lg:px-6 rounded-full min-w-[117px] lg:min-w-[315px] hidden lg:block text-center transition duration-300',
                                                product?.productTheme === 'orange' ? 'bg-white hover:bg-orange-500 hover:!text-white border-2 border-orange-500 hover:border-transparent !text-orange-500' : '',
                                                product?.productTheme === 'sky' ? 'bg-sky-600 border-2 border-transparent text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white' : '',
                                                product?.productTheme === 'grey' ? 'bg-[#636363] border-2 border-[#636363] text-white hover:text-white hover:bg-grey-900' : '',
                                            ].join(' ')}
                                            style={
                                                product?.productTheme === "custom"
                                                    ? { backgroundColor: hexToRgba(product?.productThemeBg, 1), color: product?.productThemeText, ['--custom-hover-bg']: hexToRgba(product?.productThemeBg, 1) } as React.CSSProperties
                                                    : {}
                                            }
                                            {...(product?.productTheme === "custom" ? { 'data-custom-hover': 'true' } : {})}
                                        >
                                            Buy {product?.productName}
                                        </a>
                                        <a
                                            href={`${linkHref}?${handleBuyClick(valueDay)}`}
                                            target={product?.link?.open_in_new_tab ? "_blank" : "_self"}
                                            rel={product?.link?.rel ? product?.link?.rel : undefined}
                                            className={[
                                                'text-[14px] font-bold py-3 px-4 lg:!px-6 rounded-full min-w-[117px] lg:min-w-[315px] block lg:hidden text-center min-h-[50px] lg:min-h-0 flex items-center justify-center transition duration-300',
                                                product?.productTheme === 'orange' ? 'bg-white hover:bg-orange-500 hover:!text-white border-2 border-orange-500 hover:border-transparent !text-orange-500' : '',
                                                product?.productTheme === 'sky' ? 'bg-sky-600 border-2 border-transparent text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white' : '',
                                                product?.productTheme === 'grey' ? 'bg-[#636363] border-2 border-[#636363] text-white hover:text-white hover:bg-grey-900' : '',
                                            ].join(' ')}
                                            style={
                                                product?.productTheme === "custom"
                                                    ? { backgroundColor: hexToRgba(product?.productThemeBg, 1), color: product?.productThemeText, ['--custom-hover-bg']: hexToRgba(product?.productThemeBg, 1) } as React.CSSProperties
                                                    : {}
                                            }
                                            {...(product?.productTheme === "custom" ? { 'data-custom-hover': 'true' } : {})}
                                        >
                                            Buy {product?.productName}
                                        </a>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tile;
