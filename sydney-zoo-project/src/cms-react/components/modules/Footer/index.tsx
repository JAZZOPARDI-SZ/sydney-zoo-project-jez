import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import Accordion from './Accordion?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';
import './styles.scss';

export const Component = ({ fieldValues }: any) => {

    const { logo, footerColumns, privacyAndTerms, termsText } = fieldValues;

    return (
        <footer className="px-10 py-10 text-white bg-no-repeat md:px-0 zoo-footer bg-brown-600">
            <img
                src={logo && logo.src}
                alt={logo.alt}
                height={logo.height}
                className='mb-8 max-w-full w-[217px] mx-auto'
                loading='lazy'
            />
            <div className="max-w-[1038px] mx-auto">
                <Island hydrateOn='visible' module={Accordion} footerColumns={footerColumns} wrapperClassName='mb-8 md:hidden' />
                <div className='flex flex-col md:flex-row gap-5 px-2.5'>
                    {footerColumns?.map((column, index) => (
                        <div key={index} className={['w-full text-center md:text-left', !column?.persistOnMobile && 'hidden md:block'].join(' ')}>
                            {column?.link?.url?.href ?
                                <a
                                    href={column?.link?.url?.href}
                                    target={column?.link?.open_in_new_tab ? "_blank" : "_self"}
                                    rel={column?.link?.rel ? column?.link?.rel : undefined}
                                    className='block text-sm font-bold uppercase hover:underline'
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
                                {column?.items?.map((item, index) => (
                                    <div key={index} className='text-xs'>
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
                                                {item?.text}
                                            </span>
                                        }
                                        {item?.type == 'image' &&
                                            <img
                                                src={item.image && item.image.src}
                                                alt={item.image.alt}
                                                width={item.image.width}
                                                height={item.image.height}
                                                className='w-[50%] lg:w-2/3 mx-auto mb-4 md:mx-0 md:w-full'
                                                loading='lazy'
                                            />
                                        }
                                        {item?.type == 'socialLinks' &&
                                            <div className='flex justify-center mb-5 space-x-2 md:justify-start md:mb-0'>
                                                {item?.socialLinks?.map((item, index) => (
                                                    <a
                                                    key={index}
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
            <div className='flex justify-center flex-wrap items-center mt-5 divide-x-[1px] divide-white'>
                {privacyAndTerms?.map((item, index) => (
                    <a
                        key={index}
                        href={item?.link?.url?.href}
                        target={item?.link?.open_in_new_tab ? "_blank" : "_self"}
                        rel={item?.link?.rel ? item?.link?.rel : undefined}
                        className='text-center text-xs px-2'
                    >
                        {item?.termsText}
                    </a>
                ))}
                <p className='text-center text-xs pl-2'>
                    © {new Date().getFullYear()} Sydney Zoo
                </p>
            </div>
        </footer>
    );
};
 
// Required
export { fields } from "./fields.tsx";
 
// Required
export const meta = {
  label: "Footer",
  global: true,
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};
 
// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};