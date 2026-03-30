import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import { Icon } from '@iconify/react';


// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { cta, image, cardSize, title, details, color } = fieldValues;

	return (
        <div>
            <div className='max-w-full grid grid-cols-2'>
                    <div className={cardSize}>
                        {/* <Island module={Tile} data={tile} wrapperClassName={[color, cardSize == 'col-span-6 md:col-span-3' && 'lg:flex', 'h-full'].join(' ')} /> */}
                        <div className={[color, cardSize == 'col-span-6 md:col-span-3' && 'lg:flex', 'h-full'].join(' ')} >
                            {image &&
                                <img src={image?.src} className={[cardSize == 'col-span-6 md:col-span-3' ? 'md:aspect-[2/1] lg:aspect-square object-cover w-full lg:w-[300px] max-w-full' : 'aspect-[1.5/1] w-full object-cover'].join(' ')} alt={image?.alt} />
                            }
                            <div className='py-[30px] px-5 text-white flex flex-col justify-between'>
                                <div>
                                    <p className='font-bold text-[25px] leading-[30px] text-center mb-5'>{title}</p>
                                    <div className='text-white text-center min-h-[110px] leading-7' dangerouslySetInnerHTML={{__html: details}} />
                                </div>
                                <div className='flex items-center justify-center mt-2.5'>
                                    <a className={['text-center font-bold py-2.5 px-[30px] rounded-full flex items-center justify-center gap-1', cta.color].join(' ')} href={cta?.ctaLink?.url?.href}>
                                        <span>{cta?.ctaText}</span>
                                        <Icon icon="fa-solid:arrow" className='w-5 text-white' />
                                        <svg className='w-4 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> {/*<!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Card Grid New",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};