import React from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

// ! DO NOTE REMOVE
// ml-[5px] bg-orange-500 text-sm text-white font-bold inline-flex items-center justify-center px-6 py-3 rounded-full p-[10px]
export const Component = ({ fieldValues }: any) => {

    const { cta, enableCta, enableDivider, background, dividerImage, enableDarkOverlay } = fieldValues;

	return (
        <>
            <div className={['pt-16 px-4 relative !bg-cover !bg-center !bg-no-repeat hidden lg:block', enableDivider ? 'pb-32' : 'pb-16'].join(' ')} style={{background: `${enableDarkOverlay ? `linear-gradient(90deg, rgba(5, 5, 5, 0.75) 42%, rgba(255, 255, 255, 0) 100%), ` : ''}url(${background?.src})`}}>
                <div className='mx-auto max-w-[1140px] sm:px-6 lg:px-8 grid md:grid-cols-2'>
                    <div className='prose prose-white text-white max-w-full [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl' dangerouslySetInnerHTML={{__html: fieldValues?.details}}></div>
                    <div className={['mt-12', cta?.ctaPosition].join(' ')}>
                        {(cta?.ctaText && enableCta) &&
                            <a
                                href={cta?.ctaLink?.url?.href}
                                target={cta?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                                rel={cta?.ctaLink?.rel ? cta?.ctaLink?.rel : undefined}
                                className="bg-orange-500 text-sm font-bold inline-flex items-center justify-center px-6 py-3 rounded-full !no-underline"
                            >
                                {cta?.ctaText}
                            </a>
                        }
                    </div>
                </div>
                {enableDivider &&
                    <img src={dividerImage?.src} alt={dividerImage?.alt} className='w-full h-16 absolute -bottom-px left-0' />
                }
            </div>
            <div className={['pt-16 px-4 relative !bg-cover !bg-center !bg-no-repeat block lg:hidden', enableDivider ? 'pb-32' : 'pb-16'].join(' ')} style={{background: `${enableDarkOverlay ? `linear-gradient(90deg, rgba(5, 5, 5, 0.75) 100%, rgba(255, 255, 255, 0) 100%), ` : ''}url(${background?.src})`}}>
                <div className='mx-auto max-w-[1140px] sm:px-6 lg:px-8 grid md:grid-cols-2'>
                    <div className='prose prose-white text-white max-w-full [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:!text-xl [&_h2]:lg:!text-[30px]' dangerouslySetInnerHTML={{__html: fieldValues?.details}}></div>
                    <div className={['mt-12', cta?.ctaPosition].join(' ')}>
                        {(cta?.ctaText && enableCta) &&
                            <a
                                href={cta?.ctaLink?.url?.href}
                                target={cta?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                                rel={cta?.ctaLink?.rel ? cta?.ctaLink?.rel : undefined}
                                className="bg-orange-500 text-sm font-bold inline-flex items-center justify-center px-6 py-3 rounded-full !no-underline"
                            >
                                {cta?.ctaText}
                            </a>
                        }
                    </div>
                </div>
                {enableDivider &&
                    <img src={dividerImage?.src} alt={dividerImage?.alt} className='w-full h-16 absolute -bottom-px left-0' />
                }
            </div>
        </>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Banner",
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};