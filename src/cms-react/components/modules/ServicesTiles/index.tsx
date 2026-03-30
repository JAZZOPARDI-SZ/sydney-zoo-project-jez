import React from 'react';

import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div className='grid md:grid-cols-3 gap-0 md:gap-10 px-4'>
            {fieldValues?.tiles.map((tile: any, index: number) => (
                <div className='bg-white flex flex-col items-center'>
                    {tile?.image &&
                        <img src={tile?.image?.src} className='w-full aspect-[3/2] object-cover' alt="Icon" />
                    }
                    <div className='px-5 pt-5 pb-7'>
                        <div className={`${tile.ctaPosition} font-bold text-lg leading-[28px] uppercase tracking-[3px]`} dangerouslySetInnerHTML={{__html: tile.title}} />
                        <div className='mt-4 text-sm prose-ul:list-disc leading-[28px] ' dangerouslySetInnerHTML={{__html: tile.details}} />
                    </div>
                </div>
            ))}
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Service Tiles",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};