import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Carousel from './Carousel?island';

// import styles from "./index.module.css";
import 'swiper/css';

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div>
            <Island hydrateOn='visible' module={Carousel} fieldValues={fieldValues} />
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Testimonials",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};