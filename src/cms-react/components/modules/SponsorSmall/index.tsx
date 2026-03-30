import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { sponsorText, sponsorImage } = fieldValues;

	return (
        <div className='bg-grey-200'>
            <div className='mx-auto max-w-[1152px] sm:px-6 lg:px-8 pb-20'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <p className='font-bold pb-4 md:pb-0 md:pt-4 md:mr-6'>{sponsorText}</p>
                    {sponsorImage &&
                        <img src={sponsorImage?.src} className={'h-[65px]'} alt={sponsorText} />
                    }
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Sponsor Small",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};