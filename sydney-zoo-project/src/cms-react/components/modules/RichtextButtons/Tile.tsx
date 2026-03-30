import React from 'react';


import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
}

const Tile = ({ data }: TileProps) => {

	return (
        <>
            <div className={`h-full flex flex-col px-4 py-[10px]`}>
                
                <div className='flex flex-col items-center'>
                </div>
                <div className={['', data?.ctaPosition].join(' ')}>
                    
                        <a
                            href={data?.ctaLink?.url?.href}
                            target={data?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={data?.ctaLink?.rel ? data?.ctaLink?.rel : undefined}
                            className={`${data?.buttonColor} font-bold inline-flex items-center justify-center px-6 py-3 rounded-full min-w-[222px]`}
                            
                        >
                            {data?.ctaText}
                        </a>
                    
                </div>
            </div>
        </>
    );
};

export default Tile;