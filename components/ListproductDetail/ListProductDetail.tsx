import React, { memo } from "react";
import ProductDetailItem from "./components/ProductDetailItem";

interface PropsType {
  data: [
    {
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
      sale: number;
      image: [
        {
          name: string;
          instock: boolean;
          image: string;
        }
      ];
    }
  ];
}

const ListProductDetail = ({ data }: PropsType) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="mx-5 w-full flex flex-wrap items-center max-w-[370px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-xl">
        {/* gap-3 */}
        {data?.map((item, index) => (
          <ProductDetailItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(ListProductDetail);
