import React from 'react';
import '../../../styles/tailwind.scss';

import { Icon } from '@iconify/react';

interface TileProps {
    data: any;
}

const Nav = ({ data }: TileProps) => {

    return (
            <div className={``}>
                <a
                    href={data.link?.url?.href}
                    target={data.link?.open_in_new_tab ? "_blank" : "_self"}
                    rel={data.link?.rel ? data.link?.rel : undefined}
                    className={`${data?.accentColor} w-full transition duration-300 hover:opacity-85 text-white font-bold cursor-pointer inline-flex items-center justify-between px-6 py-3 mb-[5px]`}
                >
                    {data.linkText}
                    <Icon icon="fa6-solid:chevron-right" className='text-white w-5' />
                </a>
            </div>
    );
};

export default Nav;