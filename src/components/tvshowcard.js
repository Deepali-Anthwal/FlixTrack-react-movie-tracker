import React from 'react';
import { Link } from 'react-router-dom';

const TvShowCard = React.memo(({ item }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Link to={`/tv-show/${item.id}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={item.poster_path ? imageUrl : 'https://via.placeholder.com/500x750?text=No+Image'} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
            ⭐ {item.vote_average?.toFixed(1)}
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-white text-sm font-bold truncate">{item.name}</h3>
          <p className="text-gray-400 text-xs">{item.first_air_date?.split('-')[0] || 'N/A'}</p>
        </div>
      </Link>
    </div>
  );
});

export default TvShowCard;