import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Nav from './Nav?island';


// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { nav, text } = fieldValues;

	return (
        <div className={['relative'].join(' ')}>
            <h4 className=' text-brown-600 font-bold text-[15px] mb-8 mx-4'>{text}</h4>
            <div className='border-y border-black py-4 mx-4'>
                {nav.map((tile: any, index: number) => (
                    <Island hydrateOn='visible' key={index} module={Nav} data={tile} wrapperClassName='' />
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Animal Navigation",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  is_available_for_new_content: true,
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};