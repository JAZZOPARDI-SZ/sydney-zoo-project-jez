import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Nav from './Nav?island';
import NavMobile from './NavMobile?island';
import Tile from './Tile?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { backgroundColor, tiles, totalColumns, nav } = fieldValues;

	return (
        <div className={['relative px-4'].join(' ')}>
            <div className='grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4'>
                <div className='md:sticky top-[90px] self-start'>
                    {nav.map((tile: any, index: number) => (
                        <Island hydrateOn='visible' key={index} module={Nav} data={tile} wrapperClassName='hidden md:block' />
                    ))}
                    <Island hydrateOn='visible' module={NavMobile} data={nav} wrapperClassName='md:hidden' />
                </div>
                <div className='flex flex-wrap'>
                    {tiles.map((tile: any, index: number) => (
                        <div key={index} className={`w-full md:w-1/2 p-0 last-of-type:mb-0 md:last-of-type:mb-8 md:even:mb-8 md:mb-8`}>
                            <Island hydrateOn='visible' module={Tile} data={tile} wrapperClassName='h-full' />
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
  label: "Sticky Nav Richtext Two Column",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};