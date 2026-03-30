import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';
import './index.scss'

export const Component = ({ fieldValues }: any) => {

    const { tiles, title } = fieldValues;

	return (
        <div className={`relative px-4`}>
            <div className='row justify-center m-0'>
                {/* <h2 className='text-[#555] pl-0 font-semibold text-[16px] border-b border-[#a0a0a0] pb-[9px]'>{title}</h2> */}
                <div className={`col-12 p-0`}>
                    <Island hydrateOn='visible' module={Tile} data={tiles} wrapperClassName='h-full flex flex-col' />
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Open Postions",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};