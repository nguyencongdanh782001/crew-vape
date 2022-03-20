import React from "react";
import { SiZalo } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="mt-auto w-full flex flex-col justify-center">
      <div className="flex flex-col justify-between gap-y-5 py-7 px-7 lg:flex-row lg:gap-x-20  lg:py-5 lg:px-20 text-white bg-slate-800">
        <div className="flex-1">
          <h3 className="uppercase tracking-wider text-xl font-semibold leading-8">
            the crew station
          </h3>
          <div className="w-11 border-[1.5px] border-red-400 bg-red-400 mt-1 mb-4"></div>
          <div>
            <p className="text-base leading-6 tracking-wide font-normal w-3/4 mb-4">
              The Crew Station là cửa hàng chính hãng cung cấp tinh dầu, thân
              máy, đầu đốt, phụ kiện vape với sự phục vụ chuyên nghiệp và uy tín
              hàng đầu Việt Nam.
            </p>
            <p className="mb-2 text-base leading-6 tracking-wide font-normal flex items-center gap-x-2">
              <MdPhone />
              Hotline: 0792246626
            </p>
            <p className="mb-2 text-base leading-6 tracking-wide font-normal flex items-center gap-x-2">
              <SiZalo />
              Zalo: 0792246626
            </p>
            <p className="mb-2 text-base leading-6 tracking-wide font-normal flex items-center gap-x-2">
              <IoStorefront />
              Địa chỉ: 82 Công Chúa Ngọc Hân P13 Q11
            </p>
          </div>
        </div>
        <div className="flex-3 lg:w-[20%]">
          <h3 className="uppercase tracking-wider text-xl font-semibold leading-8">
            thông tin
          </h3>
          <div className="w-11 border-[1.5px] border-red-400 bg-red-400 mt-1 mb-4"></div>
          <ul>
            <li className="mb-4 text-base leading-6 tracking-wide font-normal list-disc">
              Hướng dẫn mua hàng
            </li>
            <li className="mb-4 text-base leading-6 tracking-wide font-normal list-disc">
              Chính sách thanh toán
            </li>
            <li className="mb-4 text-base leading-6 tracking-wide font-normal list-disc">
              Chính sách vận chuyển hàng
            </li>
            <li className="mb-4 text-base leading-6 tracking-wide font-normal list-disc">
              Đổi trả và bảo hành
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="uppercase tracking-wider text-xl font-semibold leading-8">
            fanpage facebook
          </h3>
          <div className="w-11 border-[1.5px] border-red-400 bg-red-400 mt-1 mb-4"></div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheCrewStation&tabs=timeline&width=250&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=270725018569589"
            width="250"
            height="70"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="bg-slate-900 w-full py-4 text-white flex justify-center items-center">
        <p className="text-sm leading-6 tracking-wide font-normal">
          2022 - 2023 © Bản quyền thuộc The Crew Station
        </p>
      </div>
    </footer>
  );
};

export default Footer;
