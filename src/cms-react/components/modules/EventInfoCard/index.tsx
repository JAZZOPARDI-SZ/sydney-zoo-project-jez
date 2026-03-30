import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { backgroundColor, extraInfo, image, title, bodyDetailsLeft, bodyDetailsRight, badge } = fieldValues;

	return (
        <div className={['relative', backgroundColor].join(' ')}>
            <div className=''>
                <div className={`row`}>
                    <div className='col-12 md:col-4 p-0'>
                        <img src={image?.src} className={['object-cover max-w-full h-full'].join(' ')} alt={image?.alt} />
                    </div>
                    <div className='col-12 md:col-8 bg-white min-h-[320px]'>
                        <div className='p-8'>
                            <p className='mt-2 mb-4 text-brown-700 text-xl font-bold'>{title}</p>
                            <div className='row'>
                                <div className='col-12 md:col-6 prose prose-black text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: bodyDetailsLeft}}></div>
                                <div className='col-12 md:col-6 prose prose-black prose-ul:mt-0 prose-li:mt-0 text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: bodyDetailsRight}}></div>
                            </div>
                            <div className='flex justify-center items-center mt-6'>
                                <p className='mr-8 text-brown-700 text-xl font-bold'>{extraInfo}</p>
                                <p className='bg-orange-500 px-4 py-1 inline-flex text-white font-bold rounded-full'>{badge}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Event Info Card",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};