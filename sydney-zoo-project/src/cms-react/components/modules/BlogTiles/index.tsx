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
    
    return (
        <div className='bg-grey-200 py-8 lg:py-16'>
            <div className='mx-auto max-w-[1500px] px-6 2xl:px-0'>
                <Island clientOnly module={Tiles} blogs={blogs?.objects} fieldValues={fieldValues} />
            </div>
        </div>
    );
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
    label: "Blog Tiles",
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
        "blogs": blog_recent_posts(module.blog, 200)
    } %}
`