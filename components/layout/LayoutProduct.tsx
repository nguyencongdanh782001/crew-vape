import React from "react";
import Footer from "../footer/Footer";
import Message from "../message/Message";
import NavBar from "../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import Warning from "../warning/Warning";

const LayoutProduct = ({ children, scrollNavBar }: any) => {
  return (
    <div className="flex justify-end w-full items-center bg-gray-200">
      <Warning />
      <Message />
      <div className="flex justify-center w-screen xl:w-[90%]">
        <div className="h-screen grow-[0] hidden xl:block sticky top-0 z-30">
          <SideBar />
        </div>
        <div className="grow-[2] min-h-screen flex flex-col">
          <NavBar scrollNavBar={scrollNavBar} />
          <main className="mb-10 pt-[50px] sm:pt-[70px] lg:pt-0">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayoutProduct;
