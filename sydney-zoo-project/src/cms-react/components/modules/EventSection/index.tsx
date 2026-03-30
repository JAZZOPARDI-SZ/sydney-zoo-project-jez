import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';
// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { tiles, totalColumns, title, freeEvent, majorEvent, memberEvent, pastEvent, learnMore } = fieldValues;
    console.log('fieldValues:', fieldValues);
    console.log('tiles:', tiles);
	return (
        <div className={['relative'].join(' ')}>
            <div className='row max-w-full m-0'>
                <Island hydrateOn='visible' module={Tile} data={tiles} title={title} freeEvent={freeEvent} majorEvent={majorEvent} memberEvent={memberEvent} pastEvent={pastEvent} learnMore={learnMore}  totalColumns={totalColumns} wrapperClassName='h-full flex flex-col' />
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Event Section",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};