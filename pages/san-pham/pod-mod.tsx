import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";
import LayoutProduct from "../../components/layout/LayoutProduct";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
import Pagination from "../../components/pagination/Pagination";

const PodMod = ({ podMod }: any) => {
  const [page, setPage] = useState<number>(podMod.CurrentPage);
  const [listProductFilter, setListProductFilter] = useState(podMod.product);
  const [filter, setFilter] = useState("");
  const router = useRouter();

  const handleChangePage = useCallback(
    (value: any) => {
      setPage(value.selected + 1);
      router.push(`/san-pham/pod-mod?page=${value.selected + 1}`, undefined, {
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
        <title>Pod system</title>
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
            Pod mod
          </p>
        </div>
      </div>
      {/* <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px]">
        <SearchMenu />
      </div> */}
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] bg-white pt-2 pb-5 rounded ">
        <div className="flex items-center justify-between mb-7 mt-3 px-4">
          <h1 className="font-medium text-xs sm:text-lg border-l-4 border-red-400 pl-2">
            Pod mod
          </h1>
          <div className="flex justify-between items-center">
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

        {podMod.product.length < 1 && (
          <div className="w-full flex justify-center items-center mb-6 ">
            {/* gap-x-2 */}
            <IoSearchOutline className="text-lg mr-2" />
            <p>Không có sản phẩm</p>
          </div>
        )}
        {podMod.product.length > 0 && (
          <div className="w-full flex justify-center items-center mt-6">
            <Pagination
              totalPage={podMod.totalPage}
              activePage={page}
              handleChange={handleChangePage}
            />
          </div>
        )}
      </div>
    </LayoutProduct>
  );
};

export default PodMod;

export async function getServerSideProps(context: any) {
  const resPodMod = await fetch(
    `https://vape-store.herokuapp.com/api/product?page=${context.query.page}&&limit=10&&cat=pod-mod`
  );
  const podMod = await resPodMod.json();

  return {
    props: {
      podMod,
    }, // will be passed to the page component as props
  };
}
