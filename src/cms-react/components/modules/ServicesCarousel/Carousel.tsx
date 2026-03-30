import React from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import { Autoplay } from 'swiper/modules';

interface CarouselProps {
    fieldValues: any;
}

const Carousel = ({ fieldValues }: CarouselProps) => {
    const [swiper, setSwiper] = React.useState<any>(null);

    const { tiles } = fieldValues;

    const arrayItems = [...tiles, ...tiles]

	return (
        <div className="relative">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={'auto'}
                loop={true}
                maxBackfaceHiddenSlides={10}
                autoplay={{
                    delay: 3000,
                    // disableOnInteraction: true
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    0: {
                        centeredSlides: false,
                        slidesPerView: 1,
                    },
                    768: {
                        centeredSlides: false,
                        spaceBetween: 0,
                        slidesPerView: 2,
                    },
                    1024: {
                        centeredSlides: true,
                        spaceBetween: 0,
                        slidesPerView: 3,
                    },
                }}
                className='lg:!px-8'
                onSwiper={(val) => setSwiper(val)}
            >
            {arrayItems.map((tile: any, index: number) => (
                <SwiperSlide key={index} className='w-1/3 !h-auto'>
                    <div className={[tile.color, 'h-full flex flex-col'].join(' ')}>
                        {tile?.image &&
                            <img src={tile?.image?.src} className='aspect-square xl:aspect-[unset] min-h-400 xl:h-[500px] shrink-0 w-full object-cover' alt="Icon" />
                        }
                        <div className='pt-10 pb-[50px] h-full px-8 lg:px-5 text-white flex flex-col justify-between'>
                            <div>
                                <p className='font-bold text-xl text-center h-[60px]'>{tile.title}</p>
                                <div className='text-white mt-2.5 mb-[26px] text-center' dangerouslySetInnerHTML={{__html: tile.details}} />
                            </div>
                            <div className='flex items-center justify-center mt-2.5'>
                                <a className={['text-center font-bold py-2.5 px-[30px] rounded-full', tile.cta.color].join(' ')} href={tile?.cta?.ctaLink?.url?.href}>{tile.cta?.ctaText}</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <button onClick={() => {swiper.slidePrev()}} className='absolute top-0 left-0 z-10 flex items-center justify-center w-8 h-full bg-black/60'>
                <Icon icon="fa6-solid:chevron-left" className='w-5 text-white' />
            </button>
            <button type='button' onClick={() => {swiper.slideNext()}} className='absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-full bg-black/60'>
                <Icon icon="fa6-solid:chevron-right" className='w-5 text-white' />
            </button>
        </div>
        );
};

export default Carousel;