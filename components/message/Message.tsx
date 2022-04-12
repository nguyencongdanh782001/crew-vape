import React from "react";
import { BsMessenger } from "react-icons/bs";
const Message = () => {
  return (
    <div className="fixed z-50 bottom-10 right-5 sm:bottom-8 sm:right-8 flex items-center justify-center">
      <a
        href="https://m.me/101771795195686"
        target="_blank"
        rel="noreferrer"
        aria-label="Message"
        className="p-3 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-gray-500"
      >
        <i>
          <BsMessenger className="text-2xl sm:text-3xl text-white" />
        </i>
      </a>
    </div>
  );
};

export default Message;
