import React from "react";
import ScoutBoy from "../../assets/components-asset/scout-boy";
import AboutHeader from "./about-header";
export default function AboutFirst({ text }) {
  return (
    <div>
      <AboutHeader>What we are</AboutHeader>
      <div className="flex">
        <div className="w-1/2">
          <ScoutBoy />
        </div>
        <div className="w-1/2">
          <div className="flex justify-end">
            <p className="text-right text-white font-raleway pt-8 text-[1.8rem] w-[90%] space-y-5">
              {text.text1}
            </p>
          </div>
          <div className=" flex justify-end">
            <p className="text-right text-white font-raleway pt-8 text-[1.8rem] w-3/4">
              {text.text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
