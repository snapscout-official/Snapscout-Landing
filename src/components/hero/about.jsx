import React from "react";
import AboutFirst from "./about-first-part";
import AboutSecond from "./about-second-part";
export default function About() {
  const snapscoutText = {
    text1:
      "SnapScout is not just about speed and efficiency; it is about redefining procurement. Our platform leverages intelligent algorithms  and is crafted to be intuitive and accesible to instantly scout, compare, and source products from a vast network across the nation",
    text2:
      "Experience real-time tracking, seamless communication, and easy reporting, all housed within a secure platform like SnapScout.",
  };
  return (
    <div className="w-full mt-[8rem]" id="about">
      <AboutFirst text={snapscoutText} />
      <AboutSecond />
    </div>
  );
}
