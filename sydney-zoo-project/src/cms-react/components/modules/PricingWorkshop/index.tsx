import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { backgroundColor, tiles, totalColumns, title } = fieldValues;

	return (
        <div className={['relative p-4', backgroundColor].join(' ')}>
            <div className=''>
                <div className='row justify-center m-0'>
                    {tiles.map((tile: any, index: number) => (
                        <div key={index} className={`${totalColumns} p-0`}>
                            <Island hydrateOn='visible' module={Tile} data={tile} totalColumns={totalColumns} wrapperClassName='h-full flex flex-col' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Pricing Two/Three Column",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};