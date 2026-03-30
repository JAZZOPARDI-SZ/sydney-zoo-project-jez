import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
 
// import styles from "./index.module.css";
 
import '../../../styles/tailwind.scss';
 
export const Component = ({ fieldValues }: any) => {
 
    const { title, badge, details } = fieldValues;
 
    return (
        <div className={['relative'].join(' ')}>
            <h2 className='font-sofa text-center font-extrabold text-[35px] md:text-[45px] text-brown-600'>{title}</h2>
            <div className={`flex flex-col items-center`}>
                <p className='bg-orange-500 px-4 py-1 inline-flex text-white font-bold rounded-full'>{badge}</p>
            </div>
            <div className='prose prose-black max-w-full [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: details}}></div>
        </div>
    );
};
 
// Required
export { fields } from "./fields.tsx";
 
// Required
export const meta = {
  label: "Simple Pricing Two/Three Column",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};
 
// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};