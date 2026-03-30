import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { buttonColor, text, ctaPosition } = fieldValues;

	return (
        <div className={`flex flex-col w-full`}>
            <div className={['', ctaPosition].join(' ')}>
                <div
                    className={`${buttonColor} px-4 py-1 inline-flex text-white font-bold rounded-full`}
                >
                    {text}
                </div>
            </div>
    </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Price Badge",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};