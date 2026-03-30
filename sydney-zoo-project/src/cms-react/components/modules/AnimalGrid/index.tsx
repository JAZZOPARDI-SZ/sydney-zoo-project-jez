import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import Tile from './Carousel?island.ts';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {
    const { accentColor, image, animalHeading, animalScientificName, link } = fieldValues;

	return (
        <div className='mb-5'>
            <a                         
            href={link?.url?.href}
            target={link?.open_in_new_tab ? "_blank" : "_self"}
            rel={link?.rel ? link?.rel : undefined} className='flex flex-col items-center aspect-square justify-center bg-cover transition duration-200 bg-no-repeat hover:opacity-90' style={{backgroundPosition: 'center center', backgroundImage: `linear-gradient(0deg, ${accentColor}, ${accentColor}), url(${image.src})`}}>
                <div className='py-[30px] px-5 text-white text-center'>
                    <p className='font-bold text-2xl'>{animalHeading}</p>
                    <p className='text-base'>{animalScientificName}</p>
                </div>
            </a>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";


// Required
export const meta = {
  label: "Animal Grid",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
  is_available_for_new_content: true,
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};