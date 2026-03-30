import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';
import Tile from './Tile?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { image, title } = fieldValues;

    return (
        <div className='relative overflow-hidden' >
            <div className='flex flex-col md:flex-row items-center'>
                {image &&
                    <img className='max-w-[107px] object-contain' src={image?.src} alt={image?.alt} />
                }
                <p className='md:ml-[15px] pb-4 md:pb-0 pt-2 md:pt-0 font-bold text-center md:text-start'>{title}</p>
            </div>
        </div>
    );
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Text and Icons",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};