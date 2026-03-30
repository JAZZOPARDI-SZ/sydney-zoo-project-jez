import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Nav from './Nav?island';
import NavMobile from './NavMobile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { nav } = fieldValues;

	return (
        <div className={['relative'].join(' ')}>
            <div className=''>
                <div className=''>
                    {nav.map((tile: any, index: number) => (
                        <Island hydrateOn='visible' key={index} module={Nav} data={tile} wrapperClassName='' />
                    ))}
                        <Island hydrateOn='visible' module={NavMobile} data={nav} wrapperClassName='md:hidden' />
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "In page Navigation",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};