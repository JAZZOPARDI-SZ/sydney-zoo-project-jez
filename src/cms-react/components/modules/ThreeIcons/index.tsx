import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { image, title } = fieldValues;

    return (
        <div className='relative overflow-hidden' >
            <div className='flex flex-col items-center'>
                {image &&
                    <img className='max-h-[160px] object-contain' src={image?.src} alt={image?.alt} />
                }
                <p className=' text-brown-600 font-bold text-center mb-2'>{title}</p>
            </div>
        </div>
    );
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Icon Text Below",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};