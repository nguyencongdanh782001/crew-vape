import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LayoutProduct from "../../components/layout/LayoutProduct";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
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
  const [filterRelated, setFilterRelated] = useState<any>([]);
  const [imageSelect, setImageSelect] = useState({});
  const router = useRouter();

  const sliderRef = useRef<any>();

  useEffect(() => {
    setFilterRelated(
      relatedProduct?.product.filter(
        (item: any) => item._id !== router.query.id
      )
    );
  }, [router.query.id, relatedProduct]);

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
      <Head>
        <title>Chi tiết sản phẩm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="the crew station là nơi chuyên cung cấp những sản phẩm về vape uy tín và chất lượng."
        />
      </Head>
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] pl-3 py-2 mb-4 bg-white my-4 rounded">
        <div className="flex">
          <Link href="/" passHref>
            <a className="hover:underline text-base font-normal ">Trang chủ</a>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <Link href="/" passHref>
            <a className="hover:underline text-base font-normal ">
              {" "}
              {product.category.name}
            </a>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <p color="text.primary" className="font-semibold">
            {product.name}
          </p>
        </div>
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
                      <div key={index} className="relative">
                        <Zoom>
                          <img
                            src={item.image}
                            alt=""
                            className=" md:w-[27rem] sm:h-[25rem] w-screen h-[20rem] object-contain "
                          />
                        </Zoom>
                        {item?.instock === false && (
                          <div className="absolute top-0 right-0 px-3 h-10 z-10 bg-black flex items-center justify-center">
                            <p className="text-white text-center text-base uppercase tracking-widest font-thin">
                              Hết hàng
                            </p>
                          </div>
                        )}
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
                    className={``}
                  >
                    {product.image.map((item: any, index: any) => (
                      <div key={index} className="mx-[6px]">
                        <img
                          src={item.image}
                          alt=""
                          className="w-[120px] h-[7rem] object-contain cursor-pointer border border-gray-400"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ) : (
              <div className="h-[27rem]">
                {product.image.map((item: any, index: any) => (
                  <div key={index} className="relative">
                    <Zoom>
                      <img
                        src={item.image}
                        alt=""
                        className=" md:w-[27rem] sm:h-[25rem] w-screen h-[20rem] object-contain"
                      />
                    </Zoom>
                    {item?.instock === false && (
                      <div className="absolute top-0 right-0 px-3 h-10 z-10 bg-black flex items-center justify-center">
                        <p className="text-white text-center text-base uppercase tracking-widest font-thin">
                          Hết hàng
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-screen px-8 pt-5 sm:pt-0 sm:px-0 sm:min-w-[20rem] sm:max-w-[20rem] md:min-w-[23rem] md:max-w-[23rem] lg:min-w-[24rem] lg:max-w-[24rem] 2xl:min-w-[27rem] 2xl:max-w-[27rem]">
            <div className="mt-2">
              <h1 className="pb-2 border-b border-dotted border-gray-300 text-xl text-gray-900 font-semibold mb-2 leading-8 tracking-wider text-left capitalize">
                {product.name}
              </h1>
              <div className="flex justify-start items-center pb-2 pt-1 mb-2 border-b border-dotted border-gray-300">
                {product.sale > 0 && (
                  <h1 className="mr-2 text-lg font-semibold leading-8 tracking-wider text-left text-black">
                    {(product.sale * 1000).toLocaleString().replace(/\,/g, ".")}
                    ₫
                  </h1>
                )}
                <h1
                  className={`${
                    product.sale > 0
                      ? "text-gray-300 line-through text-base"
                      : "text-black text-lg"
                  } font-semibold leading-8 tracking-wider text-left`}
                >
                  {(product.price * 1000).toLocaleString().replace(/\,/g, ".")}₫
                </h1>
              </div>
              <div className="flex flex-wrap pt-2 pb-2 border-b border-dotted border-gray-300">
                {/* gap-2 */}
                {product.category.slug === "freebase" ||
                product.category.slug === "saltnic" ||
                product.category.slug === "disposable-pod" ? (
                  <p className="mb-1 text-sm font-normal text-gray-800 tracking-wide leading-7 mr-1">
                    Vị:
                  </p>
                ) : (
                  <p className="mb-1 text-sm font-normal text-gray-800 tracking-wide leading-7 mr-1">
                    Màu:
                  </p>
                )}
                {product.image.map((item: any, index: any) => (
                  <button
                    onClick={() => (nav1 as any).slickGoTo(index)}
                    key={index}
                    disabled={
                      item.instock || product.image.length > 1 ? false : true
                    }
                    className={`${
                      item.instock
                        ? `bg-gray-800 border-black`
                        : `bg-gray-300 border-gray-300`
                    } mx-1 mb-1 text-xs rounded-sm font-medium border text-white py-[0.5px] px-[5px] cursor-pointer transition-all duration-150 ease-linear`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="flex mt-5 mb-6">
                <div className="bg-black py-3 px-24 rounded-sm cursor-pointer group hover:bg-white border border-black transition-all origin-left duration-150 ease-linear">
                  <a
                    href="https://www.facebook.com/messages/t/100006177676042"
                    target="_blank"
                    rel="noreferrer"
                    className="uppercase font-semibold text-xs text-white tracking-widest group-hover:text-black"
                  >
                    Mua ngay
                  </a>
                </div>
              </div>
              <div className="mb-5 flex flex-col">
                <span className="text-sm tracking-wider font-semibold leading-5">
                  Mô tả
                </span>
                <span className="text-sm text-gray-800 font-normal tracking-wide leading-6">
                  {product.desc}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm tracking-wider font-semibold leading-5 ">
                  Chi tiết sản phẩm
                </span>
                <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                  <span className="text-2xl mr-1">•</span> Tình trạng:&nbsp;
                  {product.instock ? "còn hàng" : "hết hàng"}
                </span>

                <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                  <span className="text-2xl mr-1">•</span> Loại sản phẩm:&nbsp;
                  {product.category.name}
                </span>

                <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                  <span className="text-2xl mr-1">•</span> Thương hiệu:&nbsp;
                  {product.brand.name}
                </span>

                {product.category.slug === "disposable-pod" && (
                  <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                    <span className="text-2xl mr-1">•</span> Số
                    hơi(puffs):&nbsp;
                    {product.puffs}
                  </span>
                )}
                {(product.category.slug === "freebase" ||
                  product.category.slug === "saltnic" ||
                  product.category.slug === "disposable-pod") && (
                  <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                    <span className="text-2xl mr-1">•</span> Liều lượng
                    nicotine: &nbsp;
                    {product.nicotine}
                  </span>
                )}
                {(product.category.slug === "freebase" ||
                  product.category.slug === "saltnic") && (
                  <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                    <span className="text-2xl mr-1">•</span> Dung tích:&nbsp;
                    {product.capacity}
                  </span>
                )}
                {product.category.slug === "disposable-pod" && (
                  <span className="text-sm text-gray-800 font-normal tracking-wider leading-7 flex items-center">
                    <span className="text-2xl mr-1">•</span> Battery:&nbsp;
                    {product.battery}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pl-4">
          <h1 className="font-medium text-xl pl-2 mb-5">Sản phẩm liên quan</h1>
          <ListProductDetail data={filterRelated} />
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
    `https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=${product.category.slug}`
  );
  const relatedProduct = await resRelatedProduct.json();

  return {
    props: {
      product,
      relatedProduct,
    }, // will be passed to the page component as props
  };
}
