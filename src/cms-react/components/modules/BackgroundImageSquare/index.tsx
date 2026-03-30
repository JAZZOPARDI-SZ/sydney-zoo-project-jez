import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';
import SpacerImage from "../../img/pattern-top.png";

export const Component = ({ fieldValues }: any) => {

    const { image } = fieldValues;

	return (
        <div className='bg-grey-200 relative w-full h-16'>
            <div style={{backgroundImage: `url(${SpacerImage})`}} className='w-full h-16 opacity-10 absolute bottom-0 bg-repeat-x left-0' />
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Background Image Square",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};