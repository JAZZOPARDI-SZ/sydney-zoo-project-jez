import React from 'react';
import minusIcon from './minus-icon.svg'
import plusIcon from './plus-icon.svg'
import ticketDefault from './ticket.svg'
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'

import '../../../styles/tailwind.scss';
interface TileProps {
    fieldValues: any;
}

interface ITicket {
    [key: string]: number
}

const Tile = ({ fieldValues }: TileProps) => {
    const defaultTickets = {}
    fieldValues?.tickets.forEach((ticket: any) => defaultTickets[ticket.key] = 0);
    const [ selectedTickets, setSelectedTickets ] = React.useState<ITicket>(defaultTickets);

    const { tickets, products, productHelpText, note, tableHeading, rows, buttons } = fieldValues;

    const addTicket = (ticket: any) => {
        setSelectedTickets({
            ...selectedTickets,
            [ticket.key]: selectedTickets[ticket.key] + 1
        });
    };

    const removeTicket = (ticket: any) => {
        setSelectedTickets({
            ...selectedTickets,
            [ticket.key]: selectedTickets[ticket.key] <= 0 ? 0 : selectedTickets[ticket.key] - 1
        });
    };

    const calculatePrice = (product: any) => {
        return Object.keys(selectedTickets).reduce((acc: number, key: string) => {
            return acc + (selectedTickets[key] * (product?.pricing.find((ticket) => ticket.key == key)?.price || 0));
        }, 0);
    };

    const selectedAnyTickets = Object.values(selectedTickets).some((value: number) => value > 0);

	return (
        <div className={['relative'].join(' ')}>
            <div className='px-[10px] space-y-[5px] w-full md:w-[370px] mx-auto mb-[40px]'>
                {tickets?.map((ticket: any, index: number) => (
                    <div key={index} className='bg-white p-[10px] flex items-center'>
                        <div className='flex space-x-[5px] items-center mr-[15px]'>
                            <img src={minusIcon} onClick={() => removeTicket(ticket)} className='h-[38px] w-[30px] select-none cursor-pointer user-drag' draggable="false" alt="minus" />
                            <input type="number" pattern="\d*" value={selectedTickets[ticket.key]} readOnly className='appearance-none w-10 h-[34px] text-center text-lg font-bold bg-grey-50' />
                            <img src={plusIcon} onClick={() => addTicket(ticket)} className='h-[38px] w-[30px] select-none cursor-pointer user-drag' draggable="false" alt="plus" />
                            
                        </div>
                        <p>{ticket?.ticket} {ticket?.note}</p>
                        {ticket?.ticket === 'Concession' && (
                            <>
                                <a href="#" id="not-clickable">
                                    <Icon icon="akar-icons:info-fill" className='text-green-500 w-8' data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!" />
                                </a>
                                <Tooltip anchorSelect="#not-clickable" place='right' className='!bg-sky-600 max-w-[200px] !font-semibold' openOnClick>
                                    Must show student, pensioner, senior, DVA or disability card on entry.
                                </Tooltip>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='flex max-w-[1140px] mx-auto'>
            {products?.map((product: any, index: number) => (
                <div key={index} className={[
                    'w-full flex flex-col',
                    product?.productTheme === 'orange' ? 'bg-white' : '',
                    product?.productTheme === 'sky' ? 'bg-sky-400' : '',
                    product?.productTheme === 'grey' ? 'bg-grey-600' : '',
                ].join(' ')}>
                    <div className={[
                        'p-[15px] text-center tracking-[2.5px] font-semibold text-[13px] md:text-lg uppercase  min-h-[89px] lg:min-h-[58px]',
                        product?.productTheme === 'orange' ? 'text-orange-500' : '',
                        product?.productTheme === 'sky' ? 'text-brown-600' : '',
                        product?.productTheme === 'grey' ? 'text-white' : '',
                    ].join(" ")}>
                        {product?.tagLine}
                    </div>
                    <div className={[
                        'border-t-[10px] pt-[20px] px-[10px] flex flex-col items-center relative',
                        'before:border-t-[20px] before:border-x-[20px] before:absolute before:border-transparent before:top-full before:left-1/2 before:-translate-x-1/2 before:h-0 before:w-0',
                        product?.productTheme === 'orange' ? 'border-orange-500 text-orange-500' : 'text-white',
                        product?.productTheme === 'sky' ? 'border-sky-600 before:border-t-sky-600 bg-sky-600' : '',
                        product?.productTheme === 'grey' ? 'border-grey-900 before:border-t-grey-900 bg-grey-900' : ''
                    ].join(' ')}>
                        <img src={product?.image?.src} className='w-[45px] h-[45px] mt-[10px]' alt={product?.image?.alt} />
                        <p className='p-[10px] text-center tracking-[2.5px] font-semibold text-sm md:text-lg uppercase'>
                            {product?.productName}
                        </p>
                        <div className={[
                            'text-[24px] lg:text-[40px] leading-[1.2em] font-extrabold mt-2 mb-4',
                            product?.productTheme === 'orange' ? 'text-[#333]' : 'text-white'
                        ].join(' ')}>
                            ${(!selectedAnyTickets) ? '-' : calculatePrice(product).toFixed(2)}
                        </div>
                        {selectedAnyTickets ?
                            <div className={[
                                'space-y-1 pb-[20px]',
                                product?.productTheme === 'orange' ? 'text-[#333]' : 'text-white'
                            ].join(' ')}>
                                {Object.keys(selectedTickets).filter((key) => selectedTickets[key] > 0).map((key: string, index: number) => (
                                    <div className='flex justify-center'>
                                        <p>{selectedTickets[key]} x {tickets?.find((ticket) => ticket.key == key).ticket}</p>
                                    </div>
                                ))}
                            </div>
                        :
                            <p className={[product?.productTheme === 'orange' ? 'text-red-600' : 'text-white', 'text-center font-bold italic mb-5'].join(' ')}>{productHelpText}</p>
                        }
                    </div>
                    <div className={['px-2.5 pb-[46px] pt-[30px] text-center relative h-full', product?.productTheme === 'grey' ? 'text-white' : 'text-black'].join(' ')}>
                        <div className='text-sm lg:text-lg space-y-[30px]' dangerouslySetInnerHTML={{__html: product?.description}} />
                        <div className='absolute top-full -translate-y-1/2 w-full'>
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
            <p 
                className='font-bold text-[22px] lg:text-[32px] my-12 relative text-center before:left-1/2 before:-translate-x-1/2 before:h-2 before:bg-orange-500 before:w-20 lg:before:w-14 before:absolute before:-bottom-2'
            >
                Price List
            </p>
            <div className='flex justify-center mb-8 lg:mb-12'>
                <table className='w-full max-w-[1200px]'>
                    <tr className=''>
                        {tableHeading?.map((heading: any, index: number) => (
                            <th 
                                key={index} 
                                className={[
                                    'text-center font-bold p-5 uppercase text-lg overflow-hidden',
                                    heading?.productTheme === 'orange' ? ' text-orange-500 border-orange-500 border-t-[10px] bg-white' : '',
                                    heading?.productTheme === 'sky' ? 'bg-[#5E7AA2] text-white border-[#5E7AA2] border-t-[10px]' : '',
                                    heading?.productTheme === 'grey' ? 'bg-[#343434] text-white border-[#343434] border-t-[10px]' : ''
                                ].join(' ')}
                                
                            >
                                <div className='flex flex-col items-center justify-center text-[14px] lg:text-[18px]'>
                                    <img src={heading?.image?.src} alt={heading?.image?.alt} className='w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] my-[10px]' />
                                    {heading?.title}
                                </div>
                            </th>
                        ))}
                    </tr>
                    {rows.map((row: any, index: number) => (
                        <tr key={index} className='border-y-[5px] border-[#F0EEEC] bg-white'>
                            {row?.cols?.map((col: any, index: number) => (
                                <td 
                                    key={index}
                                    className={[
                                        'p-1 lg:p-5 overflow-hidden',
                                        col?.productTheme === 'orange' ? 'text-black bg-white ' : '',
                                        col?.productTheme === 'sky' ? 'bg-sky-400 text-black' : '',
                                        col?.productTheme === 'grey' ? 'bg-grey-600 text-white prose-strong:!text-white prose-p:!text-white prose-white' : '',
                                        col?.productTheme === 'white' ? '' : ''
                                    ].join(' ')}
                                >
                                    <div>
                                        <div className={`${col?.productTheme === 'grey' ? 'text-white prose-strong:!text-white prose-p:!text-white prose-white' : '!text-brown-600 prose-strong:!text-brown-600 prose-p:!text-brown-600'} prose prose-black text-white max-w-full prose-strong:text-[16px] lg:prose-strong:text-[20px] text-[14px] lg:text-[18px] flex items-center flex-col [&_p]:m-0 [&_h2]:mb-5 [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:text-sky-500`} dangerouslySetInnerHTML={{__html: col?.text}}></div>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
            <div className='sticky bottom-0 py-7 px-4 lg:px-[20px] flex flex-col justify-center gap-4 lg:gap-6 border-t border-brown-600 bg-grey-200'>
                <p className='font-bold lg:hidden text-center'>I want to buy:</p>
                <div className='flex justify-center gap-4 lg:gap-6'>
                    {buttons.map((button: any, index: number) => (
                        <div>
                        <a                             
                            href={button?.ctaLink?.url?.href}
                            target={button?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={button?.ctaLink?.rel ? button?.ctaLink?.rel : undefined}
                            className={`${button?.buttonColor} text-[14px] text-white py-3 px-1 lg:px-6 rounded-full font-bold min-w-[117px] lg:min-w-[315px] hidden lg:block text-center`}
                        >
                            {button?.ctaText}
                        </a>
                        <a                             
                            href={button?.ctaLink?.url?.href}
                            target={button?.ctaLink?.open_in_new_tab ? "_blank" : "_self"}
                            rel={button?.ctaLink?.rel ? button?.ctaLink?.rel : undefined}
                            className={`${button?.buttonColor} text-[14px] text-white py-3 !px-1 lg:!px-6 rounded-full font-bold min-w-[117px] lg:min-w-[315px] block lg:hidden text-center`}
                        >
                            {button?.ctaTextMobile}
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tile;