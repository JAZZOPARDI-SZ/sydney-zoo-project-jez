import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { tiles } = fieldValues;

    return (
        <div className='flex gap-2'>
            {tiles.map((tile: any, index: number) => (
                <a
                    key={index}
                    href={tile?.link?.url?.href}
                    target={tile?.link?.open_in_new_tab ? "_blank" : "_self"}
                    rel={tile?.link?.rel ? tile?.link?.rel : undefined}
                    className=''
                >
                    <img src={tile?.image?.src} className='aspect-square object-contain w-[32px]' alt={tile?.image?.alt} />
                </a>
            ))}
        </div>
    );
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Social Links",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};