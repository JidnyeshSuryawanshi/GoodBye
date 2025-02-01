import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import HeaderSearch from "../components/HeaderSearch";
import axios from "../utils/Axios";
import Header from "../partials/Header";
import HorizontalCards from "../partials/HorizontalCards";
import Loading from "./Loder";

export default function Home() {
  document.title = "Homepage";
  const [wallpaper, setWallpaper] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomNumber = Math.floor(
        (Math.random() * data.results.length).toFixed(2)
      );
      const singleData = data.results[randomNumber];
      setWallpaper(singleData);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      {/* Sidebar - Fixed */}
      <aside className="w-[20%] fixed left-0 top-0 h-screen bg-[#121212] border-r border-gray-800/50">
        <Sidenav />
      </aside>

      {/* Main Content Area - Scrollable */}
      <main className="w-[80%] ml-[20%]">
        {/* Search Bar - Fixed at top of content */}
        <div className="sticky top-0 z-50">
          <HeaderSearch />
        </div>

        {/* Scrollable Content */}
        <div className="relative">
          {wallpaper ? (
            <>
              <Header wallpaper={wallpaper} />
              <HorizontalCards />
            </>
          ) : (
            <Loading />
          )}
        </div>
      </main>
    </div>
  );
}