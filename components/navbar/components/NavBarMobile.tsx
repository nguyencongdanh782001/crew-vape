import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TEXT_CREW } from "../../../public/assets/global-image";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import useDebounce from "../../debounce/useDebounce";
import { IoSearchOutline } from "react-icons/io5";
import { useOnClickOutside } from "../../useOnclickoutside/useOnclickoutside";

interface OpenType {
  open: boolean;
  first: boolean;
}
const NavBarMobile = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<OpenType>({
    open: false,
    first: true,
  });

  const [openProduct, setOpenProduct] = useState({
    open: false,
    first: true,
  });

  const handleProduct = () => {
    setOpenProduct({ first: false, open: !openProduct.open });
  };

  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listSearch, setListSearch] = useState<any>();

  useDebounce(searchValue, 300, async () => {
    const res = await fetch(
      `https://vape-store.herokuapp.com/api/product/search/all?page=1&&limit=6&&searchQuery=${searchValue}`
    );
    const data = await res.json();
    if (!res) {
      setIsLoading(true);
    } else {
      setListSearch(data);
      setIsLoading(false);
    }
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search?page=1&&search=${searchValue}`, undefined, {
      shallow: false,
    });
  };

  const searchInputRef = useRef<any>();

  const [showListSearch, setShowListSearch] = useState(false);

  useOnClickOutside(searchInputRef, (e) => {
    setShowListSearch(false);
  });

  return (
    <div className="flex justify-between items-center py-2 px-3 sm:px-4">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <Link href="/" passHref>
            <a>
              <Image
                src={TEXT_CREW}
                alt="Picture of the author"
                width={80}
                height={20}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative"
        ref={searchInputRef}
        onClick={() => setShowListSearch(true)}
      >
        <input
          type="text"
          className="h-7 w-[210px] sm:w-[300px] rounded-full outline-none pl-[38px] py-4 pr-4 font-medium text-sm text-gray-500 border border-solid border-gray-400"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <i className="absolute left-3 top-0 bottom-0 my-auto flex items-center">
          <BsSearch className="text-gray-400" />
        </i>
        <ul
          className={`${
            showListSearch ? "block" : "hidden"
          }  border border-gray-300 -left-12 sm:left-0 right-0 z-20 overflow-hidden absolute bg-gray-50 rounded-md`}
        >
          {isLoading ? (
            <li>
              <p>loading...</p>
            </li>
          ) : (
            <>
              {listSearch?.product.map((item: any, index: any) => (
                <Link href={`/san-pham/${item._id}`} passHref key={index}>
                  <li className="cursor-pointer hover:bg-gray-200">
                    <div className="flex justify-between items-center border-b border-gray-300 py-3 px-2 mx-2">
                      <div>
                        <p className="text-sm font-normal tracking-wider">
                          {item.name}
                        </p>
                        <span className="text-sm font-light tracking-wider">
                          {item.price}đ
                        </span>
                      </div>
                      <div className="h-12 w-12">
                        <img
                          src={item.image[0].image}
                          alt=""
                          className="h-10 w-10 sm:h-12 sm:w-12 object-cover"
                        />
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
              {listSearch?.totalPage * listSearch?.product.length > 6 ? (
                <li className="px-2 py-3">
                  <Link href={`/search?page=1&&search=${searchValue}`} passHref>
                    <p className="text-center text-sm tracking-wider hover:text-red-400 cursor-pointer">
                      Xem thêm{" "}
                      {listSearch?.totalPage * listSearch?.product.length -
                        listSearch?.product.length}{" "}
                      sản phẩm
                    </p>
                  </Link>
                </li>
              ) : (
                listSearch?.product.length >= 2 && (
                  <li className="px-2 py-3">
                    <Link
                      href={`/search?page=1&&search=${searchValue}`}
                      passHref
                    >
                      <p className="text-center text-sm tracking-wider hover:text-red-400 cursor-pointer">
                        Xem thêm
                      </p>
                    </Link>
                  </li>
                )
              )}
              {listSearch?.product.length < 1 && (
                <li className="px-2 py-3 flex items-center justify-center max-w-[220px] sm:max-w-[300px]">
                  {/* gap-1 */}
                  <IoSearchOutline className="text-lg mr-1" />
                  <p className="text-center text-sm tracking-wider max-w-[220px] sm:max-w-[300px] break-words">
                    {`Không tìm thấy kết quả cho "${searchValue}"`}
                  </p>
                </li>
              )}
            </>
          )}
        </ul>
      </form>
      <div>
        <i
          className="flex items-center text-2xl cursor-pointer"
          onClick={() =>
            setOpenMenu({
              open: true,
              first: false,
            })
          }
        >
          <HiMenu />
        </i>
      </div>

      <div
        className={`${
          openMenu.first === false
            ? openMenu.open === true
              ? "animate-showMenuMobile"
              : "animate-hideMenuMobile"
            : "hidden"
        } w-full h-screen fixed left-0 top-0 flex flex-col bg-white`}
      >
        <div className="flex justify-end p-4">
          <i
            className="flex items-center text-2xl cursor-pointer"
            onClick={() => setOpenMenu({ open: false, first: false })}
          >
            <GrClose />
          </i>
        </div>
        <div className="px-10">
          <ul className="flex-col justify-center items-center">
            <li
              className={`${
                router.pathname === "/" ? "header-mobile-menu-item-active" : ""
              } header-mobile-menu-item`}
            >
              <Link href="/" passHref>
                <a className="header-mobile-menu-link">trang chủ</a>
              </Link>
            </li>
            <li className={`h-full transition-all duration-300 ease-linear`}>
              <div
                className={`${
                  router.pathname.split("/")[1] === "san-pham"
                    ? "bg-gray-200 rounded-lg"
                    : ""
                } flex justify-between items-center px-3 h-[45px]`}
                onClick={handleProduct}
              >
                <p className={`font-bold text-[16px] text-gray-500 uppercase`}>
                  sản phẩm
                </p>
                <i>
                  <MdKeyboardArrowRight
                    className={`font-bold text-gray-500 text-xl ${
                      openProduct.first === false
                        ? openProduct.open
                          ? "rotate-90"
                          : ""
                        : ""
                    }  transition-all duration-300`}
                  />
                </i>
              </div>
              <ul
                className={`${
                  openProduct.first === false
                    ? openProduct.open
                      ? "animate-showDropMenu"
                      : "animate-hideDropMenu"
                    : "hidden"
                } px-4 rounded-b-lg mb-1 origin-top-left`}
              >
                <li
                  className={`${
                    router.pathname.split("?")[0] === "/san-pham/freebase"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/san-pham/freebase?page=1">
                    <a className="product-mobile-menu-link">
                      tinh dầu freebase
                    </a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname.split("?")[0] === "/san-pham/saltnic"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/san-pham/saltnic?page=1">
                    <a className="product-mobile-menu-link">tinh dầu saltnic</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname.split("?")[0] === "/san-pham/box-tank"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/san-pham/box-tank?page=1">
                    <a className="product-mobile-menu-link">box tank</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname.split("?")[0] === "/san-pham/pod-mod"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/san-pham/pod-mod?page=1">
                    <a className="product-mobile-menu-link">pod mod</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname.split("?")[0] === "/san-pham/disposable-pod"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/san-pham/disposable-pod?page=1">
                    <a className="product-mobile-menu-link">disposable pod</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname.split("?")[0] === "/san-pham/phu-kien"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/san-pham/phu-kien?page=1">
                    <a className="product-mobile-menu-link">phụ kiện</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`${
                router.pathname.split("?")[0] === "/khuyen-mai"
                  ? "header-mobile-menu-item-active"
                  : ""
              } header-mobile-menu-item`}
            >
              <Link href="/khuyen-mai?page=1">
                <a className="header-mobile-menu-link">sản phẩm khuyến mãi</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
