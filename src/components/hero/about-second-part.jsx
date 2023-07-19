import React from "react";
import Moto from "./moto";
import AboutHeader from "./about-header";
import Members from "./members";
export default function AboutSecond() {
  return (
    <div>
      <Moto />
      <AboutHeader>Who we are</AboutHeader>
      <Members />
    </div>
  );
}
