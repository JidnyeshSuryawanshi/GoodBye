import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    data && (
      <div className="flex-none w-[280px] bg-[#121212] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
        <div className="relative h-[160px]">
          <img
            src={
              data.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                : `https://via.placeholder.com/300x169?text=No+Image`
            }
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 rounded-md text-xs text-white">
            {data.vote_average?.toFixed(1)} ★
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-white font-medium text-lg truncate">
            {data.original_title || data.title || data.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
            {data.overview}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-[#FF3D48]/10 text-[#FF3D48] rounded-full">
              {data.media_type?.toUpperCase() || 'MOVIE'}
            </span>
            <span className="text-xs text-gray-400">
              {data.release_date?.split('-')[0] || data.first_air_date?.split('-')[0]}
            </span>
          </div>
        </div>
      </div>
    )
  );
}
