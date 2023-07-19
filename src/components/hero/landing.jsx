import React from "react";
import TopBar from "../navs/topbar";
import Clients from "./clients";
import About from "./about";
import Help from "./help";
import Features from "./features";
import { useEffect } from "react";
import LandingContainer from "./landing-container";
import Hero from "./hero";
export default function Landing() {
  useEffect(() => {
    console.log("This is inside the useEffect of Landing");
  });

  console.log("This is in the landing page outside the useEffect");
  return (
    <LandingContainer>
      <TopBar />
      <Hero />
      <About />
      <Features />
    </LandingContainer>
  );
}
