import React from 'react';
import moment from 'moment'
import ReactPaginate from 'react-paginate';

// import styles from "./index.module.css";

import '../../../styles/tailwind.scss';

export const Component = ({ blogs, fieldValues }: any) => {
    const [page, setPage] = React.useState(1);

	const itemsPerPage = fieldValues?.itemsPerPage || 24;
	const currentPage = page || 1;
	const endOffset = (currentPage) * itemsPerPage;

	const pageCount = Math.ceil((blogs?.objects?.length || 0) / itemsPerPage);

	const currentItems = blogs?.objects.slice(((currentPage - 1) * itemsPerPage), endOffset)

	const handlePageClick = (selected: number) => {
		const newOffset = selected + 1;

        setPage(newOffset)
	};
    console.log(blogs)

	return (
        <div>
            <div className='grid grid-cols-1 gap-x-[25px]'>
                {currentItems?.map((blog: any, index: number) => (
                    <div className='flex flex-col border-b border-[#D5CECE]' key={blog?.id || index}>
                        <div className='pt-[30px] pb-5  h-full'>
                            <div>
                                <a href={blog?.absoluteUrl} className='text-[18px] leading-[30px] text-brown-600 font-bold'>{blog?.title}</a>
                                <div className=' text-orange-500 font-bold text-xs leading-[28px]'>
                                    {moment(blog?.publishDate).format("MMMM Do YYYY")}
                                </div>
                                <p className='text-[16px] leading-[28px] text-brown-600 mb-[8px]'>{blog?.metaDescription}</p>
                                <a href={blog?.absoluteUrl} className='text-xs px-5 py-2 font-bold bg-[#F69C17] text-white float-end rounded-sm'>Read More</a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            {pageCount > 1 &&
                <ReactPaginate
                    breakLabel="..."
                    previousLabel="« Previous"
                    nextLabel="Next »"
                    onPageChange={(e) => {handlePageClick(e.selected)}}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    forcePage={((currentPage) - 1)}
                    pageCount={pageCount || 0}

                    // Styling
                    containerClassName={"flex list-none justify-center space-x-10 font-bold text-orange-500 text-[16px] leading-[28px] mt-[26px]"}
                    activeClassName={"text-black"}
                    disabledLinkClassName={"text-black"}
                />
            }
        </div>
	);
};

export default Component;