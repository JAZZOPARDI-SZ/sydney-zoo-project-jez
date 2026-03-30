import React from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';

import 'swiper/css';

import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
    borderColor: string;
}

const Tile = ({ data,borderColor }: TileProps) => {

	return (
        <>
            {/* <div className='p-5 relative hidden lg:block'>
                <div className='h-[75px] overflow-hidden -mt-[80px] rounded-full flex items-center justify-center'>
                    <div className='relative'>
                        <div className={`${data?.accentColor} pb-2 rounded-full mt-[21px] h-[85px] w-[89px] flex justify-center items-center`} style={{ clipPath: 'inset(0 0 10px 0)' }}>
                            <img src={data?.image?.src} className='max-h-[39px] max-w-[39px]' alt="Icon" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='pb-10 pt-4 text-center text-base tracking-[2.5px]'>{data.imageText}</p>
                    <p className='text-[26px] text-center font-bold text-brown-600 pb-[70px]'>{data.statistic}</p>
                </div>
            </div> */}

        </>
    );
};

export default Tile;