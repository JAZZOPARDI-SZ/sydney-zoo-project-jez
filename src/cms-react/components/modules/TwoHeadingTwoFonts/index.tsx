import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';
import SpacerImage from "../../img/spacer.png";

export const Component = ({ fieldValues }: any) => {

    const { heading, subHeading } = fieldValues;

	return (
        <div className={'relative'}>
            <div className=''>
                <h2 className='text-[28px] md:text-[43px] tracking-normal text-center font-bold mb-4 text-orange-400'>{heading}</h2>
                <h2 className='text-[35px] font-sofa md:text-[45px] text-center uppercase tracking-normal font-bold text-brown-600'>{subHeading}</h2>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Two Headings Two Fonts",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};