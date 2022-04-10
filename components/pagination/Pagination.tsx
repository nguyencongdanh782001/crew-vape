import React, { memo } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";

interface propsType {
  totalPage: number;
  activePage: number;
  handleChange: (number: any) => void;
}

const Pagination = ({ totalPage, activePage, handleChange }: propsType) => {
  return (
    <div className="w-full">
      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft />}
        nextLabel={<MdOutlineKeyboardArrowRight />}
        pageCount={totalPage ? totalPage : 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        breakLabel="..."
        breakClassName="mx-1"
        breakLinkClassName="text-lg tracking-wider"
        onPageChange={handleChange}
        initialPage={activePage - 1 ? activePage - 1 : 0}
        containerClassName="flex justify-center items-center w-full"
        pageClassName="rounded-full flex justify-center items-center justify-center mx-[4px]"
        pageLinkClassName="text-sm font-semibold text-center px-[10px] py-[3.5px] rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all duration-150 ease-in-out"
        activeClassName="bg-gray-200"
        activeLinkClassName=" text-gray-900"
        previousClassName="pt-1"
        previousLinkClassName="text-gray-900 text-center text-xl"
        nextClassName="pt-1"
        nextLinkClassName="text-gray-900 text-center text-xl"
      />
    </div>
  );
};

export default memo(Pagination);
