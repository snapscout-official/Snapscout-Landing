import React from "react";
export default function SingleMembers({ data }) {
  return (
    <div className="flex flex-col items-center">
      <img src={data.img} alt={data.name} className="h-full" />
      <div>
        <p className="font-raleway font-bold text-white text-[1.5rem] text-center">
          {data.name}
        </p>
        <p className="font-raleway font-bold text-[1rem] text-center text-[#051C28]">
          {data.position.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
