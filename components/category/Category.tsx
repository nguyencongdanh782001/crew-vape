import React, { useEffect } from "react";
import category from "../../data/categoryData";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Category = () => {
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
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="flex justify-center items-center gap-6 flex-wrap max-w-7xl">
        {category?.map((item, index) => (
          <Link href={`/san-pham/${item.slug}`} key={index} passHref>
            <div
              data-aos="fade-up"
              className="relative flex items-center jus cursor-pointer overflow-hidden group rounded-lg"
            >
              <div className="w-[320px] sm:w-[300px] md:w-[350px] lg:w-[580px] h-[150px] sm:h-[200px] md:h-[200px] lg:h-[300px]">
                <img
                  src={item?.image || ""}
                  alt={item?.title}
                  className="group-hover:scale-105 h-full w-full rounded-lg object-cover transition-all duration-200 ease-linear"
                />
              </div>
              <div className="absolute m-auto group-hover:scale-110 transition-all duration-200 ease-linear w-full left-0 right-0 z-10">
                <h4
                  className="uppercase text-center font-semibold text-white text-2xl tracking-wider leading-10"
                  style={{ textShadow: "2px 2px 2px #000" }}
                >
                  {item?.title}
                </h4>
                <p
                  className="uppercase text-center font-normal text-white text-base tracking-wider"
                  style={{ textShadow: "1.5px 1.5px 1.5px #000" }}
                >
                  danh mục tinh dầu {item?.title}
                </p>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 group-hover:opacity-60 transition-all duration-200"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
