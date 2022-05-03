import React, { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute left-2 sm:left-3 md:left-5 z-10 top-0 bottom-0 flex justify-center items-center">
      <div
        onClick={onClick}
        className="group h-20 w-7 sm:h-32 sm:w-8 md:h-40 md:w-9 bg-gray-300 flex justify-center items-center rounded-md hover:bg-gray-200 opacity-50 cursor-pointer"
      >
        <i>
          <MdOutlineArrowBackIos className="text-gray-500 text-lg sm:text-2xl md:text-3xl group-hover:text-gray-400" />
        </i>
      </div>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute right-2 sm:right-3 md:right-5 z-10 top-0 bottom-0 flex justify-center items-center">
      <div
        onClick={onClick}
        className="group h-20 w-7 sm:h-32 sm:w-8 md:h-40 md:w-9 bg-gray-300 flex justify-center items-center rounded-md hover:bg-gray-200 opacity-50 cursor-pointer"
      >
        <i>
          <MdOutlineArrowForwardIos className="text-gray-500 text-lg sm:text-2xl md:text-3xl group-hover:text-gray-400" />
        </i>
      </div>
    </div>
  );
};

const SliderBanner = ({ banner }: any) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {banner.map((item: any, index: any) => (
          <div className="w-screen" key={index}>
            <img
              src={item.image}
              alt=""
              className="w-screen object-cover h-[200px]  sm:h-[250px] md:h-[300px] lg:h-[500px]"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default memo(SliderBanner);
