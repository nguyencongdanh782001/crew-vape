import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Warning from "../warning/Warning";

const Layout = ({ children, scrollNavBar }: any) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Warning />
      <NavBar scrollNavBar={scrollNavBar} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
