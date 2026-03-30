import React, { Component as ReactComponent } from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import { Form } from '@hubspot/cms-components';

import SpacerImage from "../../img/animalspacer.png";

import '../../../styles/tailwind.scss';
import './index.scss'

class FormErrorBoundary extends ReactComponent {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return null;
		}
		return this.props.children;
	}
}

export const Component = ({ fieldValues, hublParameters = {} }) => {

	return (
		<div className='bg-green-500 py-12 relative bg-no-repeat' style={{backgroundImage: `url(${SpacerImage})`, backgroundPosition: '50% 104%'}}>
			<div className='mx-auto max-w-[934px] sm:px-6 lg:px-0'>
				<h2 className='uppercase text-center font-bold text-orange-500 mb-5'>{fieldValues?.title}</h2>
				{fieldValues?.form?.form_id && (
					<FormErrorBoundary>
						<Form
							fieldPath='form'
							className='flex newsletter-form justify-center w-full flex-grow' />
					</FormErrorBoundary>
				)}
			</div>
            {/* <img src={SpacerImage} alt="Spacer Animals" className='h-16 absolute top-[calc(104%-74px)] bg-repeat-x left-1/2 -translate-x-1/2' /> */}
		</div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Newsletter",
  global: true,
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};