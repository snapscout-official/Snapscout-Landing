import React from "react";

export default function AboutHeader({ children }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-raleway tracking-[.2rem] text-[#CED9E0]">ABOUT</p>
      <p className="font-raleway tracking-[.1rem] text-white text-[3rem]">
        {children}
      </p>
    </div>
  );
}
