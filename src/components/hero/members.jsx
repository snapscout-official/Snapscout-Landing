import React from "react";
import Gio from "../../assets/gio.png";
import Mary from "../../assets/mary.png";
import Klinth from "../../assets/klinth.png";
import SingleMembers from "./single-members";
export default function Members() {
  const snapscoutMembers = [
    { img: Klinth, name: "Klinth Matugas", position: "snapscout coo" },
    { img: Mary, name: "Mary Soliva", position: "snapscout ceo" },
    { img: Gio, name: "Gio Gonzales", position: "snapscout cto" },
  ];
  return (
    <div className="grid grid-cols-3">
      {snapscoutMembers.map((member, key) => (
        <SingleMembers data={member} key={key} />
      ))}
    </div>
  );
}
