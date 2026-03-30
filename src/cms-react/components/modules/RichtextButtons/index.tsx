import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { tiles, bodyDetails, ctaText, ctaPosition, ctaLink, backgroundColor } = fieldValues;

	return (
        <div className={`${backgroundColor} asdf py-16 px-6 relative`}>
            <div className='mx-auto max-w-[1140px] sm:px-6 lg:px-8'>
            <div className='prose text-brown-700 font-bold max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: bodyDetails}}></div>
                <div className='w-[1140px] max-w-full mx-auto row justify-center'>
                    {tiles.map((tile: any, index: number) => (
                        <div key={index} className={`col-12 p-0`}>
                            <Island hydrateOn='visible' module={Tile} data={tile} wrapperClassName='h-full flex flex-col' />
                        </div>
                    ))}
                    {fieldValues?.enableCta &&
                        <div className={`${ctaPosition} mt-5`}>
                            <a 
                            href={ctaLink?.url?.href}
                            target={ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={ctaLink?.rel ? ctaLink?.rel : undefined}
                            className={`inline-flex items-center text-brown-700 border-b border-brown-700 px-6 py-3`}>
                                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"></path></svg>
                                <p className='ml-1 font-bold'>{ctaText}</p>
                            </a>
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
  label: "Richtext With Buttons",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};