import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import { Form } from '@hubspot/cms-components';

import SpacerImage from "../../img/animalspacer.png";

import Tile from './Tile?island';

import '../../../styles/tailwind.scss';
import './index.scss'

export const Component = ({ fieldValues, hublParameters = {} }) => {
	console.log(fieldValues);

	return (
		<div id='booking' className='relative'>
			<div className={''}>
				<Island hydrateOn='visible' module={Tile} data={fieldValues.nav} buttonPosition={fieldValues.buttonPosition} submitOptions={fieldValues.submitButtonOption} titleColor={fieldValues.titleColor} fontSize={fieldValues.fontSize} position={fieldValues.ctaPosition} titleFont={fieldValues.titleFont} wrapperClassName={``} />
			</div>
			<div className='px-4' dangerouslySetInnerHTML={{__html: fieldValues?.details}} />
		</div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Booking Form",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};