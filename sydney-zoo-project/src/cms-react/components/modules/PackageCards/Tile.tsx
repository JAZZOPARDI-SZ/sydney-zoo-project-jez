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
        <div className={[data?.enableCustomColor ? '' : data?.color, data.cardSize == 'col-span-3' && 'flex', 'h-full'].join(' ')} style={{backgroundColor: data?.enableCustomColor ? data?.customBackgroundColor?.css : ''}}>
            {data?.image &&
                <img src={data?.image?.src} className={[data.cardSize == 'col-span-3' ? 'aspect-square object-cover w-[300px] max-w-full' : 'aspect-[1.5/1] w-full object-cover'].join(' ')} alt={data?.image?.alt} />
            }
            <div className='py-[30px] px-5 text-brown-600'>
                <p className={`${data?.enableCustomColor ? data?.customHeadingColor : 'text-brown-600' } font-bold text-[18px] leading-[30px] tracking-[3px] mb-5 ${data.badge ? 'min-h-[59px]' : ''}`} style={{color: data?.enableCustomColor ? data?.customHeadingColor?.css : ''}}>{data.title}</p>
                <div className='mt-6'>
                    {data.badge && <p className='bg-orange-500 text-base px-5 py-3 mb-2 inline-flex text-white font-bold rounded-full'>{data?.badge}</p>}
                </div>
                <div className='prose prose-black text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: data?.details}} />
            </div>
        </div>
    );
};
 
export default Tile;