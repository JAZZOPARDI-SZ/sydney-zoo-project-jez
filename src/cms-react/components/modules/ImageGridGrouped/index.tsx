import React from 'react';

import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { title } = fieldValues;

	return (
        <div className='relative'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-[2px] md:gap-[10px]'>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <div key={index} className='bg-white flex flex-col items-center'>
                        <a 
                            href={tile?.ctaLink?.url?.href}
                            target={tile?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={tile?.ctaLink?.rel ? tile?.ctaLink?.rel : undefined}
                        >
                            {tile?.image &&
                                <img src={tile?.image?.src} className='aspect-[1.5/1] w-full object-cover' alt={tile?.image?.alt} />
                            }
                        </a>
                    </div>
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Image Grid Grouped",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};