import React from 'react';

import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';


import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { image } = fieldValues;

	return (
        <div className='py-16'>
            <div className='relative'>
                <div className=''>
                        <div className='bg-white flex flex-col items-center'>
                            {image &&
                                <img src={image?.src} className='aspect-square w-full object-contain' alt={image?.alt} />
                            }
                        </div>
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Image Grid",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};