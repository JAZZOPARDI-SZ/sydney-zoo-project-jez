import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { blocks } = fieldValues;

	return (
        <div className='overflow-hidden text-white bg-brown-600'>
            <div className='grid grid-cols-2 md:flex md:flex-row divide-x divide-brown-300 min-h-[125px] md:min-h-[unset]'>
                {blocks.map((block: any, index: number) => (
                    <a href={block?.ctaLink?.url?.href}
                        target={block.link?.open_in_new_tab ? "_blank" : "_self"}
                        rel={block.link?.rel ? block.link?.rel : undefined}
                        className={['w-full flex gap-x-3.5 -mb-2 justify-center items-center p-2.5 overflow-hidden', index <= 1 ? 'col-span-1' : 'border-l-none md:border-t-0 border-t border-brown-300 bg-brown-600 col-span-2'].join(' ')}>
                        {block?.icon &&
                            <img src={block?.icon?.src} className='-mt-1.5 max-h-[25px] max-w-[25px]' alt="Icon" />
                        }
                        <p className='font-sofa font-semibold text-sm lg:text-base'>{block.title}</p>
                    </a>
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
    label: "Action Bar",
    host_template_types: HOST_TEMPLATE_TYPES,
    categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
    moduleName: "webcoda_boilerplate_react_module",
    version: 1,
};