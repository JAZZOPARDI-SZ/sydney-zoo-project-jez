import React from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';

import 'swiper/css';

import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
}

const Tile = ({ data }: TileProps) => {

	return (
        <div className='flex flex-col items-center'>
            {data?.image &&
                <img src={data?.image?.src} className={['aspect-square object-cover w-[207px] max-w-full rounded-full'].join(' ')} alt={data?.image?.alt} />
            }
            <div className='pb-[30px] px-5 text-brown-600 text-center'>
                <p className='font-bold'>{data?.userName}</p>
                <p className='text-sm'>{data?.position}</p>
            </div>
        </div>
    );
};

export default Tile;