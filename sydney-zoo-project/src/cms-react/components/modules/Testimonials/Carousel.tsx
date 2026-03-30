import React from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Icon } from '@iconify/react';

import 'swiper/css/pagination';
interface CarouselProps {
    fieldValues: any;
}

const Carousel = ({ fieldValues }: CarouselProps) => {
    const [swiper, setSwiper] = React.useState<any>(null);

    const { testimonials, title } = fieldValues;

	return (
        <div className="py-12">
            <div className='relative mx-auto max-w-[1120px] sm:px-6 lg:px-0'>
                <h2 className='text-center font-sofa text-[45px] leading-[54px] text-brown-600 font-extrabold'>{title}</h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={(val) => setSwiper(val)}
                    pagination={true}
                    className='mx-[132px]'
                    //@ts-ignore
                    style={{'--swiper-pagination-bullet-size': '6px', '--swiper-pagination-color': '#24695A', '--swiper-pagination-bullet-inactive-color': '#F0EEEC', '--swiper-pagination-bullet-inactive-opacity': '1', '--swiper-pagination-bullet-horizontal-gap': '6px'}}
                >
                {testimonials.map((testimonial: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className={['h-full flex flex-col items-center'].join(' ')}>
                            <div className='pt-10 pb-[50px] w-[80%] h-full px-5 text-green-500 flex flex-col justify-between'>
                                <div>
                                    <p className='font-bold text-[28px] leading-[42px]'>{testimonial.title}</p>
                                    <p className='text-[12.5px] leading-[18.75px] text-[#697882]'>{testimonial.subTitle}</p>
                                    <div className='prose max-w-full text-[#333] mt-3 text-[12.6px] leading-[28px]' dangerouslySetInnerHTML={{__html: testimonial.details}} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <button onClick={() => {swiper.slidePrev()}} className='absolute left-0 top-0 h-full w-8 z-10 flex items-center justify-center'>
                    <Icon icon="fa6-solid:chevron-left" className='text-green-500 w-5' />
                </button>
                <button type='button' onClick={() => {swiper.slideNext()}} className='absolute right-0 top-0 h-full w-8 z-10 flex items-center justify-center'>
                    <Icon icon="fa6-solid:chevron-right" className='text-green-500 w-5' />
                </button>
            </div>
        </div>
        );
};

export default Carousel;