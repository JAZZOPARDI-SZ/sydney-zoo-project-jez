import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { logos, image, link } = fieldValues;

	return (
        <a
            href={link?.url?.href}
            target={link?.open_in_new_tab ? "_blank" : "_self"}
            rel={link?.rel ? link?.rel : undefined}
            className='inline-flex justify-center items-center w-full h-full'
        >
            {image &&
                <img src={image?.src} className={['aspect-square object-contain max-h-[161px]'].join(' ')} alt={image?.alt} />
            }
        </a>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Link Image",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};