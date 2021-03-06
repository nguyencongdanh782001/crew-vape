import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";
import LayoutProduct from "../../components/layout/LayoutProduct";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
import Pagination from "../../components/pagination/Pagination";
import { POD } from "../../public/assets/global-image";
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

const PodMod = ({ podMod, category }) => {
  const [page, setPage] = useState(podMod.CurrentPage);
  const [listProductFilter, setListProductFilter] = useState(podMod.product);
  const [filter, setFilter] = useState("");
  const router = useRouter();

  useEffect(() => {
    setListProductFilter(podMod.product);
  }, [podMod.product]);

  const handleChangePage = useCallback(
    (value) => {
      setPage(value.selected + 1);
      router.push(`/san-pham/pod-mod?page=${value.selected + 1}`, undefined, {
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
    { value: "increase", label: "Gi?? t??ng d???n" },
    { value: "decrease", label: "Gi?? gi???m d???n" },
    { value: "newest", label: "M???i nh???t" },
    { value: "oldest", label: "C?? nh???t" },
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
        <title>Pod system</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Crew Vape l?? n??i chuy??n cung c???p nh???ng s???n ph???m v??? pod system uy t??n v?? ch???t l?????ng."
        />
        <meta name="keywords" content="pod system" />
        <meta property="og:title" content="pod system" />
        <meta
          property="og:url"
          content={`https://crewvape.net/san-pham/pod-mod?page=${page}`}
        />
        <meta
          property="og:image:alt"
          content={`https://crewvape.net/san-pham/pod-mod?page=${page}`}
        />
        <meta property="og:image" content={`${POD.src}`} />
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

        {podMod.product.length < 1 && (
          <div className="w-full flex justify-center items-center mb-6 ">
            {/* gap-x-2 */}
            <IoSearchOutline className="text-lg mr-2" />
            <p>Kh??ng c?? s???n ph???m</p>
          </div>
        )}
        {podMod.product.length > 0 && (
          <>
            <div className="w-full flex justify-center items-center mt-6">
              <Pagination
                totalPage={podMod.totalPage}
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

export default PodMod;

export async function getServerSideProps(context) {
  const responses = await Promise.all([
    fetch(
      `https://vape-store.herokuapp.com/api/product?page=${context.query.page}&&limit=12&&cat=pod-mod`
    ),
    fetch(
      `https://vape-store.herokuapp.com/api/category/slug-category?cat=pod-mod`
    ),
  ]);

  const jsons = await Promise.all(
    await Promise.all(responses.map((res) => res.json()))
  );

  return {
    props: {
      podMod: jsons[0],
      category: jsons[1],
    }, // will be passed to the page component as props
  };
}
