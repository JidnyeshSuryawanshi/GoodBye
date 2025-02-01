import React from "react";
import { Link } from "react-router-dom";

export default function Header({ wallpaper }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.9)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-end p-8 relative"
    >
      {/* Gradient Overlay for Improved Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-right">
        {" "}
        {/* Align text to the right */} 
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          {wallpaper.original_title ||
            wallpaper.title ||
            wallpaper.name ||
            wallpaper.original_name}
        </h1>
        <p className="text-white text-sm sm:text-base lg:w-1/2 mb-4 ml-auto">
          {wallpaper.overview.slice(0, 200)}...
          <Link to="#" className="text-blue-500 ml-1 hover:underline">
            more
          </Link>
        </p>
        <div className="flex items-center justify-end gap-4 text-white text-sm sm:text-base">
          <p className="flex items-center gap-2">
            <i className="ri-megaphone-fill"></i>
            {wallpaper.release_date || wallpaper.first_air_date}
          </p>
          <p className="flex items-center gap-2">
            <i className="ri-disc-fill"></i>
            {wallpaper.media_type.toUpperCase()}
          </p>
        </div>
        <Link
          to="#"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium py-2 px-4 rounded mt-6 transition-all duration-300 shadow-lg"
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}
