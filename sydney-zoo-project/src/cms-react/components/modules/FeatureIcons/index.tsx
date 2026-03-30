import React from 'react';

import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div>
            {/* @ts-ignore */}
            <div className='row justify-center gap-5' style={{'--bs-gutter-x': '0'}}>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <div className='flex flex-col items-center text-center md:col-2'>
                        <div className='h-[120px] flex items-center justify-center'>
                            {tile?.image &&
                                <img src={tile?.image?.src} className='object-cover max-h-[154px]' alt="Icon" />
                            }
                        </div>
                        <p className='font-bold text-[17px] leading-[20px] text-center mt-5' dangerouslySetInnerHTML={{__html: tile.title}} />
                    </div>
                ))}
            </div>
        </div>
	);
}
// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Feature Icons",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};