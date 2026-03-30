import React from 'react';

import 'swiper/css';

import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
}

const Tile = ({ data }: TileProps) => {

	return (
        <div className='flex justify-center px-2 lg:px-5'>
            {data?.image &&
                <img src={data?.image?.src} className={['lg:min-w-[141px] max-w-full lg:max-w-[141px]'].join(' ')} alt={data?.image?.alt} />
            }
        </div>
    );
};

export default Tile;