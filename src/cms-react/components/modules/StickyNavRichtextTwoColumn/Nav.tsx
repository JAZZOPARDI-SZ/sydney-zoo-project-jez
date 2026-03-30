import React, { useEffect, useState } from 'react';
import '../../../styles/tailwind.scss';

interface TileProps {
    data: any;
}

const Nav = ({ data }: TileProps) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const currentPath = new URL(window.location.href).pathname;
        const linkPath = data.link?.url?.href ? new URL(data.link.url.href).pathname : '';


        if (currentPath === linkPath) {
            setIsActive(true);
        } else {
            console.log('do not match, isActive false');
        }
    }, [data.link?.url?.href]);

    return (
        <div className={''}>
            <a
                href={data.link?.url?.href}
                target={data.link?.open_in_new_tab ? "_blank" : "_self"}
                rel={data.link?.rel ? data.link?.rel : undefined}
                className={` w-full md:w-unset min-w-[338px] transition duration-300 font-bold cursor-pointer inline-flex items-center justify-start hover:bg-green-500 hover:text-white px-6 py-3 mb-[5px] ${isActive ? 'bg-green-500 text-white' : 'bg-white text-brown-600'}`}
            >
                {data.linkText}
            </a>
        </div>
    );
};

export default Nav;