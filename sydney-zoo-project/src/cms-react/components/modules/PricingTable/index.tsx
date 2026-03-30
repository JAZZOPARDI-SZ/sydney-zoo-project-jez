import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
//@ts-ignore
import Tickets from './Tickets?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { details } = fieldValues;

	return (
        <div className='bg-grey-200 pt-10 '>
            {details &&
                <p className='text-center font-semibold mb-[25px] text-base md:text-xl'>{details}</p>
            }
            <Island module={Tickets} fieldValues={fieldValues} />
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Pricing Calculator",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};