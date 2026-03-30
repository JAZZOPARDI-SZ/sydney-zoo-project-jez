import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Icon } from '@iconify/react';
import '../../../styles/tailwind.scss';

import SmallSearch from './smallsearch.png'

interface BookingLinksProps {
    data: any;
    logo: any;
    fieldValues?: any;
}

const Search = ({ data, logo, fieldValues }: BookingLinksProps) => {
    const [search, setSearch] = useState<string>('');
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

	const runSearch = () => {
		window.location.href = '/hs-search-results?q=' + search;
	}

    useEffect(() => {
        if (searchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [searchOpen]);

	return (
        <>

            <div className="flex items-center justify-center space-x-4 max-w-full">
                <button type="button" onClick={() => {setSearchOpen(true)}} className="btn btn-lg-icon btn-primary uppercase">
                    {/* <span className="hidden md:inline">Search</span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.454" height="22.478" viewBox="0 0 22.454 22.478"><g id="Group_338" data-name="Group 338" transform="translate(-1068.963 -528.735)"><path id="Path_406" data-name="Path 406" d="M1085.005,543.556a.94.94,0,0,1-.217-.977h-2.348a6.991,6.991,0,0,1-9.44.065.223.223,0,0,0-.155-.065h-2.226a8.707,8.707,0,0,0,11.97,2.092.925.925,0,0,1,1.192.107l6.192,6.192a.891.891,0,0,0,.672.239.86.86,0,0,0,.587-.3.927.927,0,0,0-.109-1.232Z" fill="#2f251d"></path><path id="Path_407" data-name="Path 407" d="M1070.7,537.271a7.089,7.089,0,0,1,6.975-6.8,7.01,7.01,0,0,1,7.007,6.994,6.861,6.861,0,0,1-.393,2.288h1.635a.27.27,0,0,0,.224-.165c.043-.172.084-.356.12-.541a8.724,8.724,0,1,0-17.184-.132c.037.232.085.457.143.68a.22.22,0,0,0,.213.158h1.65A6.886,6.886,0,0,1,1070.7,537.271Z" fill="#2f251d"></path></g></svg>
                </button>
            </div>
            <div
				className={["bg-orange-500 py-5 z-[999999] duration-150 ", searchOpen ? 'absolute top-0 left-0 opacity-100 w-full max-w-full px-4 lg:px-[100px]' : 'opacity-0 absolute pointer-events-none'].join(' ')}
			>
                <div className='max-w-[1344px] mx-auto'>
                    <div className="w-full flex items-center">
                        <a href="/" className="hidden lg:block pr-10">
                            <img
                                src={logo && logo.src}
                                alt={logo.alt}
                                height={logo.height}
                                className='max-h-[44px]'
                                loading='lazy'
                            />
                        </a>
                        <label htmlFor="searchInput" className="relative w-full ">
                        <input
                            id="searchInput"
                            className="text-intro border-b-2 leading-[28px] text-[21px] border-white relative w-full outline-none bg-transparent placeholder:text-black/40 h-[28px]"
                            type="text"
                            placeholder="Search.."
                            onChange={(e) => { setSearch(e.target.value || '') }}
                            value={search}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    runSearch();
                                }
                            }}
                        />
                            <button type="button" onClick={() => {runSearch()}} className="btn btn-lg-icon btn-primary uppercase absolute right-0">
                                {/* <span className="hidden md:inline">Search</span> */}
                                <img src={SmallSearch}  alt={""} />
                            </button>
                        </label>
                        <div className="flex items-center justify-center space-x-4">

                            <button onClick={() => {setSearchOpen(false)}} type="button" className='ml-14'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.828" height="19.828" viewBox="0 0 19.828 19.828"><g id="Group_357" data-name="Group 357" transform="translate(-364.086 -27.086)"><line id="Line_68" data-name="Line 68" x2="17" y2="17" transform="translate(365.5 28.5)" fill="none" stroke="#2f251d" strokeLinecap="round" strokeWidth="2"></line><line id="Line_69" data-name="Line 69" x1="17" y2="17" transform="translate(365.5 28.5)" fill="none" stroke="#2f251d" strokeLinecap="round" strokeWidth="2"></line></g></svg>
                            </button>
                        </div>
                    </div>
                </div>
			</div>
            <div className={["bg-white py-5  px-6 z-[999999] duration-150", searchOpen ? 'absolute top-[68px] left-0 opacity-100 w-full max-w-full  h-[100vh]' : 'opacity-0 absolute pointer-events-none'].join(' ')}>
                <h2 className='text-center font-bold text-[26px] lg:text-[36px] my-[50px] lg:my-[100px]'>Find what you are looking for?</h2>
            </div>
            
        </>
    );
};

export default Search;