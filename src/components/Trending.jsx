import React, { useEffect } from "react";
import TopNav from "../partials/TopNav";
import DropDown from "../utils/DropDown";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../utils/Axios";
import Card from "../utils/Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Trending() {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trendingData, setTrendingData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const navigateTo = useNavigate();

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const getTrendingData = async () => {
    let { data } = await axios(
      `/trending/${category}/${duration}?page=${page}`
    );
    data = data.results || [];

    if (data.length > 0) {
      setTrendingData((previous) => [...previous, ...data]);
      setPage((previous) => previous + 1);
    } else {
      setHasMore(false);
    }
  };

  const refreshHandler = () => {
    getTrendingData();
    if (trendingData.length !== 0) {
      setTrendingData([]); 
      setPage(1); 
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [duration, category]);


  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl text-white font-semibold flex items-center gap-3">
            <Link
              onClick={() => navigateTo(-1)}
              className="hover:text-[#FF3D48] transition-colors"
            >
              <i className="ri-arrow-left-line"></i>
            </Link>
            Trending
          </h1>

          <div className="flex items-center gap-4">
            <TopNav />
            <DropDown
              title={"Category"}
              options={["tv", "movie", "all"]}
              handleSelection={handleCategory}
            />
            <DropDown
              title={"Duration"}
              options={["day", "week"]}
              handleSelection={handleDuration}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={trendingData.length}
          hasMore={hasMore}
          next={getTrendingData}
          loader={
            <div className="text-center py-4">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#FF3D48] border-r-transparent"></div>
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingData.map((ele, idx) => (
              <Card key={idx} data={ele} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
