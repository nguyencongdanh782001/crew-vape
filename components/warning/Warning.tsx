import React, { useEffect, useMemo, useState } from "react";

const Warning = () => {
  const [warning, setWarning] = useState("trên 18");

  useEffect(() => {
    if (sessionStorage.getItem("warning")) {
      setWarning(sessionStorage.getItem("warning") || "");
    } else {
      setWarning("");
    }
  }, []);

  const handleSubmit = useMemo(
    () => (value: any) => {
      setWarning(value);
      sessionStorage.setItem("warning", value);
    },
    []
  );

  return (
    <div
      className={`${
        warning === "trên 18" ? "hidden" : "flex"
      } w-screen h-screen top-0 fixed z-50`}
    >
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-black opacity-80`}
      ></div>
      <div
        className={`m-auto flex flex-col justify-center items-center z-10 max-w-lg`}
      >
        <h1 className="text-4xl text-white font-semibold tracking-wider mb-4">
          CẢNH BÁO !!!
        </h1>
        <p className="text-lg text-white font-semibold text-center tracking-wider leading-8">
          Bạn phải trên 18 tuổi và đủ độ tuổi hút thuốc lá hợp pháp tại Việt Nam
          mới có thể sử dụng vape và mua sản phẩm của chúng tôi.
        </p>
        <div className=" flex mt-3">
          {/* gap-5 */}
          <span
            onClick={() => handleSubmit("trên 18")}
            className="bg-red-500 py-2 mr-5 px-3 text-lg text-white font-semibold text-center cursor-pointer hover:bg-red-600 transition-all duration-100 ease-linear rounded-md"
          >
            Trên 18+
          </span>
          <a
            href="https://nganhangphapluat.thukyluat.vn/tu-van-phap-luat/trach-nhiem-hinh-su/18-tuoi-co-duoc-hut-thuoc-la-138188"
            target="_blank"
            rel="noreferrer"
            aria-label="Warning"
            className="border border-white py-2 px-4 text-lg text-white font-semibold text-center cursor-pointer hover:bg-white hover:text-black transition-all duration-100 ease-linear rounded-md"
          >
            Dưới 18
          </a>
        </div>
      </div>
    </div>
  );
};

export default Warning;
