import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
import Carousel from './Carousel?island';
import Button from './Button?island';

// import styles from "./index.module.css";
import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

	return (
        <div className="bg-repeat bg-cover" style={{backgroundImage: `url(${fieldValues?.background?.src})`}}>
            <div className='w-[1600px] max-w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-5 pt-[50px] pb-[60px]'>
                <div>
                    {fieldValues?.type == 'text' &&
                        <h2 className={['text-[55px] font-bold text-center mb-5', fieldValues?.titleColor].join(' ')}>{fieldValues?.title}</h2>
                    }
                    {fieldValues?.type == 'image' &&
                        <img
                            src={fieldValues.titleImage && fieldValues.titleImage.src}
                            alt={fieldValues.titleImage.alt}
                            width={fieldValues.titleImage.width}
                            height={fieldValues.titleImage.height}
                            className='w-full mb-5'
                            loading='lazy'
                        />
                    }
                    <div className='prose text-center max-w-none' dangerouslySetInnerHTML={{__html: fieldValues?.richText}}></div>
                    <Island hydrateOn='visible' module={Button} fieldValues={fieldValues} />
                </div>
                <Island hydrateOn='visible' module={Carousel} fieldValues={fieldValues} wrapperClassName='flex flex-col justify-end md:pr-2.5' />
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Text Left Slider Right",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};