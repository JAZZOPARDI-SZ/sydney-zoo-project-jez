import React from 'react';


import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
}

const Tile = ({ data }: TileProps) => {

	return (
        <>
            <div className={`${data.bodyOptions.bodyBackgroundColor} h-full flex flex-col p-4 md:p-12 space-y-6`}>
                <div className={`${data.bodyOptions.bodyBackgroundColor == 'bg-white' ? 'text-black' : 'text-white'} prose prose-a:text-orange-500 prose-a:no-underline prose-black text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500`} dangerouslySetInnerHTML={{__html: data.bodyOptions?.bodyDetails}}></div>
                <div className='flex flex-col items-center'>
                </div>
                <div className={['mt-4', data.bodyOptions?.cta?.ctaPosition].join(' ')}>
                    {(data.bodyOptions?.cta?.ctaText && data.bodyOptions.enableCta) &&
                        <a
                            href={data.bodyOptions?.cta?.ctaLink?.url?.href}
                            target={data.bodyOptions?.cta?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={data.bodyOptions?.cta?.ctaLink?.rel ? data.bodyOptions?.cta?.ctaLink?.rel : undefined}
                            className={`${data.bodyOptions?.cta?.buttonColor} font-bold inline-flex items-center justify-center px-6 py-3 rounded-full`}
                            
                        >
                            {data.bodyOptions?.cta?.ctaText}
                        </a>
                    }
                </div>
            </div>
        </>
    );
};

export default Tile;