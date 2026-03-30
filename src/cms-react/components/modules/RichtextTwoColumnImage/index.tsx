import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { tiles, totalColumns } = fieldValues;
    console.log('fieldValues:', fieldValues);
    console.log('tiles:', tiles);
	return (
        <div className={['relative'].join(' ')}>
            <div className='row max-w-full m-0'>
                {tiles.map((tile: any, index: number) => (
                    <div key={index} className={`col-12 ${totalColumns} flex flex-col lg:flex-row px-4 pb-4 max-w-full`}>
                        <div className='col-12 lg:col-6 p-0 h-[320px] lg:h-[unset] bg-cover bg-center' style={{backgroundImage: `url("${tile.image?.src}")`}}>
                        </div>
                        <div className={`${tile.bodyBackgroundColor} flex flex-col col-12 lg:col-6 p-4 md:p-[30px] space-y-6`}>
                            <div className='prose prose-black text-black max-w-full prose-p:sleading-[1.75rem] [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: tile.bodyDetails}}></div>
                            {tile.enableBadge &&
                                <div className={['mt-4 flex items-center justify-between flex-row', tile.cta?.ctaPosition].join(' ')}>
                                    <div className='prose prose-black text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: tile.cta.extraInfo}}></div>
                                    <div className='lg:ml-2'>
                                        <p
                                            className={`${tile.cta.buttonColor} px-4 py-1 inline-flex text-white font-bold rounded-full`}
                                        >
                                            {tile.cta.badgeText}
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Richtext Two Column Image",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};