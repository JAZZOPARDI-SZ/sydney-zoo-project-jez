import React, { useState, useEffect, useMemo, useCallback } from 'react';
import useSWR from 'swr'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

import useQueryString from "use-query-string";

import ShoppingCart from './OrderSummary/ShoppingCart'

import ChevronLeft from '../../icons/ChevronLeft'
import ChevronRight from '../../icons/ChevronRight'
import AddIcon from '../../icons/AddIcon'
import SubtractIcon from '../../icons/SubtractIcon'

import { useMediaQuery } from 'usehooks-ts'

import 'react-loading-skeleton/dist/skeleton.css'
import '../../../styles/tailwind.scss';
import { firstAvailableDate, firstAvailableTime, normalizeAvailabilities } from '../../utils/Availabilities';
import { updateQuery } from '../../utils/UseQueryString';
import { IUseQueryString } from '../../types/global';
import { ITicket } from './types';

const fetcher = (url) => fetch(url).then((res) => res.json());

interface IQuery {
    selectedDate: string
    selectedTime: string
}

interface IProps {
    fieldValues: any;
    selectedTickets: ITicket[];
    setSelectedTickets: (value: any) => void;
}

const ITEMS_PER_PAGE = 7

export default function MakeServerlessRequestIsland({ fieldValues, selectedTickets, setSelectedTickets }: IProps) {
    const { products } = fieldValues

    const [filteredDate, setFilteredDate] = useState(moment().format('YYYY-MM-DD'))

    // @ts-ignore
	const [query, setQuery]: any = useQueryString(typeof window !== "undefined" && window?.location || {}, updateQuery) as IUseQueryString
    const [cartInfo, setCartInfo] = useState<any>({})

    const categoryCodes = products?.map((product) => product?.categoryCode)

    const { data, error, isLoading } = useSWR(!!cartInfo?.properties?.hs_external_token ? `https://47870297.hs-sites.com/_hcms/api/getAvailability?hubId=47870297&categoryCode=${categoryCodes.join(',')}&date=${filteredDate}&apiKey=${cartInfo?.properties?.hs_external_token}` : null, fetcher)

    const { selectedDate, selectedTime }: IQuery = query

    const createCart = () => {
        axios.get(`https://47870297.hs-sites.com/_hcms/api/createCart?hubId=47870297&service=${categoryCodes.join(',')}`)
        .then(function (response) {
            setCartInfo(response.data)
        })
        .catch(function (error) {
            console.log(error);
            createCart()
        });
    }

    useEffect(() => {
        createCart()
    }, [])

    const setNextWeek = useCallback(() => {
        setFilteredDate(moment(filteredDate).add(ITEMS_PER_PAGE, 'days').format('YYYY-MM-DD'))
        setQuery({ selectedDate: "" })
    }, [ITEMS_PER_PAGE])

    const setPrevWeek = useCallback(() => {
        if (moment(filteredDate).isSameOrBefore(moment().format('YYYY-MM-DD'))) return
        setFilteredDate(moment(filteredDate).add(-ITEMS_PER_PAGE, 'days').format('YYYY-MM-DD'))
        setQuery({ selectedDate: "" })
    }, [ITEMS_PER_PAGE])

    const selectTime = (date) => {

        if (selectedTime == date.time) return
        if (date.availabilityString == "departed") return

        setQuery({ selectedTime: date.time })

        axios.post(`https://47870297.hs-sites.com/_hcms/api/updateCart?hubId=47870297&cartId=${cartInfo?.id}`, {
            "properties": {
                hs_cart_name: "Anonymous Session",
                product_code: date?.productCode,
                hs_external_token: cartInfo?.properties?.hs_external_token

            }
        })
        .then(function (response) {
            console.log(response);
            setCartInfo(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const selectDate = (date) => {
        setQuery({ selectedDate: date, selectedTime: firstAvailableTime(filteredAvailability[date]).time || null })
    }

    const filteredAvailability = useMemo(() => {
        console.log(data)
        if (data?.[categoryCodes[0]]?.availability) {
            return normalizeAvailabilities(data[categoryCodes[0]]?.availability);
        }
    }, [data, filteredDate])

    useEffect(() => {
        if (data) {
            selectDate(firstAvailableDate(filteredAvailability)?.[0])
        }
    }, [filteredAvailability])

    const filteredSelectedTime = useMemo(() => {
        if (!selectedDate && !selectedTime) return null

        return filteredAvailability?.[selectedDate]?.find((availability) => availability.time == selectedTime)
    }, [selectedDate, selectedTime])

    const selectTickets = (ticket, quantity) => {

        if (quantity < 0) quantity = 0

        const parsedQuantity = parseInt(quantity)

        let ticketsArray = [...selectedTickets]

        const existingTicket = ticketsArray.find((selectedTicket) => selectedTicket.ticket == ticket)

        if (!existingTicket) {
            ticketsArray.push({ ticket, quantity: parsedQuantity })
        }

        ticketsArray = ticketsArray.map((selectedTicket) => {
            if (selectedTicket.ticket == ticket) {
                selectedTicket.quantity = parsedQuantity
            }
            return selectedTicket
        })

        setSelectedTickets(ticketsArray)
    }

    return (
        <div className='p-16'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='grid'>
                    <h2 className='mb-4 text-[22px] leading-[30px] font-extrabold text-center'>Select your visit date</h2>
                    <div className='flex justify-between mb-[4.125rem]'>
                        <button className='shrink-0' onClick={setPrevWeek}>
                            <ChevronLeft className="w-3" />
                        </button>
                        <div className={['grid gap-10 px-6 grow grid-cols-4 md:grid-cols-7'].join(' ')}>
                            {!isLoading && filteredAvailability ? Object.keys(filteredAvailability).map((date, index) => (
                                <div key={index}>
                                    <button
                                        className='flex flex-col items-center justify-center w-full font-bold text-center uppercase cursor-pointer'
                                        onClick={() => {selectDate(date)}}
                                    >
                                        <p className='text-base tracking-[1.5px] leading-[1.416]'>{moment(date).format('ddd')}</p>
                                        <div className={[
                                            `w-[80px] h-[80px] flex flex-col items-center justify-center rounded-full aspect-square border-[3px] hover:border-green-400`,
                                            selectedDate == date ? 'bg-green-400 border-green-400 hover:bg-green-400' : 'bg-white hover:bg-white border-white cursor-pointer'
                                        ].join(' ')}>
                                            <p className='text-[2.2rem] leading-[1.2]'>{moment(date).format('DD')}</p>
                                            <p className='text-base tracking-[1.5px] leading-[1.416]'>{moment(date).format('MMM')}</p>
                                        </div>
                                    </button>
                                </div>
                            ))
                            :
                                Array.from(Array(7))?.map((item, index) =>(
                                    <Skeleton className='w-full h-[82px]' key={index} />
                                ))}
                        </div>
                        <button className='shrink-0' onClick={setNextWeek}>
                            <ChevronRight className="w-3" />
                        </button>
                    </div>
                    <div className='space-y-4 mb-[4.125rem]'>
                        <h2 className='text-[22px] leading-[30px] font-extrabold text-center'>Select your arrival time</h2>
                        <div className="grid grid-cols-5 gap-5">
                            {selectedDate && filteredAvailability?.[selectedDate] && filteredAvailability[selectedDate].map((availability, aIndex) => (
                                <div className='text-center'>
                                    <div tabIndex={1} key={aIndex} onClick={() => {selectTime(availability)}} className={[
                                        'w-full border-[3px] rounded-full font-extrabold py-1.5 focus:outline-none disabled:border-grey disabled:text-grey is-active:text-primary-2 focus:border-green-400 disabled:bg-[#d1cfcb] disabled:border-[#d1cfcb] disabled:text-[#777] text-inherit',
                                        selectedTime == availability.time ? 'bg-green-400 border-green-400 hover:bg-green-400 hover:border-green-400' :
                                        availability.availabilityString == "departed" ? 'bg-slate-300 text-slate-700 border-slate-300 hover:border-slate-300 focus:border-slate-300' : 'bg-white border-white hover:border-green-400 cursor-pointer'
                                    ].join(' ')}>
                                        <p className='font-bold'>{availability.timeDescription}</p>
                                    </div>
                                    {availability.availabilityString !== "plenty" &&
                                        <p className='tracking-[1.5px] text-[12px] leading-[17px] mt-1.5 font-extrabold uppercase text-[#d34d2a]'>{availability.availabilityString}</p>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-10'>
                        {filteredSelectedTime &&
                            <div className='pt-4 space-y-2'>
                                {filteredSelectedTime?.fareTypes && filteredSelectedTime?.fareTypes.map((fare, fIndex) => (
                                    <div key={fIndex} className='flex items-center justify-start w-full px-10 py-5 bg-white'>
                                        <div className='flex space-x-[14px] items-center justify-center'>
                                            <div className='cursor-pointer' onClick={() => {selectTickets(fare.code, (selectedTickets.find((t) => t.ticket == fare.code)?.quantity || 0) - 1)}}>
                                                <SubtractIcon />
                                            </div>
                                            <input type="number" pattern="\d*" onFocus={(e) => {e.target.select()}} onChange={(e) => {e.target.value = `${parseInt(e.target.value)}`; selectTickets(fare.code, parseInt(e.target.value))}} className="appearance-none w-10 h-[34px] text-center text-lg font-bold bg-grey-50" value={selectedTickets.find((t) => t.ticket == fare.code)?.quantity || 0} />
                                            <div className='cursor-pointer' onClick={() => {selectTickets(fare.code, (selectedTickets.find((t) => t.ticket == fare.code)?.quantity || 0) + 1)}}>
                                                <AddIcon />
                                            </div>
                                        </div>
                                        <p className='ml-4 font-bold'>{fare.description}</p>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
