import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import React from "react";
import Card from "../utils/Card";
import DropDown from "../utils/DropDown";

export default function HorizontalCards() {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [allTreadingData, setAllTreadingData] = useState(null);

  const handleSelection = (value) => {
    setSelectedTab(value);
  };

  const getTrendingData = async () => {
    try {
      let { data } = await axios("/trending/all/week");
      data = data.results;
      if (selectedTab === "ALL") {
        setAllTreadingData(data);
      } else if (selectedTab === "Movies") {
        data = data.filter((ele) => ele.media_type === "movie");
        setAllTreadingData(data);
      } else if (selectedTab === "TV Shows") {
        data = data.filter((ele) => ele.media_type === "tv");
        setAllTreadingData(data);
      }
    } catch (error) {
      console.log("Error: Unable to fetch all data");
    }
  };

  useEffect(() => {
    getTrendingData();
  }, [selectedTab]);

  return (
    <div className="bg-[#0a0a0a] py-8 px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl font-semibold">Trending</h1>
        <DropDown
          title={"Filter"}
          options={["TV Shows", "Movies", "ALL"]}
          handleSelection={handleSelection}
        />
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 pl-1 -ml-1 scrollbar-thin scrollbar-thumb-[#FF3D48] scrollbar-track-[#121212]">
          {allTreadingData &&
            allTreadingData.map((ele, idx) => (
              <Card key={idx} data={ele} />
            ))}
        </div>
      </div>
    </div>
  );
}
