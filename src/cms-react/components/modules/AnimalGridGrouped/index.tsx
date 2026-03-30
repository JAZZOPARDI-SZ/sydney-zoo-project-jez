import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { tiles } = fieldValues;

	return (
        <div className=''>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 pt-0 pb-5 px-4'>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <Island key={index} module={Tile} data={tile} />
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";


// Required
export const meta = {
  label: "Animal Grid Grouped",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  is_available_for_new_content: true,
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};