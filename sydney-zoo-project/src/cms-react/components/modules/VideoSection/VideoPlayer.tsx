import React from 'react';
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
    fieldValues: any;
}

const VideoPlayer = ({ fieldValues }: VideoPlayerProps) => {

    const { bannerVideo, mobileVideo, ctaLink } = fieldValues;

	return (
        <a
            href={ctaLink?.url?.href}
            target={ctaLink?.open_in_new_tab ? "_blank" : "_self"}
            rel={ctaLink?.rel ? ctaLink?.rel : undefined}
        >
            <div className='hidden lg:block aspect-[5/1.5]'>
                <video
                    className='[&_video]:object-cover'
                    src={bannerVideo}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
            <div className='block lg:hidden aspect-square'>
                <video
                    className='[&_video]:object-cover'
                    src={mobileVideo}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
        </a>
	);
};

export default VideoPlayer;