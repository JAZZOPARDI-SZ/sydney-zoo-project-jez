import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';
import Tile from './Tile?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { logos } = fieldValues;

	return (
        <div className='p-5 flex justify-center'>
            <div className='row m-0 px-0 pt-0 flex justify-center'>
                {fieldValues?.logos.map((logo: any, index: number) => (
                    <div className='col-4 lg:col-3 p-0 flex justify-center items-center' key={index}>
                        <a
                            href={logo?.link?.url?.href}
                            target={logo?.link?.open_in_new_tab ? "_blank" : "_self"}
                            rel={logo?.link?.rel ? logo?.link?.rel : undefined}
                            className=''
                        >
                            <Island module={Tile} data={logo} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Logo Section",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};