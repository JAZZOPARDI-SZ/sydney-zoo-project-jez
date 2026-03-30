import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Search from './Search?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues, hublParameters = {} }) => {

	return (
		<Island hydrateOn='visible' module={Search} fieldValues={fieldValues} />
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Search Results",
  host_template_types: HOST_TEMPLATE_TYPES,
  is_available_for_new_content: false,
  categories: ["blog_content"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};