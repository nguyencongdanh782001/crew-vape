import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Category from "../components/category/Category";
import Layout from "../components/layout/LayoutHome";
import ListProduct from "../components/listproduct/ListProduct";
import SliderBanner from "../components/slider/SliderBanner";

const Home: NextPage = ({
  banner,
  freebase,
  Saltnic,
  disposablePod,
  podMod,
  boxTank,
  phuKien,
}: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout scrollNavBar="scroll">
      <Head>
        <title>The crew station</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="the crew station là nơi chuyên cung cấp những sản phẩm về vape uy tín và chất lượng."
        />
      </Head>
      <div className="pb-10 pt-[58px] lg:pt-[8px] ">
        <SliderBanner banner={banner} />
        <Category />
        <ListProduct
          heading="freebase"
          data={freebase.product}
          link="freebase"
        />
        <ListProduct heading="saltnic" data={Saltnic.product} link="saltnic" />
        <ListProduct
          heading="disposable pod"
          data={disposablePod.product}
          link="disposable-pod"
        />
        <ListProduct heading="pod mod" data={podMod.product} link="pod-mod" />

        <ListProduct
          heading="box tank"
          data={boxTank.product}
          link="box-tank"
        />

        <ListProduct
          heading="phụ kiện"
          data={phuKien.product}
          link="phu-kien"
        />
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps(context: any) {
  const responses = await Promise.all([
    fetch("https://vape-store.herokuapp.com/api/banner", {
      method: "GET",
    }),
    fetch(
      "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=freebase"
    ),
    fetch(
      "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=saltnic"
    ),
    fetch(
      "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=disposable-pod"
    ),
    fetch(
      "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=pod-mod"
    ),
    fetch(
      "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=box-tank"
    ),
    fetch(
      "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=phu-kien"
    ),
  ]);

  const jsons = await Promise.all(
    await Promise.all(responses.map((res) => res.json()))
  );

  return {
    props: {
      banner: jsons[0],
      freebase: jsons[1],
      Saltnic: jsons[2],
      disposablePod: jsons[3],
      podMod: jsons[4],
      boxTank: jsons[5],
      phuKien: jsons[6],
    },
    revalidate: 60,
  };
}
