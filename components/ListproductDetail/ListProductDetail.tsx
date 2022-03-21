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
      <div className="w-full flex flex-wrap gap-3 items-center max-w-[350px] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md">
        {data?.map((item, index) => (
          <ProductDetailItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(ListProductDetail);
