// import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LayoutProduct from "../../components/layout/LayoutProduct";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute left-[13px] z-10 top-0 bottom-0 flex justify-center items-center">
      <div
        onClick={onClick}
        className="group  w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200 hover:opacity-100 opacity-50 cursor-pointer transition-all duration-150 ease-linear"
      >
        <i>
          <MdOutlineArrowBackIos className="text-gray-400 text-lg sm:text-2xl md:text-3xl group-hover:text-black" />
        </i>
      </div>
    </div>
  );
};

export const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute right-3 z-10 top-0 bottom-0 flex justify-center items-center">
      <div
        onClick={onClick}
        className="group  w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200 hover:opacity-100 opacity-50 cursor-pointer transition-all duration-150 ease-linear"
      >
        <i>
          <MdOutlineArrowForwardIos className="text-gray-400 text-lg sm:text-2xl md:text-3xl group-hover:text-black" />
        </i>
      </div>
    </div>
  );
};

const ChiTietSanPham = ({ product, relatedProduct }: any) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2 = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <LayoutProduct>
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] pl-3 py-2 mb-4 bg-white my-4 rounded">
        {/* <Breadcrumbs aria-label="breadcrumb">
          <Link href="/" passHref>
            <a className="hover:underline text-base font-medium">Trang chủ</a>
          </Link>
          <Link href={`/san-pham/${product.category.slug}`} passHref>
            <a className="hover:underline text-base font-medium">
              {product.category.name}
            </a>
          </Link>
          <Typography color="text.primary" className="font-semibold">
            {product.name}
          </Typography>
        </Breadcrumbs> */}
      </div>
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] bg-white py-5 rounded h-full">
        <div className="flex flex-col sm:flex-row max-w-full justify-center md:mx-5">
          <div className="w-screen px-5 sm:px-0 sm:min-w-[20rem] sm:max-w-[20rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-[24rem] lg:max-w-[24rem] 2xl:min-w-[27rem] 2xl:max-w-[27rem] h-full md:pr-7">
            {product.image.length > 1 ? (
              <div className="h-[29rem] sm:h-[34rem]">
                <div>
                  <Slider
                    asNavFor={nav2}
                    ref={(slider1: any) => setNav1(slider1)}
                    {...settings}
                  >
                    {product.image.map((item: any, index: any) => (
                      <div key={index}>
                        <Zoom>
                          <img
                            src={item.image}
                            alt=""
                            className=" md:w-[27rem] sm:h-[25rem] h-[20rem] object-fill"
                          />
                        </Zoom>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="mt-3">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2: any) => setNav2(slider2)}
                    slidesToShow={
                      product.image.length < 3 ? product.image.length : 3
                    }
                    swipeToSlide={true}
                    {...settings2}
                    focusOnSelect={true}
                  >
                    {product.image.map((item: any, index: any) => (
                      <div key={index}>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[120px] h-[7rem] object-fill cursor-pointer"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ) : (
              <div className="h-[27rem]">
                {product.image.map((item: any, index: any) => (
                  <div key={index}>
                    <img
                      src={item.image}
                      alt=""
                      className="md:w-[27rem] h-[25rem] object-fill"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-screen px-8 pt-5 sm:pt-0 sm:px-0 sm:min-w-[20rem] sm:max-w-[20rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-[24rem] lg:max-w-[24rem] 2xl:min-w-[27rem] 2xl:max-w-[27rem]">
            <div className="">
              <h1 className="text-2xl font-bold leading-8 tracking-wider text-left capitalize">
                {product.name}
              </h1>
            </div>
            <div className="mt-2">
              <h1 className="text-xl font-bold leading-8 tracking-wider text-left text-red-500 mb-2">
                {product.price}đ
              </h1>

              <p className="text-base font-medium tracking-wide leading-8">
                Tình trạng: {product.instock ? "còn hàng" : "hết hàng"}
              </p>

              <p className="text-base font-medium tracking-wide leading-8">
                Loại sản phẩm: {product.category.name}
              </p>

              <p className="text-base font-medium tracking-wide leading-8">
                thương hiệu: {product.brand.name}
              </p>

              <p className="text-base font-medium tracking-wide leading-8">
                {product.desc}
              </p>

              {product.category.slug === "disposable-pod" && (
                <p className="text-base font-medium tracking-wide leading-8">
                  Số hơi(puffs):{product.puffs}
                </p>
              )}

              {(product.category.slug === "freebase" ||
                product.category.slug === "saltnic" ||
                product.category.slug === "disposable-pod") && (
                <p className="text-base font-medium tracking-wide leading-8">
                  Liều lượng nicotine: {product.nicotine}
                </p>
              )}

              {(product.category.slug === "freebase" ||
                product.category.slug === "saltnic") && (
                <p className="text-base font-medium tracking-wide leading-8">
                  Dung tích: {product.capacity}
                </p>
              )}

              {product.category.slug === "disposable-pod" && (
                <p className="text-base font-medium tracking-wide leading-8">
                  Battery: {product.battery}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-6">
                {product.category.slug === "freebase" ||
                product.category.slug === "saltnic" ||
                product.category.slug === "disposable-pod" ? (
                  <>
                    <p className="text-base font-medium tracking-wide leading-8">
                      Vị:
                    </p>
                    {product.image.map((item: any, index: any) => (
                      <span
                        key={index}
                        className={`${
                          item.instock === false && `bg-gray-200`
                        } font-semibold border border-black bg-gray-800 text-white rounded-sm py-[2px] px-2 cursor-pointer transition-all duration-150 ease-linear`}
                      >
                        {item.name}
                      </span>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="text-base font-normal tracking-wide leading-8">
                      Màu:
                    </p>
                    {product.image.map((item: any, index: any) => (
                      <span
                        key={index}
                        className={`${
                          item.instock
                            ? `bg-gray-800 border-black`
                            : `bg-gray-300 border-gray-300`
                        } font-semibold border text-white rounded-sm py-[1px] px-2 cursor-pointer transition-all duration-150 ease-linear`}
                      >
                        {item.name}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="flex mt-6">
              <Link
                href="https://www.facebook.com/messages/t/100006177676042"
                passHref
              >
                <div className="border border-red-400 py-3 px-5 rounded-md cursor-pointer group hover:bg-red-400 transition-all duration-150 ease-linear">
                  <a className="uppercase font-medium text-red-400 tracking-wide group-hover:text-white">
                    Mua ngay
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pl-4">
          <h1 className="font-medium text-xl pl-2 mb-5">Sản phẩm liên quan</h1>
          <ListProductDetail data={relatedProduct.product} />
        </div>
      </div>
    </LayoutProduct>
  );
};

export default ChiTietSanPham;

export async function getServerSideProps(context: any) {
  const resProduct = await fetch(
    `https://vape-store.herokuapp.com/api/product/find/${context.params.id}`
  );
  const product = await resProduct.json();

  const resRelatedProduct = await fetch(
    `https://vape-store.herokuapp.com/api/product?page=${context.query.page}&&limit=4&&cat=${product.category.slug}`
  );
  const relatedProduct = await resRelatedProduct.json();

  return {
    props: {
      product,
      relatedProduct,
    }, // will be passed to the page component as props
  };
}
