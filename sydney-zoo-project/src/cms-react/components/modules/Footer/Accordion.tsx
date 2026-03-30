import React from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';

import 'swiper/css';

interface AccordionProps {
    footerColumns: any;
}

const Carousel = ({ footerColumns }: AccordionProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

	return (
        <div className='border-white border-y'>
            <div
                className='relative w-full p-4 text-center'
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className='text-[13px] leading-[13px] tracking-[2px] font-bold uppercase'>Site Map</h4>
                <Icon icon="fa6-solid:chevron-down" className={['absolute right-0 w-5 text-white -translate-y-2/3 top-1/2', isOpen && 'rotate-180'].join(' ')} />
            </div>
            <div className={!isOpen && 'hidden'}>
                {footerColumns?.filter(col => !col?.persistOnMobile)?.map((column, index) => (
                    <div className={['w-full text-left p-2.5'].join(' ')} key={index}>
                        {column?.link?.url?.href ?
                            <a
                                href={column?.link?.url?.href}
                                target={column?.link?.open_in_new_tab ? "_blank" : "_self"}
                                rel={column?.link?.rel ? column?.link?.rel : undefined}
                                className='block text-[15px] leading-[19px] font-bold uppercase'
                            >
                                {column?.title}
                            </a>
                        :
                            <span
                                className='block text-sm font-bold text-orange-500 uppercase'
                            >
                                {column?.title}
                            </span>
                        }
                        <div className='flex flex-col gap-1 mt-3'>
                            {column?.items?.map((item, iIndex) => (
                                <div className='text-[15px] leading-[20px]' key={iIndex}>
                                    {item?.type == 'link' &&
                                        <a
                                            href={item?.link?.url?.href}
                                            target={item?.link?.open_in_new_tab ? "_blank" : "_self"}
                                            rel={item?.link?.rel ? item?.link?.rel : undefined}
                                        >{item?.text}</a>
                                    }
                                    {item?.type == 'boldLink' &&
                                        <a
                                            href={item?.boldLink?.url?.href}
                                            target={item?.boldLink?.open_in_new_tab ? "_blank" : "_self"}
                                            rel={item?.boldLink?.rel ? item?.boldLink?.rel : undefined}
                                            className='block mt-2 text-sm font-bold'
                                        >{item?.text}</a>
                                    }
                                    {item?.type == 'text' &&
                                        <p>{item?.text}</p>
                                    }
                                    {item?.type == 'heading' &&
                                        <span
                                            className='block pt-5 mb-3 text-sm font-bold text-orange-500 uppercase'
                                        >
                                            {column?.title}
                                        </span>
                                    }
                                    {item?.type == 'image' &&
                                        <img
                                            src={item.image && item.image.src}
                                            alt={item.image.alt}
                                            width={item.image.width}
                                            height={item.image.height}
                                            className='w-2/3 mx-auto mb-4 md:mx-0 md:w-full'
                                            loading='lazy'
                                        />
                                    }
                                    {item?.type == 'socialLinks' &&
                                        <div className='flex justify-center mb-5 space-x-2 md:justify-start md:mb-0'>
                                            {item?.socialLinks?.map((item, sIndex) => (
                                                <a
                                                    key={sIndex}
                                                    href={item?.link?.url?.href}
                                                    target={item?.link?.open_in_new_tab ? "_blank" : "_self"}
                                                    rel={item?.link?.rel ? item?.link?.rel : undefined}
                                                    className='w-[25px] h-[25px] flex items-center justify-center duration-300 hover:scale-110'
                                                >
                                                    <img
                                                        src={item.image && item.image.src}
                                                        alt={item.image.alt}
                                                        width={item.image.width}
                                                        height={item.image.height}
                                                        className='w-full'
                                                        loading='lazy'
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;