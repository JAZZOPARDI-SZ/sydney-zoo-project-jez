import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import Modifier from './Modifier?island';

// import styles from "./index.module.css";

export const Component = ({ fieldValues }: any) => {

	return (
        <Island module={Modifier} fieldValues={fieldValues} />
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
    label: "Body Background Modifier",
    host_template_types: HOST_TEMPLATE_TYPES,
    categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
    moduleName: "webcoda_boilerplate_react_module",
    version: 1,
};