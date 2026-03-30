import React from 'react';
import { Icon } from '@iconify/react';

interface CarouselProps {
    fieldValues: any;
}

const Carousel = ({ fieldValues }: CarouselProps) => {

	return (
        <div className='mt-5 flex items-center justify-center'>
            <a className={['text-center flex gap-3 justify-center items-center font-bold py-2.5 px-[30px] rounded-full text-white', fieldValues.cta.color].join(' ')} href={fieldValues?.cta?.ctaLink?.url?.href}>
                <span>{fieldValues.cta?.ctaText}</span>
                <Icon icon="fa6-solid:arrow-right" className='text-white w-4' />
            </a>
        </div>
        );
};

export default Carousel;