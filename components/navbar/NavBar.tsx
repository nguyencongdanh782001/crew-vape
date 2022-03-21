import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./components/NavBarMobile";
import NavBarPc from "./components/NavBarPc";

interface PropsType {
  scrollNavBar: string;
}

const NavBar = ({ scrollNavBar }: PropsType) => {
  const [hideHeader, setHideHeader] = useState(
    "block bg-white shadow-md shadow-gray-400"
  );
  const [isMobile, setIsMobile] = useState(false);
  const prevScroll = useRef<number>(0);

  const moblie = useMediaQuery({ maxWidth: "1279px" });
  useEffect(() => {
    setIsMobile(moblie);
  }, [moblie]);

  useEffect(() => {
    const handleScroll = () => {
      if (prevScroll.current === 0 || window.scrollY === 0) {
        setHideHeader("block bg-white shadow-md shadow-gray-400");
      } else if (prevScroll.current < window.scrollY) {
        setHideHeader("animate-hideHeader");
      } else {
        setHideHeader(
          "block animate-showHeader bg-white shadow-md shadow-gray-400"
        );
      }
      prevScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrollNavBar === "scroll"
          ? hideHeader
          : "block bg-white shadow-md shadow-gray-400"
      } w-full text-black fixed lg:sticky top-0 right-0 z-20`}
    >
      {isMobile ? <NavBarMobile /> : <NavBarPc />}
    </header>
  );
};

export default NavBar;
