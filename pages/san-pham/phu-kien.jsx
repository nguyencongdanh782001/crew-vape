import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";
import LayoutProduct from "../../components/layout/LayoutProduct";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
import Pagination from "../../components/pagination/Pagination";
import { PHUKIEN } from "../../public/assets/global-image";
import parse from "html-react-parser";
import MarkdownIt from "markdown-it";
import mila from "markdown-it-link-attributes";
import markdownItVideo from "markdown-it-video";
import "react-markdown-editor-lite/lib/index.css";

export const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: false,
  langPrefix: "language-",
})
  .use(mila, {
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  })
  .use(markdownItVideo, {
    youtube: { width: 640, height: 390 },
    vimeo: { width: 500, height: 281 },
    vine: { width: 600, height: 600, embed: "simple" },
    prezi: { width: 550, height: 400 },
  });

const PhuKien = ({ phuKien, category }) => {
  const [page, setPage] = useState(phuKien.currentPage);
  const [listProductFilter, setListProductFilter] = useState(phuKien.product);
  const [filter, setFilter] = useState("");

  const router = useRouter();

  useEffect(() => {
    setListProductFilter(phuKien.product);
  }, [phuKien.product]);

  const handleChangePage = useCallback(
    (value) => {
      setPage(value.selected + 1);
      router.push(`/san-pham/phu-kien?page=${value.selected + 1}`, undefined, {
        shallow: false,
      });
    },
    [router]
  );

  useEffect(() => {
    if (filter === "az") {
      setListProductFilter((prev) =>
        [...prev].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (filter === "za") {
      setListProductFilter((prev) =>
        [...prev].sort((a, b) => b.name.localeCompare(a.name))
      );
    } else if (filter === "increase") {
      setListProductFilter((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (filter === "decrease") {
      setListProductFilter((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (filter === "newest") {
      setListProductFilter((prev) =>
        [...prev].sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      );
    } else if (filter === "oldest") {
      setListProductFilter((prev) =>
        [...prev].sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
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

  const handleChange = (newValue, actionMeta) => {
    setFilter(newValue.value);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <LayoutProduct>
      <Head>
        <title>Phụ kiện</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Crew Vape là nơi chuyên cung cấp những sản phẩm về phụ kiện máy uy tín và chất lượng."
        />
        <meta name="keywords" content="phụ kiện" />
        <meta property="og:title" content="phụ kiện" />
        <meta
          property="og:url"
          content={`https://crewvape.net/san-pham/phu-kien?page=${page}`}
        />
        <meta
          property="og:image:alt"
          content={`https://crewvape.net/san-pham/phu-kien?page=${page}`}
        />
        <meta property="og:image" content={`${PHUKIEN.src}`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] pl-3 py-2 mb-4 bg-white my-4 rounded">
        <div className="flex">
          <Link href="/" passHref>
            <a className="hover:underline text-base font-normal ">Trang chủ</a>
          </Link>
          <p>&nbsp;/&nbsp;</p>
          <p color="text.primary" className="font-semibold">
            Phụ kiện
          </p>
        </div>
      </div>
      {/* <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px]">
        <SearchMenu />
      </div> */}
      <div className="lg:mx-[49px] xl:ml-[25px] xl:mr-[120px] bg-white pt-2 pb-5 rounded ">
        <div className="flex items-center justify-between mb-7 mt-3 px-4">
          <h1 className="font-medium text-xs sm:text-lg border-l-4 border-red-400 pl-2">
            Phụ kiện
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

        {phuKien.product.length < 1 && (
          <div className="w-full flex justify-center items-center mb-6 ">
            {/* gap-x-2 */}
            <IoSearchOutline className="text-lg mr-2" />
            <p>Không có sản phẩm</p>
          </div>
        )}
        {phuKien.product.length > 0 && (
          <>
            <div className="w-full flex justify-center items-center mt-6">
              <Pagination
                totalPage={phuKien.totalPage}
                activePage={page}
                handleChange={handleChangePage}
              />
            </div>
            {category?.blog && (
              <>
                <div className="w-full h-[0.5px] bg-gray-300 my-7"></div>
                <div className="px-5">
                  <div className="blog-content w-full text-white flex flex-col justify-center items-start px-4 sm:px-3 lg:px-4 leading-7 text-sm sm:text-base">
                    {parse(mdParser.render(`${category?.blog}`))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </LayoutProduct>
  );
};

export default PhuKien;

export async function getServerSideProps(context) {
  const responses = await Promise.all([
    fetch(
      `https://vape-store.herokuapp.com/api/product?page=${context.query.page}&&limit=12&&cat=phu-kien`
    ),
    fetch(
      `https://vape-store.herokuapp.com/api/category/slug-category?cat=phu-kien`
    ),
  ]);

  const jsons = await Promise.all(
    await Promise.all(responses.map((res) => res.json()))
  );
  return {
    props: {
      phuKien: jsons[0],
      category: jsons[1],
    }, // will be passed to the page component as props
  };
}
