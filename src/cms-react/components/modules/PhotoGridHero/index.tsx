import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { animalHeading, animalScientificName, accentColor, imageTopLeft, imageBottomLeft, imageRight, imageWorld } = fieldValues;

	return (
        <div className='row max-w-full mx-auto'>
            <div className='col-12 lg:col-6 p-0 max-w-full'>
                <div className='row m-0'>
                    <div className='px-4 min-h-[30vh] md:min-h-[50vh] lg:min-h-[50vh] col-12 bg-no-repeat bg-cover p-0 flex flex-col justify-center items-center' style={{backgroundPosition: 'center center', backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageTopLeft.src})`}}>
                        <h1 className='text-[44px] font-bold text-white text-center'>{animalHeading}</h1>
                        <p className={`text-base font-bold text-white tracking-[1.6px]`}><span className='font-normal'>SPECIES </span>{animalScientificName}</p>
                    </div>
                    <div className='min-h-[25vh] md:min-h-[40vh] lg:min-h-[45vh] col-6 p-0 bg-no-repeat bg-cover' style={{backgroundPosition: 'center center', backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageBottomLeft.src})`}}>

                    </div>
                    <div className={`${accentColor} min-h-[25vh] md:min-h-[40vh] lg:min-h-[45vh] col-6 p-0 flex flex-col justify-center items-center`}>
                        <img src={imageWorld?.src} alt={imageWorld?.alt} className='w-[95px] h-[95px] lg:w-[250px] lg:h-[250px] text-brown-600 object-contain' />
                        <h3 className={`text-white text-base`}>DISTRIBUTION</h3>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex min-h-[95vh] col-6 h-full p-0 bg-cover bg-no-repeat' style={{backgroundPosition: 'center center', backgroundImage: `url(${imageRight.src})`}}></div>

        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Photo Grid Hero",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};