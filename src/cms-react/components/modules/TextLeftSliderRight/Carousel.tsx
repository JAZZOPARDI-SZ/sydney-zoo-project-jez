import React from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';

import 'swiper/css';

import '../../../styles/tailwind.scss';
import { Autoplay } from 'swiper/modules';
interface CarouselProps {
    fieldValues: any;
}

const Carousel = ({ fieldValues }: CarouselProps) => {
    const [swiper, setSwiper] = React.useState<any>(null);

    const { tiles } = fieldValues;
    
	return (
        <div className="relative">
            <div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    onSwiper={(val) => setSwiper(val)}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        0: {
                            centeredSlides: true,
                            slidesPerView: 1.1,
                        },
                        1024: {
                            spaceBetween: 10,
                            slidesPerView: 1.6,
                        },
                        1476: {
                            spaceBetween: 10,
                            slidesPerView: 2.1,
                        }
                    }}
                >
                {tiles.map((tile: any, index: number) => (
                    <SwiperSlide key={index}>
                        <a 
                            href={tile.ctaAnimal?.url?.href}
                            target={tile.ctaAnimal?.open_in_new_tab ? "_blank" : "_self"}
                            rel={tile.ctaAnimal?.rel ? tile.ctaAnimal?.rel : undefined}
                        >
                            <div className={tile.color}>
                                <div className='flex flex-col px-5 text-center text-white'>
                                    <p className='text-sm leading-[28px] my-5'>{tile.subTitle}</p>
                                    <p className='font-bold text-[26px] leading-[28px] mb-5 font-sofa'>{tile.title}</p>
                                    <div className='text-white mt-2.5 min-h-[160px]' dangerouslySetInnerHTML={{__html: tile.details}} />
                                </div>
                                {tile?.image &&
                                    <img src={tile?.image?.src} className='w-full' loading="lazy" alt={tile?.image?.alt} />
                                }
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className='flex justify-between max-w-[80%] mx-auto'>
                    <button onClick={() => {swiper.slidePrev()}} className='absolute z-10 inline-flex items-center justify-center px-4 py-2 mt-8 -translate-y-full md:translate-y-0 md:static left-4 top-1/2 md:top-0'>
                        <Icon icon="fa6-solid:chevron-left" className='block w-5 text-black shrink-0' />
                    </button>
                    <button type='button' onClick={() => {swiper.slideNext()}} className='absolute z-10 inline-flex items-center justify-center px-4 py-2 mt-8 -translate-y-full md:translate-y-0 md:static right-4 top-1/2 md:top-0'>
                        <Icon icon="fa6-solid:chevron-right" className='block w-5 text-black shrink-0' />
                    </button>
                </div>
            </div>
        </div>
        );
};

export default Carousel;