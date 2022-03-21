// import { Breadcrumbs, Pagination, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";
import LayoutProduct from "../../components/layout/LayoutProduct";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
import SearchMenu from "../../components/searchmenu/SearchMenu";

const FreeBase = ({ freebase }: any) => {
  const [page, setPage] = useState<number>(freebase.currentPage);
  const [listProductFilter, setListProductFilter] = useState(freebase.product);
  const [filter, setFilter] = useState("");
  const router = useRouter();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    router.push(`/san-pham/freebase?page=${value}`, undefined, {
      shallow: false,
    });
  };

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
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (filter === "oldest") {
      setListProductFilter((prev: any) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
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
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] pl-3 py-2 mb-4 bg-white my-4 rounded">
        {/* <Breadcrumbs aria-label="breadcrumb">
          <Link href="/" passHref>
            <a className="hover:underline text-base font-medium">Trang chủ</a>
          </Link>
          <Typography color="text.primary" className="font-medium">
            Tinh dầu freebase
          </Typography>
        </Breadcrumbs> */}
      </div>
      {/* <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px]">
        <SearchMenu />
      </div> */}
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] bg-white pt-2 pb-5 rounded ">
        <div className="flex items-center justify-between mb-7 mt-3 px-4">
          <h1 className="font-medium text-xs sm:text-lg border-l-4 border-red-400 pl-2">
            Tinh dầu freebase
          </h1>
          <div className="flex justify-between items-center gap-x-3">
            <label className="font-semibold text-xs sm:text-base">
              Sắp Xếp:
            </label>
            <Select
              options={options}
              onChange={handleChange}
              className="w-32 text-xs sm:text-sm sm:w-36"
              placeholder="Lựa chọn..."
            />
          </div>
        </div>
        <ListProductDetail data={listProductFilter} />

        {freebase.product.length < 1 && (
          <div className="w-full flex justify-center items-center mb-6 gap-x-2">
            <IoSearchOutline className="text-lg" />
            <p>Không có sản phẩm</p>
          </div>
        )}
        {freebase.product.length > 0 && (
          <div className="w-full flex justify-center items-center mt-6">
            {/* <Pagination
              count={freebase.totalPage ? freebase.totalPage : 1}
              page={page ? page : 1}
              onChange={handleChangePage}
              size="medium"
            /> */}
          </div>
        )}
      </div>
    </LayoutProduct>
  );
};

export default FreeBase;

export async function getServerSideProps(context: any) {
  const resFreebase = await fetch(
    `https://vape-store.herokuapp.com/api/product?page=${context.query.page}&&limit=10&&cat=freebase`
  );
  const freebase = await resFreebase.json();

  return {
    props: {
      freebase,
    }, // will be passed to the page component as props
  };
}
