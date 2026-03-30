import React from 'react';

import {ITicket} from './types'

import '../../../styles/tailwind.scss';
interface TileProps {
    fieldValues: any;
    selectedTickets: ITicket[];
    setSelectedTickets: (value: any) => void;
}


const Tile = ({ fieldValues }: TileProps) => {

    const { tickets, products, productHelpText, note } = fieldValues;

	return (
        <div className={['relative'].join(' ')}>
            <div className='space-y-[5px] w-full md:w-[370px] mx-auto mb-[60px]'>
            </div>
            <div className='p-[10px] flex max-w-[1140px] mx-auto'>
            {products?.map((product: any, index: number) => (
                <div key={index} className={[
                    'w-full flex flex-col',
                    product?.productTheme === 'orange' ? 'bg-white' : '',
                    product?.productTheme === 'sky' ? 'bg-sky-400' : '',
                    product?.productTheme === 'green' ? 'bg-green-500' : '',
                ].join(' ')}>
                    <div>
                        {product?.tagLine}
                    </div>
                    <div >
                        <p>
                            {product?.productName}
                        </p>
                        <div>
                            $0.00
                        </div>
                    </div>
                    <div className={['px-2.5 pb-[46px] pt-[30px] text-center relative h-full', product?.productTheme === 'grey' ? 'text-white' : 'text-black'].join(' ')}>
                        <div className='absolute w-full -translate-y-1/2 top-full'>
                            <a
                                href={product?.link?.url?.href}
                                target={product?.link?.open_in_new_tab ? "_blank" : "_self"}
                                rel={product?.link?.rel ? product?.link?.rel : undefined}
                                className={[
                                    'w-[90%] text-[15px] font-semibold py-3 px-6 flex items-center justify-center text-nowrap rounded-full',
                                    product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500 border-2 bg-white' : '',
                                    product?.productTheme === 'sky' ? 'bg-sky-500 text-white' : '',
                                    product?.productTheme === 'grey' ? 'bg-[#636363] text-white' : ''
                                ].join(' ')}
                            >Buy now</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div className='mt-[50px] text-center text-brown-600' dangerouslySetInnerHTML={{__html: note}} />
        </div>
    );
};

export default Tile;