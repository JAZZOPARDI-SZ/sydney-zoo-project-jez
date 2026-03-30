import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { format, isBefore } from 'date-fns';
import { enAU } from 'date-fns/locale';
import { toZonedTime } from 'date-fns-tz';

import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
    totalColumns: string;
    title: string;
}

const Tile = ({ data, totalColumns, title }: TileProps) => {
    const [filter, setFilter] = useState<string>('SHOW ALL');
    const currentDate = new Date();
    const timeZone = 'Australia/Sydney';

    const pastEvents = data.filter((tile: any) => isBefore(new Date(tile.dateEnd), currentDate));
    const upcomingEvents = data.filter((tile: any) => !isBefore(new Date(tile.dateEnd), currentDate));

    const filterEvents = (events: any[]) => {
        return events.filter((tile: any) => {
            if (filter === 'SHOW ALL') return true;
            if (filter === 'FREE EVENTS' && tile.freeEvent) return true;
            if (filter === 'MAJOR EVENTS' && tile.majorEvent) return true;
            if (filter === 'MEMBER EVENTS' && tile.memberEvent) return true;
            return false;
        });
    };

    const filteredUpcomingEvents = filterEvents(upcomingEvents);
    const filteredPastEvents = filterEvents(pastEvents);

    const groupedPastEvents = filteredPastEvents.reduce((acc: any, tile: any) => {
        const year = format(toZonedTime(new Date(tile.dateEnd), timeZone), 'yyyy', { locale: enAU });
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(tile);
        return acc;
    }, {});

    return (
        <>
            <div className='flex justify-between flex-wrap gap-4 mb-7'>
                <h2 className='text-green-500 font-bold text-[36px]'>{title}</h2>
                <div className='flex gap-2 items-center flex-wrap'>
                    <p className='font-bold'>FILTER BY</p>
                    <button onClick={() => setFilter('SHOW ALL')} className={`font-bold rounded-full transtion duration-300 hover:text-white hover:bg-[#DA9E29] text-[#DA9E29] text-[11px] px-[10px] py-[5px] border-2 border-[#DA9E29] ${filter === 'SHOW ALL' ? 'bg-[#DA9E29] text-white' : ''}`}>SHOW ALL</button>
                    <button onClick={() => setFilter('FREE EVENTS')} className={`font-bold rounded-full transtion duration-300 hover:text-white hover:bg-sky-600 text-sky-600 text-[11px] px-[10px] py-[5px] border-2 border-sky-600 ${filter === 'FREE EVENTS' ? 'bg-sky-600 text-white' : ''}`}>FREE EVENTS</button>
                    <button onClick={() => setFilter('MAJOR EVENTS')} className={`font-bold rounded-full transtion duration-300 hover:text-white hover:bg-orange-500  text-orange-500 text-[11px] px-[10px] py-[5px] border-2 border-orange-500 ${filter === 'MAJOR EVENTS' ? 'bg-orange-500 text-white' : ''}`}>MAJOR EVENTS</button>
                    <button onClick={() => setFilter('MEMBER EVENTS')} className={`font-bold rounded-full transtion duration-300 hover:text-white hover:bg-[#19695B] text-[#19695B] text-[11px] px-[10px] py-[5px] border-2 border-[#19695B] ${filter === 'MEMBER EVENTS' ? 'bg-[#19695B] text-white' : ''}`}>MEMBER EVENTS</button>
                </div>
            </div>
            {filteredUpcomingEvents.map((tile: any, index: number) => {
                const dateStart = format(toZonedTime(new Date(tile.dateStart), timeZone), 'd', { locale: enAU });
                const monthStart = format(toZonedTime(new Date(tile.dateStart), timeZone), 'MMM', { locale: enAU });
                const dateEnd = format(toZonedTime(new Date(tile.dateEnd), timeZone), 'd', { locale: enAU });
                const monthEnd = format(toZonedTime(new Date(tile.dateEnd), timeZone), 'MMM', { locale: enAU });

                return (
                    <div key={index} className={`col-12 ${totalColumns} flex flex-col lg:flex-row pb-4 max-w-full mb-16`}>
                        <div className='col-12 lg:col-6 p-0 h-[320px] lg:h-[unset] inline-flex flex-col justify-end bg-cover bg-center text-white' style={{backgroundImage: `url("${tile.image?.src}")`}}>
                            <div className=' inline-flex'>
                                <p className='text-[30px] bg-black/35 font-bold flex flex-col items-center pl-[10px]'>{dateStart} <span className='text-base'>{monthStart}</span></p>
                                <p className='text-base bg-black/35 flex flex-col items-center justify-center px-5'>-</p>
                                <p className='text-[30px] bg-black/35 font-bold flex flex-col items-center pr-[10px]'>{dateEnd} <span className='text-base'>{monthEnd}</span></p>
                            </div>
                        </div>
                        <div className={`flex flex-col col-12 lg:col-6 p-4 md:p-[30px]`} style={{ backgroundColor: tile.backgroundColor?.css }}>
                            <div className='prose prose-black text-white max-w-full prose-p:sleading-[1.75rem] [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-white' dangerouslySetInnerHTML={{__html: tile.bodyDetails}}></div>
                            {tile.learnMore &&
                                <div className='mb-14 text-center'>
                                    <a
                                        href={tile.ctaLink?.url?.href}
                                        target={tile.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                                        rel={tile.ctaLink?.rel ? tile.ctaLink?.rel : undefined}
                                        className={`px-10 py-3 text-[12px] inline-flex tracking-[3px] text-white font-bold rounded-full bg-green-500`}
                                    >
                                        LEARN MORE
                                    </a>
                                </div>
                            }
                            <div className='flex gap-4'>
                                {tile.freeEvent &&
                                    <p
                                        className={`bg-sky-600 text-[11px] px-3 py-1 tracking-[2.6px] inline-flex text-white font-bold rounded-full uppercase`}
                                    >
                                        Free with entry
                                    </p>
                                }
                                {tile.majorEvent &&
                                    <p
                                        className={`bg-orange-500 text-[11px] px-3 py-1 tracking-[2.6px] inline-flex text-white font-bold rounded-full uppercase`}
                                    >
                                        Major Event
                                    </p>
                                }
                                {tile.memberEvent &&
                                    <p
                                        className={`bg-green-500 text-[11px] px-3 py-1 tracking-[2.6px] inline-flex text-white font-bold rounded-full uppercase`}
                                    >
                                        Member Event
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                );
            })}
            <h3 className='text-green-500 font-bold text-[36px] mb-5'>Past Events</h3>
            {Object.keys(groupedPastEvents).sort((a, b) => Number(b) - Number(a)).map((year) => (
                <div key={year} className='row'>
                    <h3 className='text-brown-600 font-bold text-[24px] mb-4'>{year}</h3>
                    {groupedPastEvents[year].map((tile: any, index: number) => {
                        const dateStart = format(toZonedTime(new Date(tile.dateStart), timeZone), 'd', { locale: enAU });
                        const monthStart = format(toZonedTime(new Date(tile.dateStart), timeZone), 'MMM', { locale: enAU });
                        const dateEnd = format(toZonedTime(new Date(tile.dateEnd), timeZone), 'd', { locale: enAU });
                        const monthEnd = format(toZonedTime(new Date(tile.dateEnd), timeZone), 'MMM', { locale: enAU });
                        const isSameDate = tile.dateStart === tile.dateEnd;
                        console.log('tile', isSameDate, tile.dateStart, tile.dateEnd);
                        return (
                            <div key={index} className={`col-12 md:col-6 lg:col-4 pb-4 max-w-full opacity-60`}>
                                <div className=' p-0 bg-white lg:h-full inline-flex flex-col bg-cover bg-center text-white'>
                                    <div className='relative'>
                                        <img src={tile?.image?.src} className={['object-cover min-h-[260px] max-h-[260px] w-full'].join(' ')} alt={data?.image?.alt} />
                                        <div className='absolute bottom-0 left-0 inline-flex'>
                                            <p className={`text-[30px] bg-black/35 font-bold flex flex-col items-center pl-[10px] ${isSameDate ? 'pr-[10px]' : ''}`}>{dateStart} <span className='text-base'>{monthStart}</span></p>
                                            {!isSameDate && (
                                                <>
                                                    <p className='text-base bg-black/35 flex flex-col items-center justify-center px-5'>-</p>
                                                    <p className='text-[30px] bg-black/35 font-bold flex flex-col items-center pr-[10px]'>{dateEnd} <span className='text-base'>{monthEnd}</span></p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className='px-4 py-6 h-full flex flex-col justify-between'>
                                        <div className='prose prose-black text-black max-w-full prose-p:sleading-[1.75rem] [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-black' dangerouslySetInnerHTML={{__html: tile.bodyDetails}}></div>
                                        <div>
                                            {tile.learnMore &&
                                                <div className='text-center mb-5'>
                                                    <a
                                                        href={tile.ctaLink?.url?.href}
                                                        target={tile.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                                                        rel={tile.ctaLink?.rel ? tile.ctaLink?.rel : undefined}
                                                        className={`px-8 py-2 inline-block text-[12px]  tracking-[3px] text-white font-bold rounded-full bg-green-500`}
                                                    >
                                                        LEARN MORE
                                                    </a>
                                                </div>
                                            }
                                            <div className='flex gap-4 flex-wrap'>
                                                {tile.freeEvent &&
                                                    <p
                                                        className={`bg-sky-600 text-[11px] px-3 py-1 tracking-[2.6px] inline-flex text-white font-bold rounded-full uppercase`}
                                                    >
                                                        Free with entry
                                                    </p>
                                                }
                                                {tile.majorEvent &&
                                                    <p
                                                        className={`bg-orange-500 text-[11px] px-3 py-1 tracking-[2.6px] inline-flex text-white font-bold rounded-full uppercase`}
                                                    >
                                                        Major Event
                                                    </p>
                                                }
                                                {tile.memberEvent &&
                                                    <p
                                                        className={`bg-green-500 text-[11px] px-3 py-1 tracking-[2.6px] inline-flex text-white font-bold rounded-full uppercase`}
                                                    >
                                                        Member Event
                                                    </p>
                                                }
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );
};

export default Tile;