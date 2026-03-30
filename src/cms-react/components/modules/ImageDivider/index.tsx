import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { ctaLink, image, mobileImage } = fieldValues;

	return (
        <div>
            <div className={['', mobileImage && 'hidden md:block'].join(' ')}>
                <img
                    className='w-full'
                    src={image?.src}
                    alt={image?.alt}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
            {mobileImage &&
                <div className='block md:hidden'>
                    <img
                        className='[&_video]:object-cover'
                        src={mobileImage?.src}
                        alt={mobileImage?.alt}
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
            }
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Image Divider",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};