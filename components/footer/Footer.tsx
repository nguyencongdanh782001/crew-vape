import React from "react";
import { SiZalo } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="mt-auto w-full flex flex-col justify-center">
      <div className="flex flex-col justify-between  py-7 px-7 lg:flex-row border-b border-white  lg:py-5 lg:px-20 text-white bg-black">
        {/* lg:gap-x-20 gap-y-5 */}
        <div className="flex-1 lg:mr-10 my-3">
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
        <div className="flex-3 lg:w-[20%] lg:mx-10 my-3">
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
        <div className="flex-1 lg:w-[20%] lg:ml-10 my-3">
          <h3 className="uppercase tracking-wider text-xl font-semibold leading-8">
            fanpage facebook
          </h3>
          <div className="w-11 border-[1.5px] border-red-400 bg-red-400 mt-1 mb-4"></div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheCrewStation&tabs&width=280&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=270725018569589"
            width="280"
            height="130"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="crewvape"
          ></iframe>
        </div>
      </div>
      <div className="bg-black w-full py-4 text-white flex justify-center items-center">
        <p className="text-sm leading-6 tracking-wide font-normal">
          2022 - 2023 © Bản quyền thuộc The Crew Station
        </p>
      </div>
    </footer>
  );
};

export default Footer;
