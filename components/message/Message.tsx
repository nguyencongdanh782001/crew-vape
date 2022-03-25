import React from "react";
import { BsMessenger } from "react-icons/bs";
const Message = () => {
  return (
    <div className="fixed bottom-10 right-5 sm:bottom-8 sm:right-8 flex items-center justify-center">
      <a
        href="https://www.facebook.com/messages/t/101771795195686"
        target="_blank"
        rel="noreferrer"
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
