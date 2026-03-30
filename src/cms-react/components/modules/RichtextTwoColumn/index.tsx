import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { backgroundColor, tiles, totalColumns } = fieldValues;

	return (
        <div className={['relative px-4', backgroundColor].join(' ')}>
            <div className=''>
                <div className='row justify-center m-0'>
                    {tiles.map((tile: any, index: number) => (
                        <div key={index} className={`col-12 ${totalColumns} p-0 md:mb-8`}>
                            <Island hydrateOn='visible' module={Tile} data={tile} wrapperClassName='h-full flex flex-col space-y-6 ' />
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
  label: "Richtext Two Column",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};