import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = React.memo(({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  const isTv = item.media_type === 'tv' || !!item.first_air_date;
  const targetRoute = isTv ? `/tv-show/${item.id}` : `/movie/${item.id}`;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <Link to={targetRoute} className="block">
        
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={item.poster_path ? imageUrl : 'https://via.placeholder.com/500x750?text=No+Image'} 
            alt={item.title || item.name} 
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
          {item.vote_average > 0 && (
            <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
              ⭐ {item.vote_average.toFixed(1)}
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="text-white text-sm font-bold truncate" title={item.title || item.name}>
            {item.title || item.name}
          </h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-400 text-xs">
              {item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0] || 'N/A'}
            </p>
            <span className="text-[10px] text-blue-400 uppercase font-bold tracking-tighter">
              {isTv ? 'TV Show' : 'Movie'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
});

export default MovieCard;