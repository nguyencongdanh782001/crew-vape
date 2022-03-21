import Link from "next/link";
import React, { memo, useEffect } from "react";
import ProductItem from "./components/ProductItem";
import AOS from "aos";
import "aos/dist/aos.css";

interface PropsType {
  heading: string;
  link: string;
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
const ListProduct = ({ heading, data, link }: PropsType) => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <section className="w-full flex items-center justify-center mt-16 ">
      <div className="max-w-7xl flex flex-col items-center justify-center">
        <div className="mb-7 relative flex items-center justify-center gap-x-3 w-[300px] sm:w-[500px] lg:w-[650px]">
          <h2 className="uppercase text-center font-semibold text-xl sm:text-2xl px-3 bg-white lg:text-3xl tracking-wider leading-10 text-gray-800 z-10">
            {heading}
          </h2>
          <div className="border-[0.5px] left-0 right-0 absolute h-[3px] bg-gray-800"></div>
        </div>
        <div
          className="max-w-7xl flex justify-center flex-wrap gap-7 items-center "
          data-aos="fade-up"
        >
          {data?.length > 4
            ? data
                ?.splice(0, 4)
                .map((item, index) => <ProductItem key={index} data={item} />)
            : data?.map((item, index) => (
                <ProductItem key={index} data={item} />
              ))}
        </div>
        <div className="mt-8">
          <Link href={`/san-pham/${link}`} passHref>
            <a className="border border-gray-800 border-solid rounded-sm py-2 px-4 text-center text-gray-800 font-medium hover:bg-slate-100 hover:text-gray-700 transition-all duration-200 origin-bottom-right">
              Xem thêm
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(ListProduct);
