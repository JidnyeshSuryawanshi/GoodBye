import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/Axios";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const handleCrossClick = () => {
    setQuery("");
  };

  const getSearches = async () => {
    try {
      if (query.trim() === "") return;
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full bg-[#121212] shadow-md">
      <div className="flex items-center h-16 px-6">
        <div className="relative flex-1 max-w-2xl">
          <i className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ri-search-line"></i>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#1a1a1a] text-white pl-10 pr-10 py-2 rounded-lg border border-gray-800 focus:outline-none focus:border-[#FF3D48] focus:ring-1 focus:ring-[#FF3D48]"
            placeholder="Search movies, shows..."
            type="text"
          />
          {query && (
            <button
              onClick={handleCrossClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <i className="ri-close-line"></i>
            </button>
          )}

          {/* Search Results Dropdown */}
          {query.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#121212] rounded-lg border border-gray-800 shadow-xl max-h-[70vh] overflow-y-auto">
              {searches.length > 0 ? (
                searches.map((item, idx) => (
                  <Link
                    // to={`/details/${item.id}`}
                    key={idx}
                    className="flex items-center gap-4 p-3 hover:bg-[#1a1a1a] transition-colors"
                  >
                    <img
                      className="h-16 w-12 object-cover rounded"
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
                    <div>
                      <h4 className="text-white font-medium">
                        {item.original_title || item.title || item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-1.5 py-0.5 bg-[#FF3D48]/10 text-[#FF3D48] rounded">
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
                <div className="text-gray-300 p-4 text-center">
                  No results found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 