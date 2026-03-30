import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import { Form } from '@hubspot/cms-components';

import SpacerImage from "../../img/animalspacer.png";

import '../../../styles/tailwind.scss';
import './index.scss'

export const Component = ({ fieldValues, hublParameters = {} }) => {
	// ${isActive ? 'bg-green-500 text-white' : 'bg-white text-brown-600'}
	return (
		<div className='bg-grey-200 py-12 relative'>
			<div className={''}>
			{fieldValues.nav.map((linkItem: any, index: number) => (
				<a
					key={index}
					href={linkItem?.link?.url?.href}
					target={linkItem?.link?.open_in_new_tab ? "_blank" : "_self"}
					rel={linkItem?.link?.rel ? linkItem?.link?.rel : undefined}
					className={` w-full md:w-unset min-w-[338px] transition duration-300 font-bold cursor-pointer inline-flex items-center justify-start hover:bg-green-500 hover:text-white px-6 py-3 mb-[5px] `}
				>
					{linkItem?.linkText}
				</a>
			))}

			</div>
			<div className='mx-auto max-w-[1200px] sm:px-6 lg:px-8'>
				<h2 className='text-5xl text-center font-bold text-orange-400 mb-10'>{fieldValues?.title}</h2>
				<Form
					fieldPath='form'
					className='mb-4 universal-form justify-center w-full flex-grow' />

				<div dangerouslySetInnerHTML={{__html: fieldValues?.details}} />
			</div>
		</div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Form Section",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};