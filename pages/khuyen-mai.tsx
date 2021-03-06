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
import { TEXT_LOGO_CREW } from "../public/assets/global-image";

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
    { value: "increase", label: "Gi?? t??ng d???n" },
    { value: "decrease", label: "Gi?? gi???m d???n" },
    { value: "newest", label: "M???i nh???t" },
    { value: "oldest", label: "C?? nh???t" },
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
        <title>S???n ph???m khuy???n m??i</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Crew Vape l?? n??i chuy??n cung c???p nh???ng s???n ph???m khuy???n m??i v??? vape uy t??n v?? ch???t l?????ng."
        />
        <meta name="keywords" content="crew vape s???n ph???m khuy???n m??i" />
        <meta property="og:title" content="crew vape s???n ph???m khuy???n m??i" />
        <meta
          property="og:url"
          content={`https://crewvape.net/khuyen-mai?page=${page}`}
        />
        <meta
          property="og:image:alt"
          content={`https://crewvape.net/khuyen-mai?page=${page}`}
        />
        <meta property="og:image" content={`${TEXT_LOGO_CREW.src}`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] pl-3 py-2 mb-4 bg-white my-4 rounded">
        <div className="flex">
          <Link href="/" passHref>
            <a className="hover:underline text-base font-normal ">Trang ch???</a>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <p color="text.primary" className="font-semibold">
            S???n ph???m khuy???n m??i
          </p>
        </div>
      </div>
      {/* <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px]">
        <SearchMenu />
      </div> */}
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] bg-white pt-2 pb-5 rounded ">
        <div className="flex items-center justify-between mb-7 mt-3 px-4">
          <h1 className="font-medium text-xs sm:text-lg border-l-4 border-red-400 pl-2">
            S???n ph???m khuy???n m??i
          </h1>
          <div className="flex justify-between items-center ">
            {/* gap-x-3 */}
            <label
              id="Select"
              className="font-semibold text-xs sm:text-base mr-3"
            >
              S???p X???p:
            </label>
            <Select
              aria-labelledby="Select"
              options={options}
              onChange={handleChange}
              className="w-32 text-xs sm:text-sm sm:w-36"
              placeholder="L???a ch???n..."
            />
          </div>
        </div>
        <ListProductDetail data={listProductFilter} />
        {khuyenMai.product.length < 1 && (
          <div className="w-full flex justify-center items-center mb-6">
            {/* gap-x-2 */}
            <IoSearchOutline className="text-lg mr-2" />
            <p>Kh??ng c?? s???n ph???m</p>
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
