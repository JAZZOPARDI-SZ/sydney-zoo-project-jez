import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';
import moment from 'moment';

import FlagLeft from './flagleft.png'
import FlagRight from './flagright.png'
// import TripA from './TC_2023_LL_KNOCKOUT-871x1024.png'

export const Component = ({ fieldValues }: any) => {

    const { cta, style, backgroundPosition, videoCtaLink, videoCtaText, imageLink, imageAbosulteRight } = fieldValues;
    
    console.log('fieldValues.video', fieldValues.video)
	return (
		<div className={`grid lg:grid-cols-2 ${fieldValues.bannerImage.src ? 'min-h-[50vh]' : 'min-h-[20vh]'}`}>
            <div className={`${fieldValues?.imageRight == 'right' ? 'md:order-1' : ''}`}>
                {fieldValues.bannerImage.src && !fieldValues.enableVideo && (
                    <div className={`${backgroundPosition} w-full h-[40vh] lg:h-full object-cover bg-cover`} style={{backgroundImage: `url(${fieldValues.bannerImage.src})`}} />
                )}
                {fieldValues.enableVideo && (
                    <div className='relative w-full h-[70vh] lg:h-full flex justify-center overflow-hidden items-end pb-9'>
                        <a                             
                            href={imageLink?.url?.href}
                            target={imageLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={imageLink?.rel ? imageLink?.rel : undefined}
                            className='absolute top-3 right-3 z-10'
                        >
                            <img src={imageAbosulteRight.src} alt="" className='w-[88px]' />
                        </a>
                        <a
                            href={videoCtaLink?.url?.href}
                            target={videoCtaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={videoCtaLink?.rel ? videoCtaLink?.rel : undefined}
                            className={`z-[10] bg-orange-500  border-2 border-orange-500 hover:border-green-500 hover:bg-green-500 hover:text-white text-sm text-white transition duration-300 font-bold inline-flex items-center justify-center px-6 py-3 rounded-full`}
                            
                        >
                            {videoCtaText}
                        </a>
                            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" src={`${fieldValues.video.oembed_url}`} className='w-[1200px] h-[800px] md:w-[1200px] md:h-[900px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' style={{}}></iframe>
                        
                    </div>
                )}
            </div>
            <div className={[style == 'default' && 'flex flex-col justify-center'].join(' ')}>
                {style == 'birthday' &&
                    <div className='flex justify-between'>
                        <div className='w-full flex justify-start'>
                            <img src={FlagLeft} className='max-w-[43%]' alt={""} />
                        </div>
                        <div className='w-full flex justify-end'>
                            <img src={FlagRight} className='max-w-[43%]' alt={""} />
                        </div>
                    </div>
                }
                <div 
                    className={`flex flex-col justify-center px-4 lg:px-20 py-6 gap-5 items-start lg:max-w-[calc(1200px/2)] ${fieldValues?.imageRight == 'right' ? 'lg:pl-4 lg:ml-auto' : ''}`}>
                    <div className={[fieldValues?.contentPosition, 'w-full'].join(' ')}>
                        <h1 className={[
                            'text-[28px] leading-[1.2em] mb-0 md:!text-[40px] text md:leading-[1.35em] font-bold  lg:leading-[1.25em]',
                            !fieldValues.customTitleColor ? '' : fieldValues?.titleColor, fieldValues.titleFont, fieldValues.titleFontSize, fieldValues.titleFontSize == 'small' ? 'lg:!text-[28px] !text-[20px]' : '',
                        ].join(' ')} style={{color: fieldValues.customTitleColor.css ? fieldValues.customTitleColor.css : ''}}>{fieldValues?.title}</h1>
                        {fieldValues?.subTitle &&
                            <p className={[
                                'text-base leading-[1.5em] font-bold lg:text-[18px] mt-5',
                                !fieldValues?.customSubTitleColor ? '' : fieldValues?.subTitleColor, fieldValues.subTitleLetterSpacing,
                            ].join(' ')} style={{color: fieldValues?.customSubTitleColor.css ? fieldValues?.customSubTitleColor.css : ''}}>{fieldValues?.subTitle}</p>
                        }
                        {fieldValues?.date &&
                            <p className="font-bold mt-5">{moment(parseInt(fieldValues?.date)).format("MMMM Do, YYYY")}</p>
                        }
                    </div>
                    {fieldValues?.details &&
                        <div className='leading-[1.5em] w-full' dangerouslySetInnerHTML={{__html: fieldValues?.details}}></div>
                    }
                    {fieldValues?.image?.src &&
                        <img src={fieldValues?.image?.src} className='h-[160px]' alt="Icon" />
                    }
                    {fieldValues?.enableCta && 
                        <div className='w-full'>
                            {cta.map((tile: any, index: number) => (
                                <Island key={index} module={Tile} data={tile} wrapperClassName='flex flex-col' />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Hero Split",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};