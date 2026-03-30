import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { experiences } = fieldValues;

	return (
        <div className='px-4 relative'>
            <div className='mx-auto max-w-[1395px]'>
                <div className='row justify-center'>
                    {
                        experiences.map((experience, index) => (
                            <a
                                href={experience?.link?.url?.href}
                                target={experience?.link?.open_in_new_tab ? "_blank" : "_self"}
                                rel={experience?.link?.rel ? experience?.link?.rel : undefined}
                                className={[
                                    "col-6 md:col-3 flex flex-col items-center relative mb-7",
                                    "before:left-1/2 before:-translate-x-1/2 before:h-2 before:bg-orange-500 before:w-20 lg:before:w-14 before:absolute before:bottom-0"
                                ].join(' ')}
                                key={index}
                            >
                                <div className='overflow-hidden'>
                                    <img
                                        src={experience.image && experience.image.src}
                                        alt={experience.image.alt}
                                        width={experience.image.width}
                                        height={experience.image.height}
                                        className='rounded-full aspect-square object-cover'
                                        loading='lazy'
                                        style={{ clipPath: 'inset(0 0 10% 0)' }}
                                    />
                                </div>
                                <h3 className='px-5 text-lg lg:text-2xl text-center font-bold mb-4'>{experience?.title}</h3>
                            </a>
                        ))
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
  label: "Circle Options Grouped",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};