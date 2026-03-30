import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

import LionImage from './lion-right-hero-image.jpg'

export const Component = ({ fieldValues }: any) => {

    const { cta, style, backgroundPosition, videoCtaLink, videoCtaText, imageLink, imageAbosulteRight } = fieldValues;
    
	return (
		<div className={`grid lg:grid-cols-2 min-h-[50vh]`}>
            <div className={``}>
                <div className={` w-full h-[40vh] lg:h-full object-cover bg-cover bg-center`} style={{backgroundImage: `url(${LionImage})`}} />
            </div>
            <div className={['flex flex-col justify-center'].join(' ')}>
                <div className='flex flex-col justify-center px-4 lg:px-20 py-6 gap-5 items-start'>
                    <div className={['w-full'].join(' ')}>
                        <h1 className={[
                            'text-[48px] text-green-500 leading-[1.2em] mb-5 md:text-[40px] text md:leading-[1.35em] font-bold  lg:leading-[1.25em]'
                        ].join(' ')}>Roarrrrr...</h1>
                        
                            <p className={[
                                'text-base text-brown-600 leading-[1.2em] font-bold lg:text-[18px]'
                            ].join(' ')}>Translation: “Page not found”</p>
                            <a href="/" className='font-bold text-[15px] leading-[100%] mt-5 inline-block bg-orange-500 text-white px-6 py-2 rounded '>Home</a>
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
  label: "404",
  host_template_types: HOST_TEMPLATE_TYPES,
  is_available_for_new_content: false,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};