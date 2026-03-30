import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import 'swiper/css';
 
import '../../../styles/tailwind.scss';
interface TileProps {
    fieldValues: any;
}
 
const Tile = ({ fieldValues }: TileProps) => {
    const { color, title, details, bannerImage, cta } = fieldValues;

    useEffect(() => {
        AOS.init({ once: true });
    }, []);
 
    return (
        <div className={[
            'md:my-0 group grid md:grid-cols-5',
        ].join(' ')}>
            <div 
            className={`${fieldValues?.imageRight == 'right' ? 'md:order-1' : ''} col-span-3 overflow-hidden`} data-aos="fade-right">
                {bannerImage && (
                    <div className='w-full h-full object-cover bg-cover aspect-video' style={{backgroundImage: `url(${bannerImage.src})`}} />
                )}
            </div>
            <div className={`${color} flex flex-col col-span-3 md:col-span-2 justify-center p-12 gap-10 items-start`}>
                <h3 className='text-4xl font-bold text-white leading-[1.25em]' data-aos="fade-up">{title}</h3>
                { details && <div className='prose text-white' dangerouslySetInnerHTML={{__html: details}} data-aos="fade-up"></div>}
                <div>
                    {cta?.ctaText &&
                        <a
                            href={cta?.ctaLink?.url?.href}
                            target={cta?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={cta?.ctaLink?.rel ? cta?.ctaLink?.rel : undefined}
                            className="bg-white/90 hover:bg-white/100 text-sm text-orange-500 font-bold inline-flex items-center justify-center px-6 py-3 rounded-full"
                            data-aos="fade-up"
                            style={{ minWidth: cta?.minWidth ? `${cta?.minWidth}px` : '110px' }}
                        >
                            {cta?.ctaText}
                        </a>
                    }
                    {cta.enableSecondaryCta &&
                        <div className='mt-4'>
                            <a
                                href={cta?.ctaLinkSecondary?.url?.href}
                                target={cta?.ctaLinkSecondary?.open_in_new_tab ? "_blank" : "_self"}
                                rel={cta?.ctaLinkSecondary?.rel ? cta?.ctaLinkSecondary?.rel : undefined}
                                className="bg-white/90 hover:bg-white/100 text-sm text-orange-500 font-bold inline-flex items-center justify-center px-6 py-3 rounded-full"
                                data-aos="fade-up"
                                style={{ minWidth: cta?.minWidth ? `${cta?.minWidth}px` : '110px' }}
                            >
                                {cta?.ctaTextSecondary}
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
 
export default Tile;