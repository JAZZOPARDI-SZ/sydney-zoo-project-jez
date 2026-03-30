import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import { Icon } from '@iconify/react';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div>
            <div className='max-w-[1600px] w-3/4 sm:w-full mx-auto flex justify-center text-center'>
                <img
                    src={fieldValues.titleImage && fieldValues.titleImage.src}
                    alt={fieldValues.titleImage.alt}
                    width={fieldValues.titleImage.width}
                    height={fieldValues.titleImage.height}
                    className=''
                    loading='lazy'
                />
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Heading Module",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};