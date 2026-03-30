import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { blocks } = fieldValues;

	return (
        <div>
            <div className='flex flex-col'>
                <p className='text-sm leading-[16.8px] font-bold tracking-[3.5px] uppercase text-center'>{fieldValues.title}</p>
                <div className='flex flex-col md:flex-row divide-x-4 divide-grey-100 pt-[50px]'>
                    {blocks.map((block: any, index: number) => (
                        <div className='w-full'>
                            <p className='text-sm leading-[16.8px] font-bold tracking-[3.5px] uppercase text-center mb-[35px]'>{block.title}</p>
                            <div className="flex justify-center">
                                {block?.brands && block?.brands?.map((block: any, index: number) => (
                                    <a href={block?.ctaLink?.url?.href} className='w-full flex gap-x-3.5 -mb-2 justify-center items-center p-[15px]'>
                                        {block?.logo &&
                                            <img src={block?.logo?.src} className='max-h-[144px]' loading="lazy" alt="Icon" />
                                        }
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Partners Section",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};