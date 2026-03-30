import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';
// import VideoPlayer from './VideoPlayer?island';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ fieldValues }: any) => {

    const { bannerVideo, mobileVideo, ctaLink } = fieldValues;

	return (
        <a
            href={ctaLink?.url?.href}
            target={ctaLink?.open_in_new_tab ? "_blank" : "_self"}
            rel={ctaLink?.rel ? ctaLink?.rel : undefined}
        >
            <div className='hidden lg:block aspect-[5/1.5]'>
                <video
                    className='[&_video]:object-cover'
                    src={bannerVideo}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
            <div className='block lg:hidden aspect-square'>
                <video
                    className='[&_video]:object-cover'
                    src={mobileVideo}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
        </a>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Video Hero",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};