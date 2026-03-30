import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Icon } from '@iconify/react';
import '../../../styles/tailwind.scss';

interface BookingLinksProps {
    data: any;
    logo: any;
    fieldValues?: any;
}

const BookingLinksNav = ({ data, logo, fieldValues }: BookingLinksProps) => {

	return (
        <>
            {/* <a href={'/tickets'} className='flex bg-brown-500 px-8 tracking-[1.5px] font-bold justify-center items-center shrink-0 uppercase text-xs text-orange-500'>
                <div className='text-white w-6 h-6 mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 2"><path d="M89.2 25.21L99.29 35.3a2.46 2.46 0 0 1 0 3.46L38.76 99.28a2.43 2.43 0 0 1-3.45 0L25.21 89.2a2.46 2.46 0 0 1 0-3.46 7.73 7.73 0 0 0 0-11 7.77 7.77 0 0 0-11 0 2.43 2.43 0 0 1-3.45 0L.71 64.7a2.46 2.46 0 0 1 0-3.46L61.24.71a2.46 2.46 0 0 1 3.46 0l10.08 10.1a2.43 2.43 0 0 1 0 3.45 7.74 7.74 0 0 0-2.27 5.49 7.75 7.75 0 0 0 7.74 7.75 7.75 7.75 0 0 0 5.48-2.29 2.46 2.46 0 0 1 3.46 0zm-28.76 9.86l-5.19-5.19 3.46-3.46 5.19 5.19zm9.68 9.69l-5.19-5.2 3.45-3.45 5.19 5.18-3.45 3.46zM94.1 37l-6.79-6.8a12.64 12.64 0 0 1-19.68-10.46 12.68 12.68 0 0 1 2.14-7L63 5.9 50.59 18.3l3.46 3.46-3.46 3.46-3.47-3.46L5.91 63l6.8 6.8a12.62 12.62 0 0 1 16 1.56 12.66 12.66 0 0 1 1.57 16L37 94.09l41.26-41.21-3.49-3.47L78.23 46l3.49 3.48L94.11 37z" fill="currentColor" data-name="Layer 1"></path></g></svg>
                </div>
                <p className='hidden md:block'>Book now</p>
            </a> */}
            <div className='text-white font-extrabold w-full h-full'>
                {data?.map((link: any, index: number) => {
                    return (
                    <div
                        key={index}
                        className={[
                            'h-full flex items-center',
                            'last-of-type:before:hidden before:absolute before:bg-white before:left-[calc(100%+22px)] before:top-1/2 before:-translate-y-1/2'
                        ].join(' ')}
                    >
                        <a
                            href={link?.link?.url?.href}
                            target={link?.link?.open_in_new_tab ? "_blank" : "_self"}
                            rel={link?.link?.rel ? link?.link?.rel : undefined}
                            className={'flex bg-brown-500 tracking-[1.5px] font-bold justify-center items-center shrink-0 uppercase text-xs text-orange-500'}
                        >
                            <div className='text-white w-6 h-6 mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 2"><path d="M89.2 25.21L99.29 35.3a2.46 2.46 0 0 1 0 3.46L38.76 99.28a2.43 2.43 0 0 1-3.45 0L25.21 89.2a2.46 2.46 0 0 1 0-3.46 7.73 7.73 0 0 0 0-11 7.77 7.77 0 0 0-11 0 2.43 2.43 0 0 1-3.45 0L.71 64.7a2.46 2.46 0 0 1 0-3.46L61.24.71a2.46 2.46 0 0 1 3.46 0l10.08 10.1a2.43 2.43 0 0 1 0 3.45 7.74 7.74 0 0 0-2.27 5.49 7.75 7.75 0 0 0 7.74 7.75 7.75 7.75 0 0 0 5.48-2.29 2.46 2.46 0 0 1 3.46 0zm-28.76 9.86l-5.19-5.19 3.46-3.46 5.19 5.19zm9.68 9.69l-5.19-5.2 3.45-3.45 5.19 5.18-3.45 3.46zM94.1 37l-6.79-6.8a12.64 12.64 0 0 1-19.68-10.46 12.68 12.68 0 0 1 2.14-7L63 5.9 50.59 18.3l3.46 3.46-3.46 3.46-3.47-3.46L5.91 63l6.8 6.8a12.62 12.62 0 0 1 16 1.56 12.66 12.66 0 0 1 1.57 16L37 94.09l41.26-41.21-3.49-3.47L78.23 46l3.49 3.48L94.11 37z" fill="currentColor" data-name="Layer 1"></path></g></svg>
                            </div>                           
                            <p className='hidden md:block uppercase tracking-[1.5px]'>{link?.text}</p>
                        </a>
                        <div className={[
                            'group-hover:md:flex divide-y divide-white z-10 flex-col hidden left-0 py-4 px-4 absolute top-full min-w-full',
                            link?.color
                        ].join(' ')}>
                            {link?.subLinks?.map((subLink: any, index: number) => {
                                const [isActive, setIsActive] = useState(false);

                                useEffect(() => {
                                    const currentPath = new URL(window.location.href).pathname;
                                    let linkPath = '';
                                
                                    try {
                                        linkPath = new URL(subLink?.link?.url?.href, window.location.origin).pathname;
                                    } catch (e) {
                                        console.error('Invalid URL:', subLink?.link?.url?.href);
                                    }
                                
                                    if (currentPath === linkPath) {
                                        setIsActive(true);
                                    } else {
                                        // console.log('do not match, isActive false');
                                    }
                                }, [subLink?.link?.url?.href]);

                                return (
                                <a
                                    key={index}
                                    href={subLink?.link?.url?.href}
                                    target={subLink?.link?.open_in_new_tab ? "_blank" : "_self"}
                                    rel={subLink?.link?.rel ? subLink?.link?.rel : undefined}
                                    className={`${isActive ? 'opacity-75' : ''} text-nowrap py-[13px] text-[15px] duration-[400ms] hover:opacity-75`}
                                >
                                    {subLink?.text}
                                </a>
                                )
                            })}
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    );
};

export default BookingLinksNav;