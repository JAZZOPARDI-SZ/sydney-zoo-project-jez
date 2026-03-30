import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

import Tiles from './Tiles?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

// ! DO NOT DELETE
//prose mx-auto max-w-full xl:max-w-[1140px] px-4 md:px-6 xl:px-0
export const Component = ({ fieldValues, hublData }: any) => {

    const { blogs } = hublData;
    console.log('hublData', hublData)
	return (
        <div className=''>
            <div className='px-4'>
                <h2 className='text-sky-500 font-bold text-[36px] pb-5'>Sydney Zoo Media Kit</h2>
                <p className='pb-5'>Learn more about Sydney Zoo by downloading our detailed media kit.</p>
                <a
                    href={fieldValues.ctaLink?.url?.href}
                    target={fieldValues.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                    rel={fieldValues.ctaLink?.rel ? fieldValues.ctaLink?.rel : undefined}
                    className={`bg-orange-500 hover:bg-white hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition duration-300 text-white font-bold text-[15px] inline-flex items-center justify-center px-6 py-1 rounded-sm`}
                >
                        {fieldValues.ctaText}
                </a>
                <Island module={Tiles} blogs={blogs} fieldValues={fieldValues} />
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
    label: "Media Blog Tiles",
    host_template_types: HOST_TEMPLATE_TYPES,
    categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
    moduleName: "webcoda_boilerplate_react_module",
    version: 1,
};

export const hublDataTemplate = `
	{% set hublData = {
		"blogs": blog_recent_posts(module.blog, 100)
	} %}
`