import React from 'react';
import { Icon } from '@iconify/react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


import '../../../styles/tailwind.scss';
interface TileProps {
    data: any;
    borderColor: string;
    labelChevronColor: string;
    hoverColor: boolean;
}

const Tile = ({ data, borderColor, labelChevronColor, hoverColor }: TileProps) => {

	return (
        <Accordion className={``} allowMultiple={false} transition transitionTimeout={250}>
            {data.map((tile: any, index: number) => (
                <AccordionItem
                    key={index}
                    className={`border-b ${borderColor}`}
                    header={
                        <div className={`flex items-center justify-between w-full`}>
                            <p className={`text-left ${labelChevronColor} ${hoverColor ? 'brown' : ''}`}>{tile?.title}</p>
                            <Icon icon="fa6-solid:chevron-right" className={`${labelChevronColor} ${hoverColor ? 'brown' : ''} chevron w-5`} />
                        </div>
                    }
                    {...(tile?.expandedOnLoad ? { initialEntered: true } : {})}
                >
                    {tile.questions.map((question: any, index: number) => (
                        <div className='mb-6' key={index}>
                            <div className='prose prose-black prose-p:m-0 text-black max-w-full [&_h2]:mb-5 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500' dangerouslySetInnerHTML={{__html: question?.questionAndAnswer}}></div>
                        </div>
                    ))}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default Tile;