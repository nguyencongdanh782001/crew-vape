import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { TEXT_CREW } from "../../../public/assets/global-image";
import useDebounce from "../../debounce/useDebounce";

const NavBarPc = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listSearch, setListSearch] = useState<any>();

  useDebounce(searchValue, 300, async () => {
    try {
      const res = await fetch(
        `https://vape-store.herokuapp.com/api/product/search/all?page=1&&limit=6&&searchQuery=${searchValue}`
      );
      const data = await res.json();
      if (!res) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
        setListSearch(data);
      }
    } catch (error) {
      console.log(error);
    }
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search?page=1&&search=${searchValue}`, undefined, {
      shallow: false,
    });
  };
  return (
    <div
      className={`flex ${
        router.pathname === "/" ? "justify-between" : "justify-center "
      } items-center py-4 px-8`}
    >
      {/* gap-x-20 */}
      <div className="mr-[40px]">
        <Link href="/" passHref>
          <div className="w-full cursor-pointer">
            <Image
              src={TEXT_CREW}
              alt="Picture of the author"
              width={130}
              height={30}
            />
          </div>
        </Link>
      </div>
      {router.pathname === "/" && (
        <ul className="flex justify-center items-center mx-[40px]">
          {/* gap-x-8 */}
          <li
            className={`${
              router.pathname === "/" ? "header-menu-item-active" : ""
            } mr-4`}
          >
            <Link href="/" passHref>
              <a className="header-menu-link">trang chủ</a>
            </Link>
          </li>
          <li
            className={` ${
              router.pathname.split("/")[1] === "san-pham"
                ? "header-menu-item-active"
                : ""
            } mx-4`}
          >
            <Link href="/san-pham/freebase?page=1">
              <a className="header-menu-link">sản phẩm</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/khuyen-mai">
              <a className="header-menu-link">sản phẩm khuyến mãi</a>
            </Link>
          </li>
        </ul>
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative group mx-[40px]"
      >
        <input
          type="text"
          className="h-7 w-[280px] rounded-full outline-none pl-[38px] py-5 pr-4 font-medium text-sm text-gray-500 border border-solid border-gray-400"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSubmit={handleSubmit}
        />
        <i className="absolute left-3 top-0 bottom-0 my-auto flex items-center">
          <BsSearch className="text-gray-400" />
        </i>
        <ul
          className={`${
            searchValue !== "" ? "block" : "hidden"
          } mt-1 border border-gray-300 right-0 left-0 z-20 overflow-hidden absolute bg-gray-50 rounded-md`}
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
                          className="h-12 w-12 object-cover"
                        />
                      </div>
                    </div>
                  </li>
                </Link>
              ))}

              {listSearch?.product.length < 1 ? (
                <li className="px-2 py-3 flex items-center justify-center">
                  {/* gap-1  */}
                  <IoSearchOutline className="text-lg mr-1" />
                  <p className="text-center text-sm tracking-wider">
                    {`Không tìm thấy kết quả cho "${searchValue}"`}
                  </p>
                </li>
              ) : listSearch?.totalPage * listSearch?.product.length > 6 ? (
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
                <li className="px-2 py-3">
                  <Link href={`/search?page=1&&search=${searchValue}`} passHref>
                    <p className="text-center text-sm tracking-wider hover:text-red-400 cursor-pointer">
                      Xem thêm
                    </p>
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
      </form>
      {router.pathname !== "/" && (
        <div className="flex flex-col justify-center items-center ml-[40px]">
          <h4 className="text-sm font-normal tracking-wide">
            Tư vấn trực tuyến:
          </h4>
          <p className="text-2xl font-semibold tracking-wider">0792246626</p>
        </div>
      )}
    </div>
  );
};

export default NavBarPc;
