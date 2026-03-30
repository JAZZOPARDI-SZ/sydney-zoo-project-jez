import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';
// import Tile from './Tile?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { tiles, borderColor } = fieldValues;

	return (
        <div className='max-w-full bg-grey-200'>
            <div className='row m-0 p-0 justify-center'>
                <div className="flex flex-wrap justify-center">
                    {fieldValues?.tiles.map((tile: any, index: number) => (
                        <div className='col-6 lg:col-3 mb-20 p-0 lg:bg-white lg:mb-0 flex flex-col'>
                            <div className={`pt-5 bg-white flex-grow relative`}>
                                <div className='h-[75px] overflow-hidden -mt-[80px] rounded-full flex items-center justify-center'>
                                    <div className='relative'>
                                        <div className={`${tile?.accentColor} pb-2 rounded-full mt-[21px] h-[85px] w-[89px] flex justify-center items-center`} style={{ clipPath: 'inset(0 0 10px 0)' }}>
                                            <img src={tile?.image?.src} className='max-h-[39px] max-w-[39px]' alt="Icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`px-5 flex flex-col h-full  bg-white`}>
                                    <p className='pb-10 pt-4 text-center text-base tracking-[2.5px]'>{tile.imageText}</p>
                                    <div className='flex justify-center items-center'>
                                        <p className='text-[18px] text-center font-bold text-brown-600 pb-[70px] break-words'>{tile.statistic}</p>
                                    </div>
                                </div>
                                <div className={`${borderColor} h-[10px] absolute bottom-0 left-0 w-full`}></div>
                            </div>
                            <div className={`${borderColor} h-[10px] lg:block hidden`}></div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Animal Information",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  is_available_for_new_content: true,
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};