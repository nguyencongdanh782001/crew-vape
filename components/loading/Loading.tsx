import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
const Loading = () => {
  NProgress.configure({ showSpinner: false });

  const handleStart = () => {
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };

  Router.events.on("routeChangeStart", handleStart);
  Router.events.on("routeChangeComplete", handleStop);
  Router.events.on("routeChangeError", handleStop);
  return <div></div>;
};

export default Loading;
