// import { Breadcrumbs, Pagination, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";
import LayoutProduct from "../components/layout/LayoutProduct";
import ListProductDetail from "../components/ListproductDetail/ListProductDetail";
import Pagination from "../components/pagination/Pagination";

const KhuyenMai = ({ khuyenMai }: any) => {
  const [page, setPage] = useState<number>(khuyenMai.currentPage);
  const [listProductFilter, setListProductFilter] = useState(khuyenMai.product);
  const [filter, setFilter] = useState("");

  const router = useRouter();

  useEffect(() => {
    setListProductFilter(khuyenMai.product);
  }, [khuyenMai.product]);

  const handleChangePage = useCallback(
    (value: any) => {
      setPage(value.selected + 1);
      router.push(`/khuyen-mai?page=${value.selected + 1}`, undefined, {
        shallow: false,
      });
    },
    [router]
  );

  useEffect(() => {
    if (filter === "az") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (filter === "za") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => b.name.localeCompare(a.name))
      );
    } else if (filter === "increase") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (filter === "decrease") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (filter === "newest") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => {
          return (
            (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any)
          );
        })
      );
    } else if (filter === "oldest") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => {
          return (
            (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any)
          );
        })
      );
    }
  }, [filter]);

  const options = [
    { value: "az", label: "A - Z" },
    { value: "za", label: `Z - A` },
    { value: "increase", label: "Giá tăng dần" },
    { value: "decrease", label: "Giá giảm dần" },
    { value: "newest", label: "Mới nhất" },
    { value: "oldest", label: "Cũ nhất" },
  ];

  const handleChange = (newValue: any, actionMeta: any) => {
    setFilter(newValue.value);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <LayoutProduct>
      <Head>
        <title>Sản phẩm khuyến mãi</title>
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
          <p color="text.primary" className="font-semibold">
            Sản phẩm khuyến mãi
          </p>
        </div>
      </div>
      {/* <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px]">
        <SearchMenu />
      </div> */}
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] bg-white pt-2 pb-5 rounded ">
        <div className="flex items-center justify-between mb-7 mt-3 px-4">
          <h1 className="font-medium text-xs sm:text-lg border-l-4 border-red-400 pl-2">
            Sản phẩm khuyến mãi
          </h1>
          <div className="flex justify-between items-center ">
            {/* gap-x-3 */}
            <label
              id="Select"
              className="font-semibold text-xs sm:text-base mr-3"
            >
              Sắp Xếp:
            </label>
            <Select
              aria-labelledby="Select"
              options={options}
              onChange={handleChange}
              className="w-32 text-xs sm:text-sm sm:w-36"
              placeholder="Lựa chọn..."
            />
          </div>
        </div>
        <ListProductDetail data={listProductFilter} />
        {khuyenMai.product.length < 1 && (
          <div className="w-full flex justify-center items-center mb-6">
            {/* gap-x-2 */}
            <IoSearchOutline className="text-lg mr-2" />
            <p>Không có sản phẩm</p>
          </div>
        )}
        {khuyenMai.product.length > 0 && (
          <div className="w-full flex justify-center items-center mt-6">
            <Pagination
              totalPage={khuyenMai.totalPage}
              activePage={page}
              handleChange={handleChangePage}
            />
          </div>
        )}
      </div>
    </LayoutProduct>
  );
};

export default KhuyenMai;

export async function getServerSideProps(context: any) {
  const resKhuyenmai = await fetch(
    `https://vape-store.herokuapp.com/api/product/sale?page=${context.query.page}&&limit=12`
  );
  const khuyenMai = await resKhuyenmai.json();

  return {
    props: {
      khuyenMai,
    }, // will be passed to the page component as props
  };
}
