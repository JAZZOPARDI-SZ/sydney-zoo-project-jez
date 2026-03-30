import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { tiles, cols, downloadText, downloadLink, title } = fieldValues;

    return (
        <div className='relative overflow-hidden bg-grey-200' >
            <div className='flex flex-col items-center p-[10px]'>
                <p className='mb-12 font-bold text-green-500 '>{title}</p>
                <a
                    href={downloadLink?.url?.href}
                    target={downloadLink?.open_in_new_tab ? "_blank" : "_self"}
                    rel={downloadLink?.rel ? downloadLink?.rel : undefined}
                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-orange-500 rounded-full"
                >
                    {downloadText}
                </a>
            </div>
        </div>
    );
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Download Section",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  isAvailableForNewContent: false,
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};