import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Tile from './Tile?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div>
            <div className='max-w-full grid grid-cols-6 gap-5 px-4 pt-0'>
                {fieldValues?.tiles.map((tile: any, index: number) => (
                    <div className={tile.cardSize}>
                        <Island module={Tile} data={tile} wrapperClassName={[tile.color, tile.cardSize == 'col-span-6 md:col-span-3' && 'lg:flex', 'h-full'].join(' ')} />
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
  label: "Card Grid Grouped",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};