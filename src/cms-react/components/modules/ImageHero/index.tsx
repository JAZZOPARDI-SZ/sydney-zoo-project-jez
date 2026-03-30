import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { ctaLink, image, mobileImage, height, mobileHeight } = fieldValues;

	return (
        <a
            href={ctaLink?.url?.href}
            target={ctaLink?.open_in_new_tab ? "_blank" : "_self"}
            rel={ctaLink?.rel ? ctaLink?.rel : undefined}
        >
            <div className='hidden md:block aspect-[5/1.5]' style={{ height: `${height}px`, width: height ? '100%' : '' }}>
                <img
                    className='object-cover'
                    src={image?.src}
                    alt={image?.alt}
                    width={'100%'}
                    height={'100%'}
                    style={{ height: `${height}px` }}
                />
            </div>
            <div className='block md:hidden aspect-square' style={{ height: `${mobileHeight}px`, width: height ? '100%' : '' }}>
                <img
                    className='object-cover'
                    src={mobileImage?.src}
                    alt={mobileImage?.alt}
                    width={'100%'}
                    height={'100%'}
                    style={{ height: `${mobileHeight}px` }}
                />
            </div>
        </a>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Image Hero",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};
