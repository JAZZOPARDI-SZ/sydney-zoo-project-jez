import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { cta, ctaLink, buttonColor, ctaText, ctaPosition, spacing, minWidth } = fieldValues;

	return (
        <div className={`flex flex-col w-full ml-4`} style={{ marginTop: spacing?.margin?.top?.value, marginBottom: spacing?.margin?.bottom?.value }}>
            <div className={['', ctaPosition].join(' ')}>

                {buttonColor === 'true' ?
                    <a
                        href={ctaLink?.url?.href}
                        target={ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                        rel={ctaLink?.rel ? ctaLink?.rel : undefined}
                        className={`inline-flex items-center text-brown-700 border-b border-brown-700 px-6 py-3`}
                    >
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"></path></svg>
                        <p className='ml-1 font-bold'>{ctaText}</p>
                    </a>
                    :
                    <a
                        href={ctaLink?.url?.href}
                        target={ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                        rel={ctaLink?.rel ? ctaLink?.rel : undefined}
                        className={`${buttonColor} font-bold text-base inline-flex items-center justify-center px-6 py-3 rounded-full`}
                        style={{ minWidth: minWidth ? `${minWidth}px` : '200px' }}
                    >
                        {ctaText}
                    </a>
                }
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Custom Button",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};