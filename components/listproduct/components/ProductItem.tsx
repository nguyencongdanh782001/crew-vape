import Link from "next/link";
import React from "react";
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
      <div className="flex flex-col justify-center items-center cursor-pointer group">
        <div className="overflow-hidden relative">
          <img
            src={data?.image[0].image}
            alt=""
            className="w-[120px] h-[100px] lg:w-[250px] lg:h-[235px] object-cover group-hover:scale-110 transition-all duration-200"
          />
          <i className="w-9 h-9 bg-black rounded-full flex justify-center items-center absolute opacity-0 -bottom-1 left-[45%] group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500">
            <FaCartPlus className="text-white text-base" />
          </i>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-3">
          <h5
            className="text-center uppercase font-medium text-sm tracking-wide leading-7 max-w-[120px] lg:max-w-[225px]  min-h-[56px] max-h-[56px] line-clamp-2 overflow-hidden"
            style={{ textOverflow: "ellipsis", boxOrient: "vertical" }}
          >
            {data?.name}
          </h5>
          <span className="text-center uppercase font-medium text-sm tracking-wide leading-7 max-w-[120px] lg:max-w-[225px] overflow-hidden">
            {data?.price}₫
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
