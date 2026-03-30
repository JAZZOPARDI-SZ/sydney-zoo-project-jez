import React, { useState, useEffect } from 'react';
import useSWR from 'swr'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'

import { ShoppingCartIcon } from '../../../icons/ShoppingCart'

import '../../../../styles/tailwind.scss';

export default function ShoppingCart() {

    return (
        <div className='fixed bottom-0 left-0 w-full px-5 mt-10 transition duration-500 md:top-24 md:px-0 md:mt-0 md:sticky group'>
            <div className='relative font-extrabold'>
                <div className='relative overflow-hidden rounded-t-[10px]'>
                    <div className='bg-brown-600 text-white uppercase py-[18px] text-lg leading-[1.6] tracking-[.125rem] text-center relative'>
                        <div className='absolute left-[1.5rem]'>
                            <ShoppingCartIcon />
                        </div>
                        <span>Order Summary</span>
                    </div>
                    <div className='pt-6 pl-5 pr-7 sm:p-9 pb-6 bg-white text-brown-600 text-[1rem]'>
                        <div className='text-center'>Your cart is empty</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
