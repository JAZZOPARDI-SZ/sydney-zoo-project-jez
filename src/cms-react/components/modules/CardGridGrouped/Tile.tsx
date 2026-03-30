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
        <>
            {data?.image &&
                <img src={data?.image?.src} className={[data.cardSize == 'col-span-6 md:col-span-3' ? 'md:aspect-[2/1] lg:aspect-square object-cover w-full lg:w-[300px] max-w-full' : 'aspect-[1.5/1] w-full object-cover'].join(' ')} alt={data?.image?.alt} />
            }
            <div className='py-[30px] px-5 text-white flex flex-col justify-between'>
                <div>
                    <p className='font-bold text-[25px] leading-[30px] text-center mb-5'>{data.title}</p>
                    <div className='text-white text-center min-h-[110px] leading-7' dangerouslySetInnerHTML={{__html: data.details}} />
                </div>
                <div className='flex items-center justify-center mt-2.5'>
                    <a className={['text-center font-bold py-2.5 px-[30px] rounded-full flex items-center justify-center gap-1', data.cta.color].join(' ')} href={data?.cta?.ctaLink?.url?.href}>
                        <span>{data.cta?.ctaText}</span>
                        <Icon icon="fa6-solid:arrow-right" className='w-5 text-white' />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Tile;