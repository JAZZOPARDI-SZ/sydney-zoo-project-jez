import React from 'react';

import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { image, imageGridFields, enableText } = fieldValues;

	return (
        <div className='relative'>
            <div className=''>
                    <div className={` flex flex-col items-center p-[5px]`}>
                        {image &&
                            <img src={image?.src} className={`${enableText ? 'min-h-[275px]' : ''} aspect-[1.5/1] w-full object-cover`} alt={image?.alt} />
                        }
                        {enableText &&
                            <div className="text-center text-lg text-white font-bold w-full py-4" style={{ backgroundColor: imageGridFields.backgroundColor?.css }}>
                                <p>{imageGridFields.title}</p>
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
  label: "Image Grid",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};