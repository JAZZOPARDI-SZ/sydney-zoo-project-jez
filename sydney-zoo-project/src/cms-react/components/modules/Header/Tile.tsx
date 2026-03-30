import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Icon } from '@iconify/react';
import '../../../styles/tailwind.scss';
import Search from './Search';
interface TileProps {
    data: any;
    logo: any;
    bookingLinkData: any;
    accountLink: any;
    account: string
}

const Tile = ({ data, logo, bookingLinkData, account, accountLink }: TileProps) => {
    const [showLinks, setShowLinks] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleAccordionToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        if (showLinks) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showLinks]);

	return (
        <>
            <button onClick={toggleLinks} className='flex items-center mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.935" height="18.916" viewBox="0 0 23.935 18.916"><g id="Group_182" data-name="Group 182" transform="translate(-368.299 -21.604)"><line id="Line_78" data-name="Line 78" x2="20.935" transform="translate(369.799 23.104)" fill="none" stroke="#2e251d" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></line><line id="Line_79" data-name="Line 79" x2="20.935" transform="translate(369.799 31.063)" fill="none" stroke="#2e251d" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></line><line id="Line_80" data-name="Line 80" x2="20.935" transform="translate(369.799 39.02)" fill="none" stroke="#2e251d" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></line></g></svg>
            </button>
            {showLinks &&
            <div className='h-[100vh] absolute bg-orange-500 w-full max-w-full  top-0 left-0 z-[9999999] overflow-auto'>
                <div
                    className={` px-5`}
                >
                    <div className='flex justify-end items-center h-[62px] pr-8 py-4 mb-4'>
                        <a href="/" className="block  w-full">
                            <img
                                src={logo && logo.src}
                                alt={logo.alt}
                                height={logo.height}
                                className='max-h-[32px]'
                                loading='lazy'
                            />
                        </a>
                        <svg onClick={toggleLinks} className=' cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="19.828" height="19.828" viewBox="0 0 19.828 19.828"><g id="Group_357" data-name="Group 357" transform="translate(-364.086 -27.086)"><line id="Line_68" data-name="Line 68" x2="17" y2="17" transform="translate(365.5 28.5)" fill="none" stroke="#2f251d" strokeLinecap="round" strokeWidth="2"></line><line id="Line_69" data-name="Line 69" x1="17" y2="17" transform="translate(365.5 28.5)" fill="none" stroke="#2f251d" strokeLinecap="round" strokeWidth="2"></line></g></svg>
                    </div>
                    {bookingLinkData.map((link: any, index: number) => (
                        <Accordion key={index} className='flex bg-brown-500 flex-col' transition transitionTimeout={250}>
                            <AccordionItem header={
                                <div
                                    // href={link?.link?.url?.href}
                                    // target={link?.link?.open_in_new_tab ? "_blank" : "_self"}
                                    rel={link?.link?.rel ? link?.link?.rel : undefined}
                                    className='text-[14px] text-orange-500 font-bold flex items-center text-center relative'
                                >
                                    <div className='text-white w-6 h-6 mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 2"><path d="M89.2 25.21L99.29 35.3a2.46 2.46 0 0 1 0 3.46L38.76 99.28a2.43 2.43 0 0 1-3.45 0L25.21 89.2a2.46 2.46 0 0 1 0-3.46 7.73 7.73 0 0 0 0-11 7.77 7.77 0 0 0-11 0 2.43 2.43 0 0 1-3.45 0L.71 64.7a2.46 2.46 0 0 1 0-3.46L61.24.71a2.46 2.46 0 0 1 3.46 0l10.08 10.1a2.43 2.43 0 0 1 0 3.45 7.74 7.74 0 0 0-2.27 5.49 7.75 7.75 0 0 0 7.74 7.75 7.75 7.75 0 0 0 5.48-2.29 2.46 2.46 0 0 1 3.46 0zm-28.76 9.86l-5.19-5.19 3.46-3.46 5.19 5.19zm9.68 9.69l-5.19-5.2 3.45-3.45 5.19 5.18-3.45 3.46zM94.1 37l-6.79-6.8a12.64 12.64 0 0 1-19.68-10.46 12.68 12.68 0 0 1 2.14-7L63 5.9 50.59 18.3l3.46 3.46-3.46 3.46-3.47-3.46L5.91 63l6.8 6.8a12.62 12.62 0 0 1 16 1.56 12.66 12.66 0 0 1 1.57 16L37 94.09l41.26-41.21-3.49-3.47L78.23 46l3.49 3.48L94.11 37z" fill="currentColor" data-name="Layer 1"></path></g></svg>
                                    </div>
                                    <span className='tracking-[1.5px]'>
                                        TICKETS & MEMBERSHIPS
                                    </span>
                                    <Icon icon="fa6-solid:chevron-right" className={`text-white chevron !min-w-8 absolute right-0`} />
                                </div>
                            }>
                                <div className={[
                                        'flex flex-col divide-y-[1px] divide-white',
                                        data?.color
                                    ].join(' ')}
                                    >
                                        {link?.subLinks?.map((subLink: any, index: number) => (
                                            <a
                                                href={subLink?.link?.url?.href}
                                                target={subLink?.link?.open_in_new_tab ? "_blank" : "_self"}
                                                rel={subLink?.link?.rel ? subLink?.link?.rel : undefined}
                                                className='text-nowrap duration-[400ms] text-white font-bold w-full transition py-5'
                                                key={index}
                                            >
                                                {subLink?.text}
                                                
                                            </a>
                                        ))}
                                </div>
                            </AccordionItem>


                        </Accordion>
                    ))}
                    <div className='divide-y-[1px] divide-white'>
                        {data.map((link: any, index: number) => (
                            <Accordion
                                key={index}
                                className='flex flex-col'
                                transition
                                transitionTimeout={250}
                            >
                                <AccordionItem
                                    header={
                                        <div
                                            rel={link?.link?.rel ? link?.link?.rel : undefined}
                                            className='text-[18px] text-white font-bold flex items-center justify-center text-center relative'
                                            onClick={() => handleAccordionToggle(index)}
                                        >
                                            {expandedIndex === index ? (
                                                <a
                                                    href={link?.link?.url?.href}
                                                    target={link?.link?.open_in_new_tab ? "_blank" : "_self"}
                                                    rel={link?.link?.rel ? link?.link?.rel : undefined}
                                                    className='text-[13px]'
                                                >
                                                    {link?.text}
                                                </a>
                                            ) : (
                                                <span className='text-[13px]'>{link?.text}</span>
                                            )}
                                            <Icon icon="fa6-solid:chevron-right" className={`text-white chevron !min-w-8 absolute right-0`} />
                                        </div>
                                    }
                                >
                                    <div
                                        className={[
                                            'flex flex-col justify-center items-center divide-y-[1px] divide-white',
                                            data?.color
                                        ].join(' ')}
                                        style={{ backgroundColor: 'rgba(255,255,255, 0.05)' }}
                                    >
                                        {link?.subLinks?.map((subLink: any, subIndex: number) => (
                                            <a
                                                href={subLink?.link?.url?.href}
                                                target={subLink?.link?.open_in_new_tab ? "_blank" : "_self"}
                                                rel={subLink?.link?.rel ? subLink?.link?.rel : undefined}
                                                className='text-nowrap duration-[400ms] text-white font-bold w-full text-center hover:!bg-orange-500 transition py-5'
                                                key={subIndex}
                                            >
                                                {subLink?.text}
                                            </a>
                                        ))}
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </div>
                <div className='mt-10 z-[99999]'>
                        <Search data={data} logo={logo} />
                </div>
                <div className='mt-4 z-[99999] flex justify-center'>
                    <a
                        href={accountLink?.url?.href}
                        target={accountLink?.open_in_new_tab ? "_blank" : "_self"}
                        rel={accountLink?.rel ? accountLink?.rel : undefined}
                        className='text-nowrap flex items-center justify-center uppercase duration-[400ms] text-white font-bold w-full text-center hover:!bg-orange-500 transition py-5'
                        
                    >
                         <svg className='w-5 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">{/*<!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path fill="#2f251d" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8 .4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg> 
                        {account}
                    </a>
                </div>
            </div>
            }
        </>
    );
};

export default Tile;