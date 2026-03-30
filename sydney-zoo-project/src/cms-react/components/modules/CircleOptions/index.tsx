import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { image, link, title } = fieldValues;

	return (
        <div className='bg-grey-200 relative'>
            <div className=''>
                <div className=''>
                    <a
                        href={link?.url?.href}
                        target={link?.open_in_new_tab ? "_blank" : "_self"}
                        rel={link?.rel ? link?.rel : undefined}
                        className={[
                            "flex flex-col items-center py-5 md:py-[10px] relative pb-7",
                            "before:left-1/2 before:-translate-x-1/2 before:h-2 before:bg-orange-500 before:w-20 lg:before:w-14 before:absolute before:bottom-0"
                        ].join(' ')}
                    >
                        <div className='overflow-hidden'>
                            <img
                                src={image && image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className='rounded-full aspect-square object-cover max-w-[255px] lg:w-unset'
                                loading='lazy'
                                style={{ clipPath: 'inset(0 0 10% 0)' }}
                            />
                        </div>
                        <h3 className='px-5 text-lg lg:text-2xl text-center font-bold mb-4'>{title}</h3>
                    </a>
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Circle Options",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};