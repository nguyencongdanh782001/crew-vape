// import { Chip } from "@mui/material";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
interface listSearchType {
  price: any;
  size: any;
  brand: any;
  category: any;
}
const SearchMenu = () => {
  const price = [
    { id: 1, min: "0", max: "100.000" },
    { id: 2, min: "100.000", max: "200.000" },
    { id: 3, min: "200.000", max: "300.000" },
    { id: 4, min: "300.000", max: "500.000" },
    { id: 5, min: "500.000", max: "1.000.000" },
    { id: 6, min: "1.000.000", max: "10.000.000" },
  ];
  const sizes = [
    { id: 1, size: "60ml" },
    { id: 2, size: "120ml" },
  ];
  const brands = [
    { id: 1, brand: "vape store" },
    { id: 2, brand: "vape lang thang" },
    { id: 3, brand: "the crew station" },
  ];
  const categories = [{ id: 1, category: "juice" }];

  const [listSearch, setListSearch] = useState<listSearchType>({
    price: null,
    size: null,
    brand: null,
    category: null,
  });

  const handleDelete = ({ value }: any) => {
    if (value === "delete-all") {
      setListSearch({
        price: null,
        size: null,
        brand: null,
        category: null,
      });
    } else {
      setListSearch((prev) => ({ ...prev, [value]: null }));
    }
  };

  const handleSearch = () => {
    console.log(listSearch);
  };

  // {(listSearch.brand !== null ||
  //   listSearch.category !== null ||
  //   listSearch.price !== null ||
  //   listSearch.size !== null) && (
  //   <div className="flex justify-between items-center py-2 px-3 mb-4 bg-white rounded">
  //     <div className="flex justify-start items-center gap-2">
  //       <h1 className="font-medium sm:text-base text-xs text-red-500 tracking-wide mr-2">
  //         Bạn chọn:
  //       </h1>
  //       <div className="flex justify-start items-center flex-wrap gap-2 sm:gap-x-3">
  //         {/* {listSearch.price !== null && (
  //           <Chip
  //             label={listSearch.price.text}
  //             onDelete={() => handleDelete({ value: "price" })}
  //             size="small"
  //             className="bg-amber-400"
  //           />
  //         )}
  //         {listSearch.category !== null && (
  //           <Chip
  //             label={listSearch.category.text}
  //             onDelete={() => handleDelete({ value: "category" })}
  //             size="small"
  //             className="bg-purple-400"
  //           />
  //         )}
  //         {listSearch.brand !== null && (
  //           <Chip
  //             label={listSearch.brand.text}
  //             onDelete={() => handleDelete({ value: "brand" })}
  //             size="small"
  //             className="bg-lime-400"
  //           />
  //         )}
  //         {listSearch.size !== null && (
  //           <Chip
  //             label={listSearch.size.text}
  //             onDelete={() => handleDelete({ value: "size" })}
  //             size="small"
  //             className="bg-cyan-400"
  //           />
  //         )} */}
  //       </div>
  //     </div>
  //     <div className="flex justify-end items-center gap-x-2">
  //       <div
  //         onClick={handleSearch}
  //         className="bg-blue-400 rounded-full p-2 flex justify-center items-center shadow-md shadow-gray-400 cursor-pointer hover:scale-105 transition-transform duration-150"
  //       >
  //         <i>
  //           <BsSearch className="text-white text-xs sm:text-base" />
  //         </i>
  //       </div>
  //       <div
  //         onClick={() => handleDelete({ value: "delete-all" })}
  //         className="bg-red-400 rounded-full p-2 flex justify-center items-center shadow-md shadow-gray-400 cursor-pointer hover:scale-105 transition-transform duration-150"
  //       >
  //         <i>
  //           <CgTrash className="text-white text-xs sm:text-base" />
  //         </i>
  //       </div>
  //     </div>
  //   </div>
  // )}
  return (
    <div className="w-full flex flex-col">
      <ul className="flex justify-start items-center gap-x-3 sm:gap-x-5 pl-3 mb-4 bg-white rounded flex-wrap">
        <li className="font-medium sm:text-base text-xs text-red-500 py-2 tracking-wide">
          Tìm kiếm:
        </li>
        <li className="flex flex-col cursor-pointer relative group py-2">
          <div className="font-medium sm:text-base text-xs tracking-wide flex items-center justify-between gap-x-1 sm:gap-x-2">
            <p>Mức giá</p>
            <i className="group-hover:-rotate-90 transition-transform duration-200 ease-linear">
              <MdKeyboardArrowDown />
            </i>
          </div>
          <ul className="absolute z-10 overflow-hidden bg-white top-10 left-0 w-[120px] sm:w-[164px] rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-[250ms] origin-top">
            {price.map((item, index) => (
              <li
                key={index}
                className="py-2 pl-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-xs sm:text-base"
                onClick={() =>
                  setListSearch((prev) => ({
                    ...prev,
                    price: {
                      ...item,
                      text:
                        item.max !== "10.000.000"
                          ? item.min === "0"
                            ? ` Giá từ ${item.max}`
                            : `${item.min} - ${item.max}`
                          : ` Giá trên ${item.min}`,
                    },
                  }))
                }
              >
                {item.max !== "10.000.000"
                  ? item.min === "0"
                    ? ` Giá từ ${item.max}`
                    : `${item.min} - ${item.max}`
                  : ` Giá trên ${item.min}`}
              </li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col cursor-pointer relative group py-2">
          <div className="font-medium sm:text-base text-xs tracking-wide flex items-center justify-between gap-x-1 sm:gap-x-2">
            <p>Loại sản phẩm</p>
            <i className="group-hover:-rotate-90 transition-transform duration-200 ease-linear">
              <MdKeyboardArrowDown />
            </i>
          </div>
          <ul className="absolute z-10 overflow-hidden bg-white top-10 left-0 w-[120px] sm:w-[164px] rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-[250ms] origin-top">
            {categories.map((item, index) => (
              <li
                key={index}
                className="py-2 pl-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-xs sm:text-base"
                onClick={() =>
                  setListSearch((prev) => ({
                    ...prev,
                    category: {
                      ...item,
                      text: item.category,
                    },
                  }))
                }
              >
                {item.category}
              </li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col cursor-pointer relative group py-2 ">
          <div className="font-medium sm:text-base text-xs tracking-wide flex items-center justify-between gap-x-1 sm:gap-x-2">
            <p>Thương hiệu</p>
            <i className="group-hover:-rotate-90 transition-transform duration-200 ease-linear">
              <MdKeyboardArrowDown />
            </i>
          </div>
          <ul className=" absolute z-10 overflow-hidden bg-white top-10 right-0 sm:left-0 w-[120px] sm:w-[164px] rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 transition-transform duration-[250ms] origin-top">
            {brands.map((item, index) => (
              <li
                key={index}
                className="py-2 pl-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-xs sm:text-base"
                onClick={() =>
                  setListSearch((prev) => ({
                    ...prev,
                    brand: {
                      ...item,
                      text: item.brand,
                    },
                  }))
                }
              >
                {item.brand}
              </li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col cursor-pointer relative group py-2">
          <div className="font-medium sm:text-base text-xs tracking-wide flex items-center justify-between gap-x-1 sm:gap-x-2">
            <p> kích thước</p>
            <i className="group-hover:-rotate-90 transition-transform duration-200 ease-linear">
              <MdKeyboardArrowDown />
            </i>
          </div>
          <ul className="absolute z-10 overflow-hidden bg-white top-10 left-0 w-24 rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-[250ms] origin-top">
            {sizes.map((item, index) => (
              <li
                key={index}
                className="py-2 pl-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-xs sm:text-base"
                onClick={() =>
                  setListSearch((prev) => ({
                    ...prev,
                    size: {
                      ...item,
                      text: item.size,
                    },
                  }))
                }
              >
                {item.size}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SearchMenu;
