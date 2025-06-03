"use client";

import React from "react";
import { useRouter } from "next/navigation";


const Aside = () => {
  const router = useRouter();

  const navList = [
    { id: 1, name: "Home" , redirect : "/"},
    { id: 2, name: "Playlist" , redirect : "/playlist" },
  ];
  return (
    <div className="flex flex-col    ">
      {navList.map((nav) => (
        <div key={nav.id} className="p-1 hover:bg-green-300" onClick={()=> router.push(nav.redirect)}>
          {" "}
          {nav.name}{" "}
        </div>
      ))}
    </div>
  );
};
export default Aside;
