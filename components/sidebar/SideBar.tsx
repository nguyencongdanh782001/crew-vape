import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="bg-white w-[300px] flex flex-col h-full">
      <div className="py-[26px] bg-slate-800">
        <h3 className="uppercase text-2xl text-center font-bold tracking-wide text-white">
          danh mục
        </h3>
      </div>
      <ul className="flex flex-col">
        <li
          className={`${
            router.pathname === "/" ? "sidebar-active" : ""
          } sidebar-item`}
        >
          <Link href="/" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              trang chủ
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/khuyen-mai"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/khuyen-mai?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              sản phẩm khuyến mãi
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/san-pham/freebase"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/freebase?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              tinh dầu freebase
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/san-pham/saltnic"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/saltnic?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              tinh dầu saltnic
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/san-pham/box-tank"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/box-tank?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              box tank
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/san-pham/pod-mod"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/pod-mod?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              pod mod
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/san-pham/disposable-pod"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/disposable-pod?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              disposable pod
            </a>
          </Link>
        </li>
        <li
          className={`${
            router.pathname.split("?")[0] === "/san-pham/phu-kien"
              ? "sidebar-active"
              : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/phu-kien?page=1" passHref>
            <a className="py-2 w-full text-gray-600 hover:text-black">
              phụ kiện
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
