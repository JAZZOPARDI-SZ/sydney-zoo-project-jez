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
interface TileProps {
    fieldValues: any;
}

interface ITicket {
    [key: string]: number
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Tile = ({ fieldValues }: TileProps) => {
    const defaultTickets = {}
    fieldValues?.tickets.forEach((ticket: any) => defaultTickets[ticket.key] = 0);
    const [ selectedTickets, setSelectedTickets ] = React.useState<ITicket>(defaultTickets);

    const {details, tickets, products, productHelpText, note, tableHeading, rows, buttons, specialDates } = fieldValues;

    const addTicket = (ticket: any) => {
        setSelectedTickets({
            ...selectedTickets,
            [ticket.key]: selectedTickets[ticket.key] + 1
        });
    };

    const removeTicket = (ticket: any) => {
        setSelectedTickets({
            ...selectedTickets,
            [ticket.key]: selectedTickets[ticket.key] <= 0 ? 0 : selectedTickets[ticket.key] - 1
        });
    };
    const getWeekdayName = (dateStr: any) => {
        const date = new Date(dateStr);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[date.getDay()];
      }

    const [activeStartDate, setActiveStartDate] = React.useState(new Date());
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
const times = useMemo(() => [
    { id: 'time1', label: '9am', hour: 9 },
    { id: 'time2', label: '10am', hour: 10 },
    { id: 'time3', label: '11am', hour: 11 },
    { id: 'time4', label: '12pm', hour: 12 },
    { id: 'time5', label: 'After 1pm', hour: 13 },
  ], []);

  const [valueDay, onChangeDay] = React.useState<any>(new Date());
  const weekday = valueDay ? getWeekdayName(valueDay) : null;

  const isSameDate = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

  const calculatePrice = (product) => {
    return Object.keys(selectedTickets).reduce((acc, key) => {

        const preDay = new Date(new Date(valueDay).setDate(new Date(valueDay).getDate() - 1));

        const checkSplDayWithSelectedDate = specialDates?.find(t => isSameDate(new Date(t.specialDate), new Date(preDay)));
        console.log("checkSplDayWithSelectedDatecheckSplDayWithSelectedDate", checkSplDayWithSelectedDate);
        let pricingForKey;
        let price;
        if (checkSplDayWithSelectedDate !== undefined) {
             const specialDayPrice = checkSplDayWithSelectedDate?.products?.find(t => t.productTheme === product?.productTheme)
             pricingForKey = specialDayPrice?.pricing?.find(p => p.key === key)
             price = pricingForKey?.price || 0;
        } else {
            pricingForKey = product?.pricing?.find(p => p.key === key);
            const dayPricing = pricingForKey?.day?.find(d => d.day == weekday);
            price = dayPricing?.price || 0;
        }
  
        return acc + (selectedTickets[key] * price);
    }, 0);
};

  const calculateNumberOfTickets = (product) => {

    return Object.keys(selectedTickets).reduce((acc, key) => {
        const pricingForKey = product?.pricing?.find(p => p.key === key);
        const dayPricing = pricingForKey?.day?.find(d => d.day == weekday);
        const price = dayPricing?.price || 0;
        return acc + (selectedTickets[key] * price);
    }, 0);
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

      const baseDate = new Date();
const currentMonth = baseDate.getMonth();
const currentYear = baseDate.getFullYear();

const firstVisibleMonthIndex = currentMonth + monthGroupOffset;
const firstVisibleYear = currentYear + Math.floor(firstVisibleMonthIndex / 12);
const firstVisibleMonth = ((firstVisibleMonthIndex % 12) + 12) % 12;
const isPastDisabled = new Date(firstVisibleYear, firstVisibleMonth, 1) <= new Date(currentYear, currentMonth, 1);
    
  useEffect(() => {
    const now = new Date();
    const selected = new Date(valueDay);
    const isToday =
      now.toDateString() === selected.toDateString();

    let disabled = [];

       if (isToday) {
      const currentHour = now.getHours();
      disabled = times
        .filter(time => currentHour >= time.hour)
        .map(time => time.id);
    }

    setDisabledTimes(disabled);
    const nextAvailable = times.find(time => !disabled.includes(time.id));
    setSelectedTime(nextAvailable ? nextAvailable.id : '');
    
  }, [valueDay, times]);


  
	return (
        <div className={['relative'].join(' ')}>


                <p className='text-center font-semibold mb-[25px] text-base md:text-xl'>Select your visit date</p>
        

    <div className='px-[10px] space-y-[5px] w-full md:w-[370px] mx-auto mb-[40px]'>
      
                                <div className="calendar-month-bar">


    <button className={`month-pre-arrow-btn ${isPastDisabled ? 'month-button-disable' : ''}`} onClick={() => setMonthGroupOffset((prev) => prev - 3)} disabled={isPastDisabled}> ‹ </button>

 
    {[0, 1, 2].map((i) => {
      const monthIndex = new Date().getMonth() + monthGroupOffset + i;
      const year = new Date().getFullYear() + Math.floor(monthIndex / 12);
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
            onChange={onChangeDay} value={valueDay} 
            minDate={new Date()}
            activeStartDate={activeStartDate}
            onActiveStartDateChange={({ activeStartDate }) =>
            setActiveStartDate(activeStartDate || new Date())
            }
            formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: 'narrow' })
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

<p className="text-center font-semibold mb-[25px] text-base md:text-xl">Select your arrival time</p>
            <div className='px-[10px] space-y-[5px] w-full md:w-[500px] mx-auto mb-[40px]'>
         
          
                    <div className='p-[10px] flex items-center time-selection'>
             
     
{times.map((time) => {
          const isDisabled = disabledTimes.includes(time.id);
          return (
            <div key={time.id}>
              <input
                type="radio"
                id={time.id}
                name="arrival"
                checked={selectedTime === time.id}
                onChange={() => setSelectedTime(time.id)}
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
                {tickets?.map((ticket: any, index: number) => (
                    <div key={index} className='bg-white p-[10px] flex items-center'>
                        <div className='flex space-x-[5px] items-center mr-[15px]'>
                            <img src={minusIcon} onClick={() => removeTicket(ticket)} className='h-[38px] w-[30px] select-none cursor-pointer user-drag' draggable="false" alt="minus" />
                            <input type="number" pattern="\d*" value={selectedTickets[ticket.key]} readOnly className='appearance-none w-10 h-[34px] text-center text-lg font-bold bg-grey-50' />
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
            <div className='flex max-w-[1140px] mx-auto'>
            {products?.map((product: any, index: number) => (
                <div key={index} className={[
                    'w-full flex flex-col',
                    product?.productTheme === 'orange' ? 'bg-white' : '',
                    product?.productTheme === 'sky' ? 'bg-sky-400' : '',
                    product?.productTheme === 'grey' ? 'bg-grey-600' : '',
                ].join(' ')}>
                    <div className={[
                        'p-[15px] text-center tracking-[2.5px] font-semibold text-[13px] md:text-lg uppercase  min-h-[89px] lg:min-h-[58px]',
                        product?.productTheme === 'orange' ? 'text-orange-500' : '',
                        product?.productTheme === 'sky' ? 'text-brown-600' : '',
                        product?.productTheme === 'grey' ? 'text-white' : '',
                    ].join(" ")}>
                        {product?.tagLine}
                    </div>
                    <div className={[
                        'border-t-[10px] pt-[20px] px-[10px] flex flex-col items-center relative',
                        'before:border-t-[20px] before:border-x-[20px] before:absolute before:border-transparent before:top-full before:left-1/2 before:-translate-x-1/2 before:h-0 before:w-0',
                        product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500' : 'text-white',
                        product?.productTheme === 'sky' ? 'border-sky-600 before:border-t-sky-600 bg-sky-600' : '',
                        product?.productTheme === 'grey' ? 'border-grey-900 before:border-t-grey-900 bg-grey-900' : ''
                    ].join(' ')}>
                        <img src={product?.image?.src} className='w-[45px] h-[45px] mt-[10px]' alt={product?.image?.alt} />
                        <p className='p-[10px] text-center tracking-[2.5px] font-semibold text-sm md:text-lg uppercase'>
                            {product?.productName}
                        </p>
                        <div className={[
                            'text-[24px] lg:text-[40px] leading-[1.2em] font-extrabold mt-2 mb-4',
                            product?.productTheme === 'orange' ? 'text-[#333]' : 'text-white'
                        ].join(' ')}>
                            ${(!selectedAnyTickets) ? '-' : calculatePrice(product).toFixed(2)}
                        </div>
                        {selectedAnyTickets ?
                            <div className={[
                                'space-y-1 pb-[20px]',
                                product?.productTheme === 'orange' ? 'text-[#333]' : 'text-white'
                            ].join(' ')}>
                                {Object.keys(selectedTickets).filter((key) => selectedTickets[key] > 0).map((key: string, index: number) => (
                                    <div className='flex justify-center'>
                                        <p>{selectedTickets[key]} x {tickets?.find((ticket) => ticket.key == key).ticket}</p>
                                    </div>
                                ))}
                            </div>
                        :
                            <p className={[product?.productTheme === 'orange' ? 'text-red-600' : 'text-white', 'text-center font-bold italic mb-5'].join(' ')}>{productHelpText}</p>
                        }
                    </div>
                    <div className={['px-2.5 pb-[46px] pt-[30px] text-center relative h-full', product?.productTheme === 'grey' ? 'text-white' : 'text-black'].join(' ')}>
                        <div className='text-sm lg:text-lg space-y-[30px]' dangerouslySetInnerHTML={{__html: product?.description}} />
                        <div className='absolute top-full -translate-y-1/2 w-full'>
                            <a
                                href={`${product?.link?.url?.href}?${handleBuyClick(valueDay)}`}
                                target={product?.link?.open_in_new_tab ? "_blank" : "_self"}
                                rel={product?.link?.rel ? product?.link?.rel : undefined}
                                className={[
                                    'w-[90%] text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full',
                                    product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500 border-2 bg-white' : '',
                                    product?.productTheme === 'sky' ? 'bg-sky-500 text-white' : '',
                                    product?.productTheme === 'grey' ? 'bg-[#636363] text-white' : ''
                                ].join(' ')}
                            >Buy now</a>
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
            <div className='flex justify-center mb-8 lg:mb-12'>
                <table className='w-full max-w-[1200px]'>
                    <tr className=''>
                        {tableHeading?.map((heading: any, index: number) => (
                            <th 
                                key={index} 
                                className={[
                                    'text-center font-bold p-5 uppercase text-lg overflow-hidden',
                                    heading?.productTheme === 'orange' ? ' text-orange-500 border-orange-500 border-t-[10px] bg-white' : '',
                                    heading?.productTheme === 'sky' ? 'bg-[#5E7AA2] text-white border-[#5E7AA2] border-t-[10px]' : '',
                                    heading?.productTheme === 'grey' ? 'bg-[#343434] text-white border-[#343434] border-t-[10px]' : ''
                                ].join(' ')}
                                
                            >
                                <div className='flex flex-col items-center justify-center text-[14px] lg:text-[18px]'>
                                    <img src={heading?.image?.src} alt={heading?.image?.alt} className='w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] my-[10px]' />
                                    {heading?.title}
                                </div>
                            </th>
                        ))}
                    </tr>
                    {rows.map((row: any, index: number) => (
                        <tr key={index} className='border-y-[5px] border-[#F0EEEC] bg-white'>
                            {row?.cols?.map((col: any, index: number) => (
                                <td 
                                    key={index}
                                    className={[
                                        'p-1 lg:p-5 overflow-hidden',
                                        col?.productTheme === 'orange' ? 'text-black bg-white ' : '',
                                        col?.productTheme === 'sky' ? 'bg-sky-400 text-black' : '',
                                        col?.productTheme === 'grey' ? 'bg-grey-600 text-white prose-strong:!text-white prose-p:!text-white prose-white' : '',
                                        col?.productTheme === 'white' ? '' : ''
                                    ].join(' ')}
                                >
                                    <div>
                                        <div className={`${col?.productTheme === 'grey' ? 'text-white prose-strong:!text-white prose-p:!text-white prose-white' : '!text-brown-600 prose-strong:!text-brown-600 prose-p:!text-brown-600'} prose prose-black text-white max-w-full prose-strong:text-[16px] lg:prose-strong:text-[20px] text-[14px] lg:text-[18px] flex items-center flex-col [&_p]:m-0 [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500`} dangerouslySetInnerHTML={{__html: col?.text}}></div>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
            <div className='sticky bottom-0 py-7 px-4 lg:px-[20px] flex flex-col justify-center gap-4 lg:gap-6 border-t border-brown-600 bg-grey-200'>
                <p className='font-bold lg:hidden text-center'>I want to buy:</p>
                <div className='flex justify-center gap-4 lg:gap-6'>
                    {buttons.map((button: any, index: number) => (
                        <div>
                        <a     
                            href={`${button?.ctaLink?.url?.href}?${handleBuyClick(valueDay)}`}
                            target={button?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={button?.ctaLink?.rel ? button?.ctaLink?.rel : undefined}
                            className={`${button?.buttonColor} text-[14px] text-white py-3 px-1 lg:px-6 rounded-full font-bold min-w-[117px] lg:min-w-[315px] hidden lg:block text-center`}
                        >
                            {button?.ctaText}
                        </a>
                        <a                             
                            href={`${button?.ctaLink?.url?.href}?${handleBuyClick(valueDay)}`}
                            target={button?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={button?.ctaLink?.rel ? button?.ctaLink?.rel : undefined}
                            className={`${button?.buttonColor} text-[14px] text-white py-3 !px-1 lg:!px-6 rounded-full font-bold min-w-[117px] lg:min-w-[315px] block lg:hidden text-center`}
                        >
                            {button?.ctaTextMobile}
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tile;