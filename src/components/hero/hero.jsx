import React from "react";
import { ReactComponent as SnapscoutBig } from "../../assets/big-logo.svg";

import ScoutGirl from "../../assets/components-asset/scout-girl";
export default function Hero() {
  return (
    <div className="flex mt-[-2rem]  items-center" id="hero">
      <div>
        <div className="flex items-center">
          <SnapscoutBig className="w-[23rem] h-[18rem] " />
        </div>

        <button className="px-8 py-2 border-[.1rem] rounded-full font-raleway tracking-[.2rem] text-[#CED9E0] text-[1.4rem]">
          SIGN UP
        </button>
      </div>
      <div className="flex  justify-end">
        <ScoutGirl />
      </div>
    </div>
  );
}
