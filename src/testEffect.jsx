import React from "react";
import { useState, useEffect } from "react";
export default function TestEffect() {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("UseEffect fires!");
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log("Fires test component!");
  return <div>TestEffect</div>;
}
