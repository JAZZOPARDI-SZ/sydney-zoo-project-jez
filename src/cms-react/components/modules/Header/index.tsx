import React, { useState } from 'react';
import { Island } from "@hubspot/cms-components";
import { HOST_TEMPLATE_TYPES } from '../../../constants.tsx';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';
import SpacerImage from "../../img/spacer.png";
import Tile from './Tile?island';
import DesktopNav from './DesktopNav?island';
import BookingLinksNav from './BookingLinksNav?island';
import Search from './Search?island';


export const Component = ({ fieldValues }: any) => {

    const { logo, links, bookingLinks, account, accountLink } = fieldValues;

	return (
        <div className='z-[9999]'>
            <div className='bg-orange-500  h-[62px] md:h-[86px] z-[9999] flex top-0 left-0 w-full'>
                <Island module={DesktopNav} data={links} logo={logo} wrapperClassName={`h-[62px] md:h-[86px] z-[9999] flex w-full`} />
                <div className='flex justify-center items-center lg:hidden'>
                    <Island module={Tile} fieldValues={fieldValues} account={account} accountLink={accountLink} data={links} logo={logo} bookingLinkData={bookingLinks} wrapperClassName={``} />
                </div>
                <Island module={Search} fieldValues={fieldValues} logo={logo} wrapperClassName={`hidden lg:flex items-center pr-12`} />
                <Island module={BookingLinksNav} fieldValues={fieldValues} data={bookingLinks} logo={logo} wrapperClassName={`flex relative group bg-brown-500 p-3 md:px-11 tracking-[1.5px] font-bold justify-center items-center shrink-0 text-xs text-orange-500`} />
            </div>
        </div>
	);
};

// Required
export { fields } from "./fields.tsx";

// Required
export const meta = {
  label: "Header",
  global: true,
  host_template_types: HOST_TEMPLATE_TYPES,
  categories: ["design"],
};

// Not sure what this is used for yet
export const defaultModuleConfig = {
  moduleName: "webcoda_boilerplate_react_module",
  version: 1,
};