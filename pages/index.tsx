import type { NextPage } from "next";
import { useEffect } from "react";
import Category from "../components/category/Category";
import Layout from "../components/layout/LayoutHome";
import ListProduct from "../components/listproduct/ListProduct";
import SliderBanner from "../components/slider/SliderBanner";

const Home: NextPage = ({
  freebase,
  saltnic,
  podmod,
  boxtank,
  phukien,
  disposablepod,
  banner,
}: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout scrollNavBar="scroll">
      <div className="pb-10 pt-[58px] lg:pt-[8px] ">
        <SliderBanner banner={banner} />
        <Category />
        <ListProduct
          heading="freebase"
          data={freebase.product}
          link="freebase"
        />
        <ListProduct heading="saltnic" data={saltnic.product} link="saltnic" />
        <ListProduct
          heading="disposable pod"
          data={disposablepod.product}
          link="disposable-pod"
        />
        <ListProduct heading="pod mod" data={podmod.product} link="pod-mod" />

        <ListProduct
          heading="box tank"
          data={boxtank.product}
          link="box-tank"
        />

        <ListProduct
          heading="phụ kiện"
          data={phukien.product}
          link="phu-kien"
        />
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const resFreebase = await fetch(
    "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=freebase"
  );
  const freebase = await resFreebase.json();

  const resSaltnic = await fetch(
    "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=saltnic"
  );
  const saltnic = await resSaltnic.json();

  const resPodmod = await fetch(
    "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=pod-mod"
  );
  const podmod = await resPodmod.json();

  const resBoxTank = await fetch(
    "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=box-tank"
  );
  const boxtank = await resBoxTank.json();

  const resPhuKien = await fetch(
    "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=phu-kien"
  );
  const phukien = await resPhuKien.json();

  const resDisposablePod = await fetch(
    "https://vape-store.herokuapp.com/api/product?page=1&&limit=4&&cat=disposable-pod"
  );
  const disposablepod = await resDisposablePod.json();

  const resBanner = await fetch("https://vape-store.herokuapp.com/api/banner", {
    method: "GET",
  });
  const banner = await resBanner.json();

  return {
    props: {
      freebase,
      saltnic,
      podmod,
      boxtank,
      phukien,
      disposablepod,
      banner,
    },
  };
}
