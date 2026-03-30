import React, { useState } from 'react'
// import Container from '../../partials/Container'
// import { Choice } from '../../../types'

import useSWRInfinite from "swr/infinite";
import Skeleton from 'react-loading-skeleton'

import { Icon } from '@iconify/react/dist/iconify.js';

// import hubspot from '@hubspot/api-client'

// import "../../../styles/tailwind.scss"
import 'react-loading-skeleton/dist/skeleton.css'


type Props = {
	fieldValues: {
		content: string
		section: {
			// padding: Choice
		}
	}
}


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Search = (props: Props) => {
	const urlSearch = new URLSearchParams(typeof window !== "undefined" ? window?.location?.search : "");

	const { section } = props.fieldValues
	const [ searchTerm, setSearchTerm ] = useState(urlSearch.get('q') || "")

	const { data, error, isLoading, size, setSize } = useSWRInfinite((index) =>
		`/_hcms/search?term=${searchTerm}&analytics=true&offset=${index * 10}`, fetcher)
	const isLoadingMore =
    	isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

	const updateSearchTerm = (e) => {
		setSearchTerm(e.target.value)

		urlSearch.set("q", e.target.value);
	}

	console.log(data)

	const visibleResultsCount = (data?.length || 0) > 0 ? data?.reduce((acc, page) => {
		return acc + (page?.results?.length || 0)
	}, 0) : 0

	return (
		<>
			<div className={['relative bg-[#EEEEEE] pt-20 pb-20', !(searchTerm?.length > 0) && ''].join(' ')}>
				<div className='container mx-auto max-w-[994px]'>
					<h2 className='text-orange-400 mb-4 text-[30px] font-bold'>Search results for '{searchTerm}'</h2>
					<div className='flex'>
						<label className='w-full bg-white py-2.5 px-3 border border-grey-200 rounded flex space-x-2 items-center'>
							<input type="text" value={searchTerm} className='w-full outline-none border-none leading-7' onChange={updateSearchTerm} />
							{searchTerm && <Icon icon={'material-symbols:close-rounded'} className='cursor-pointer' onClick={() => { setSearchTerm('') }} width={24} height={24} />}
						</label>
						<button onClick={() => { updateSearchTerm }} className='bg-orange-400 flex items-center px-5 rounded-r'>
							<Icon className='text-white' icon={'ion:search'} width={16} height={16} />
						</button>
					</div>
				</div>
			</div>
			{searchTerm?.length > 0 &&
				<div className='relative bg-[#EEEEEE] pb-20'>
					<div className='mx-auto container max-w-[994px] space-y-10'>
						{data?.length > 0 && data?.every(page => page.results.length === 0) && !isLoading && (
							<p className='text-brown-600 text-base'>It seems we can't find what you're looking for.</p>
						)}
						{data?.map((page: any, index) => (
							page?.results?.map((result: any, index) => (
								<a href={result?.url} key={index} className='flex space-x-10'>
									<div className='w-full flex-1'>
										<div className='text-h4 text-black font-bold' dangerouslySetInnerHTML={{ __html: result?.title }}></div>
										<div className='mt-4 text-grey-700 text-base' dangerouslySetInnerHTML={{ __html: result?.description }}></div>
										<p className="text-xs mt-4 leading-[28px] font-bold text-orange-500">READ MORE »</p>
									</div>
								</a>
							))
						))}
						{(isLoading || isLoadingMore) && <Skeleton count={5} containerClassName='block space-y-10' height={150} width={"100%"} />}
						{!isLoadingMore && data?.[data?.length - 1]?.total > visibleResultsCount &&
							<div className='flex items-center justify-center pt-10'>
								<button type='button' className='btn btn-lg btn-outline-green flex items-center justify-center space-x-3 min-w-[300px]' onClick={() => setSize(size + 1)}><span>Load more</span> <Icon icon={'mi:chevron-down'} width={24} height={24} /></button>
							</div>
						}
					</div>
				</div>
			}
		</>
	);
}

export default Search