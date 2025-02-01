import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/Axios";

export default function TopNav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const handleCrossClick = () => {
    setQuery("");
  };

  const getSearches = async () => {
    try {
      if (query.trim() === "") {
        setSearches([]);
        return;
      }
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      getSearches();
    }, 500);

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="relative w-[300px]">
      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-[#121212] text-white pl-10 pr-10 py-2 rounded-lg border border-gray-800 focus:outline-none focus:border-[#FF3D48] focus:ring-1 focus:ring-[#FF3D48] placeholder-gray-500"
          placeholder="Search movies, shows..."
          type="text"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="ri-search-line text-gray-400"></i>
        </div>
        {query && (
          <button
            onClick={handleCrossClick}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <i className="ri-close-line"></i>
          </button>
        )}
      </div>

      {query.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-[#121212] rounded-lg border border-gray-800 shadow-lg max-h-[60vh] overflow-y-auto">
          {searches.length > 0 ? (
            searches.map((item, idx) => (
              <Link
                // to={`/details/${item.id}`}
                key={idx}
                className="flex items-center gap-3 p-3 hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-16 relative rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      item.backdrop_path || item.profile_path || item.poster_path
                        ? `https://image.tmdb.org/t/p/original/${
                            item.backdrop_path ||
                            item.profile_path ||
                            item.poster_path
                          }`
                        : `https://via.placeholder.com/48x64?text=No+Image`
                    }
                    alt={item.title || item.name}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium truncate">
                    {item.original_title || item.title || item.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-1.5 py-0.5 bg-[#FF3D48]/10 text-[#FF3D48] rounded-md">
                      {item.media_type?.toUpperCase()}
                    </span>
                    {item.vote_average && (
                      <span className="text-xs text-gray-400">
                        {item.vote_average.toFixed(1)} ★
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-gray-400 p-4 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
