import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Icon } from '@iconify/react';
import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
    logo: any;
}

const Tile = ({ data, logo }: TileProps) => {


	return (
        <>
            <a href="/" className="flex items-center px-10 lg:py-[25px] grow-1 w-full max-w-full">
                <img
                    src={logo && logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    className='max-h-[32px] lg:max-h-[44px] test'
                    loading='lazy'
                />
            </a>
            <div className='shrink-0 hidden lg:flex items-center space-x-[60px] mr-20 text-white font-extrabold max-w-full'>
                {data?.map((link: any, index: number) => {
                    return (
                    <div
                        key={index}
                        className={[
                            'relative group h-full flex items-center',
                            'last-of-type:before:hidden before:w-4 before:h-[2px] before:absolute before:bg-white before:left-[calc(100%+22px)] before:top-1/2 before:-translate-y-1/2'
                        ].join(' ')}
                    >
                        <a
                            href={link?.link?.url?.href}
                            target={link?.link?.open_in_new_tab ? "_blank" : "_self"}
                            rel={link?.link?.rel ? link?.link?.rel : undefined}
                            className='text-[13px]'
                        >
                            {link?.text}
                        </a>
                        <div className={[
                            'group-hover:flex z-10 flex-col divide-y divide-white/30 hidden -left-[30px] py-4 px-4 absolute top-full min-w-full',
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
                                    className={`${isActive ? 'opacity-75' : ''} text-nowrap py-2 duration-[400ms] hover:opacity-75 text-[15px]`}
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

export default Tile;