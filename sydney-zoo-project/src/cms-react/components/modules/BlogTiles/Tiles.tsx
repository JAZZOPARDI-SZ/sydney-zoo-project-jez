import React from 'react';
import moment from 'moment';
import ReactPaginate from 'react-paginate';

const Tiles = ({ blogs, fieldValues }: any) => {
    const [page, setPage] = React.useState(0); // ReactPaginate uses 0-based index

    const itemsPerPage = fieldValues?.itemsPerPage || 6;
    const currentPage = page + 1; // Convert to 1-based index for display
    const endOffset = (page + 1) * itemsPerPage;

    const pageCount = Math.ceil((blogs?.length || 0) / itemsPerPage);

    const currentItems = blogs?.slice(page * itemsPerPage, endOffset);

    const handlePageClick = (event: { selected: number }) => {
        setPage(event.selected);
    };

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[35px]'>
                {currentItems?.map((blog: any, index: number) => (
                    <a href={blog?.absoluteUrl} className='bg-white flex flex-col' key={blog?.id || index}>
                        <img className="aspect-[1.41/1] object-cover" src={blog?.featuredImage} alt={blog?.featuredImageAlt} />
                        <div className='p-[30px] text-center h-full flex flex-col justify-between'>
                            <div>
                                <h3 className='text-[37px] leading-[30px] text-green-500 font-bold mb-[30px]'>{blog?.title}</h3>
                                <p className='text-[16px] leading-[28px] text-[#777] mb-[28px]'>{blog?.metaDescription}</p>
                            </div>
                            <div>
                                <p className='text-xs leading-[28px] font-bold text-orange-500'>READ MORE »</p>
                            </div>
                        </div>
                        <div className='border-t border-grey-300 py-[15px] px-[30px] text-center text-grey-500 text-xs leading-[28px]'>
                            {moment(blog?.publishDate).format("MMMM Do YYYY")}
                        </div>
                    </a>
                ))}
            </div>
            {pageCount > 1 &&
                <ReactPaginate
                    breakLabel="..."
                    previousLabel="« Previous"
                    nextLabel="Next »"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    forcePage={page}
                    pageCount={pageCount}

                    // Styling
                    containerClassName={"flex list-none justify-center space-x-10 font-bold text-orange-500 text-[16px] leading-[28px] mt-[26px]"}
                    activeClassName={"text-black"}
                    disabledLinkClassName={"text-black"}
                />
            }
        </div>
    );
};

export default Tiles;