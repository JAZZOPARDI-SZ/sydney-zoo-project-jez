import React from 'react';

import 'swiper/css';

import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
}

const Tile = ({ data }: TileProps) => {

	return (
        <div>
            <a                         
            href={data?.link?.url?.href}
            target={data?.link?.open_in_new_tab ? "_blank" : "_self"}
            rel={data?.link?.rel ? data?.link?.rel : undefined} className='flex flex-col items-center aspect-square justify-center bg-cover transition duration-200 bg-no-repeat hover:opacity-90' style={{backgroundPosition: 'center center', backgroundImage: `linear-gradient(0deg, ${data.accentColor}, ${data.accentColor}), url(${data.image.src})`}}>
                <div className='py-[30px] px-5 text-white text-center'>
                    <p className='font-bold text-2xl'>{data?.animalHeading}</p>
                    <p className='text-base'>{data?.animalScientificName}</p>
                </div>
            </a>
        </div>
    );
};

export default Tile;