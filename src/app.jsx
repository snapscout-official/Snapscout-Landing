import React from "react";
import Landing from "./components/hero/landing";
import TopBar from "./components/navs/topbar";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    console.log("This is the app part inside the useEffect");
  }),
    [];
  console.log("This is the app part outside useEffect");
  return <Landing />;
}
