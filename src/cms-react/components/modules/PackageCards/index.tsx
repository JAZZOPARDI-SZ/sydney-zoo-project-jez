import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';
 
// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';
 
export const Component = ({ fieldValues }: any) => {
 
    return (
        <div className="">
            <div className='grid grid-cols-12 gap-y-10 gap-x-5 pt-0 px-4 max-w-full'>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <div className={`${tile.cardSize}  flex h-full`}>
                        <Island hydrateOn='visible' module={Tile} data={tile} />
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
  label: "Package Cards",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};