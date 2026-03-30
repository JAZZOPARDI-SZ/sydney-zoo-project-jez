import React from 'react';

import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div className="">
            <div className={`grid grid-cols-1 ${fieldValues.totalColumns} gap-8 lg:gap-10`}>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <div className='bg-white flex flex-col max-w-full'>
                        {tile?.image &&
                            <img src={tile?.image?.src} className='h-[180px] lg:h-[275px] w-full object-cover' alt="Icon" />
                        }
                        <div className='flex flex-col justify-between h-full'>
                            <div className='mt-5 mx-5 pb-8'>
                                <div className='font-bold text-lg leading-[22px] uppercase tracking-[3px]'>{tile.title}</div>
                                <div className='mt-4 text-base prose-ul:list-disc' dangerouslySetInnerHTML={{__html: tile.details}} />
                            </div>
                            <div className='pt-5 mx-5 pb-6 border-t border-black'>
                                <div className='text-base prose-ul:list-disc' dangerouslySetInnerHTML={{__html: tile.eventTypeAndCapacity}} />
                            </div>
                        </div>
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
  label: "Function Tiles",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};