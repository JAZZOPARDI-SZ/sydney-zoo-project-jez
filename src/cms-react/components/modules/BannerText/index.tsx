import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

// ! DO NOTE REMOVE
// ml-[5px] bg-orange-500 text-sm text-white font-bold inline-flex items-center justify-center px-6 py-3 rounded-full p-[10px]
export const Component = ({ fieldValues }: any) => {

    const { cta, enableCta, enableMobileImage, background, dividerImage, enableDarkOverlay } = fieldValues;

	return (
        <>
            <div className={['relative'].join(' ')}>
                <div className='grid md:grid-cols-2'>
                    {/* <div style={{background: `url(${background?.src})`}}></div> */}
                    {enableMobileImage && <img src={background?.src} alt={background?.alt} className='w-full h-[407px] object-cover' /> }
                    <div className='p-6 prose prose-white text-white max-w-full [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl flex justify-center items-center' dangerouslySetInnerHTML={{__html: fieldValues?.details}}></div>
                </div>
            </div>
        </>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Banner Text",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};