import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';
import SpacerImage from "../../img/spacer.png";

export const Component = ({ fieldValues }: any) => {

    const { tableHeading, rows, enableDivider } = fieldValues;

	return (
        <div className={['relative'].join(' ')}>
            <div className='sm:px-6 lg:px-0'>
                <table className='w-full'>
                    <tr className='bg-green-500'>
                        {tableHeading.map((heading: any, index: number) => (
                            <th key={index} className='text-left font-bold p-5 text-white uppercase text-lg'>{heading.title}</th>
                        ))}
                    </tr>
                    {rows.map((row: any, index: number) => (
                        <tr key={index} className='border-b-2 border-brown-600/30'>
                            {row?.cols.map((col: any, index: number) => (
                                <td className='p-5 align-top'>
                                    <div>
                                        <div className='prose prose-black max-w-full [&_p]:m-0 [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: col?.text}}></div>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Table Area",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};