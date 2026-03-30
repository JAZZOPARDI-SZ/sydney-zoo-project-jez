import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';
import Tile from './Tile?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { tiles } = fieldValues;

	return (
        <div className='p-5'>
            <h1 className='text-[28px] lg:text-[44px] text-center font-bold mb-10 text-sky-500'>{fieldValues.title}</h1>
            <div className='w-[908px] max-w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 pt-0 pb-5'>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <a 
                        key={index}
                        href={tile?.link?.url?.href}
                        target={tile?.link?.open_in_new_tab ? "_blank" : "_self"}
                        rel={tile?.link?.rel ? tile?.link?.rel : undefined}
                    >
                        <Island hydrateOn='visible' module={Tile} data={tile} />
                    </a>
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Team Grid",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};