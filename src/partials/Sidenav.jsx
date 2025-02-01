import React from "react";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <>
      <h1 className="text-2xl font-bold p-5 flex items-center">
        <i className="ri-tv-fill text-[#FF3D48] mr-2"></i>
        <span className="text-white">MovieHub</span>
      </h1>
      
      <nav className="flex flex-col gap-4 text-lg px-5">
        <h1 className="text-gray-400 font-medium text-sm uppercase tracking-wider">New Feed</h1>
        <Link
          to={"/trending"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to={"/popular"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-bar-chart-fill"></i> Popular
        </Link>
        <Link
          to={"/movies"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to={"/tvshows"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-tv-2-fill"></i> TV Shows
        </Link>
        <Link
          to={"/people"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-user-fill"></i> People
        </Link>
        <hr className="border-gray-800 my-3" />
      </nav>
  
      <nav className="px-5">
        <h1 className="text-gray-400 font-medium text-sm uppercase tracking-wider mb-4">Website Information</h1>
        <Link
          to={"/about"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-information-fill"></i> About
        </Link>
        <Link
          to={"/contact"}
          className="flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-[#FF3D48] p-2 rounded-lg transition-colors"
        >
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </>
  );
}
