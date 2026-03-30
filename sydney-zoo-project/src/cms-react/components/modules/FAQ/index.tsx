import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { tiles, labelChevronColor, borderColor, hoverColor } = fieldValues;

	return (
        <div className={`relative`}>
            <div className='col-12 prose prose-black text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: fieldValues.description}}></div>
            <div className=''>
                <div className='row justify-center m-0'>
                    <div className={`col-12 p-0`}>
                        <Island hydrateOn='visible' module={Tile} data={tiles} hoverColor={hoverColor} labelChevronColor={labelChevronColor} borderColor={borderColor} wrapperClassName='h-full flex flex-col' />
                    </div>
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Accordions",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};