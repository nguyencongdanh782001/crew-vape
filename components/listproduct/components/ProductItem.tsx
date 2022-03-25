import Link from "next/link";
import React, { memo } from "react";
import { FaCartPlus } from "react-icons/fa";
interface PropsType {
  data: {
    _id: string;
    name: string;
    category: {
      _id: string;
      name: string;
      slug: string;
    };
    brand: {
      _id: string;
      name: string;
    };
    desc: string;
    capacity: string;
    nicotine: string;
    instock: boolean;
    sale: number;
    price: number;
    image: [
      {
        name: string;
        instock: boolean;
        image: string;
      }
    ];
  };
}
const ProductItem = ({ data }: PropsType) => {
  return (
    <Link href={`/san-pham/${data._id}`} passHref>
      <div className="flex flex-col justify-center items-center cursor-pointer group mx-[14px]">
        <div className="overflow-hidden relative">
          <img
            src={data?.image[0].image}
            alt=""
            className="w-[120px] h-[100px] lg:w-[250px] lg:h-[235px] object-cover group-hover:scale-110 transition-all duration-200"
          />
          <i className="w-9 h-9 bg-black rounded-full flex justify-center items-center absolute opacity-0 -bottom-1 left-[45%] group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500">
            <FaCartPlus className="text-white text-base" />
          </i>
          {data?.instock ? (
            data?.sale > 0 && (
              <div className="absolute right-0 top-0 py-1 px-2 z-10 bg-black flex items-center justify-center">
                <p className="text-white text-center text-sm sm:text-lg uppercase tracking-widest font-thin">
                  -{(data?.sale * 100) / data?.price}%
                </p>
              </div>
            )
          ) : (
            <div className="absolute left-0 right-0 top-24 h-12 z-10 bg-black flex items-center justify-center">
              <p className="text-white text-center text-2xl uppercase tracking-widest font-thin">
                Hết hàng
              </p>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-3">
          <h5
            className="text-center uppercase font-medium text-sm md:text-lg tracking-wide leading-7 max-w-[120px] lg:max-w-[225px]  min-h-[25px] max-h-[56px] line-clamp-2 overflow-hidden"
            style={{ textOverflow: "ellipsis", boxOrient: "vertical" }}
          >
            {data?.name}
          </h5>
          <div className="flex justify-center items-center">
            {data?.sale > 0 && (
              <span className="mr-2 text-red-500 text-center uppercase font-medium text-sm  md:text-lg tracking-wide leading-7 max-w-[120px] lg:max-w-[225px] overflow-hidden">
                {(data?.sale * 1000).toLocaleString().replace(/\,/g, ".")}₫
              </span>
            )}
            <span
              className={`${
                data?.sale > 0 ? "text-gray-400 line-through" : "text-gray-900"
              } text-center uppercase font-medium text-sm  md:text-lg tracking-wide leading-7 max-w-[120px] lg:max-w-[225px] overflow-hidden`}
            >
              {(data?.price * 1000).toLocaleString().replace(/\,/g, ".")}₫
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ProductItem);
