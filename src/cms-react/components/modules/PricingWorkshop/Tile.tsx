import React from 'react';


import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
    totalColumns: string;
}

const Tile = ({ data, totalColumns }: TileProps) => {

	return (
        <>
            <div className={`${data.headerOptions.headerBackgroundColor} text-center px-4 pt-4 pb-3  ${totalColumns == 'col-6' ? 'min-h-[117px] md:min-h-[unset]' : 'min-h-[117px] md:min-h-[76px] lg:min-h-[unset] '}`}>
                <p className='text-white font-bold'>{data.headerOptions?.title}</p>
            </div>
            <div className={`${data.bodyOptions.bodyBackgroundColor} h-full flex flex-col items-center justify-between p-4 space-y-6`}>
                <div className='prose prose-black max-w-full [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: data.bodyOptions?.bodyDetails}}></div>
                <div className='flex flex-col items-center'>
                    <p className='bg-orange-500 px-4 py-1 inline-flex text-white font-bold rounded-full'>{data.bodyOptions?.badge}</p>
                    <p className='mt-4 pb-6'>{data.bodyOptions?.extraInfo}</p>
                </div>
            </div>
        </>
    );
};

export default Tile;