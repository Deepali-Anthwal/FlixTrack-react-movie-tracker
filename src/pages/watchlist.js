import React from 'react';
import { useWatchlist } from '../context/watchlistcontext';
import MovieCard from '../components/moviecard';

function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Watchlist</h2>
      
      {watchlist.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-400 text-xl">Your watchlist is empty.</p>
          <p className="text-sm text-gray-500 mt-2">Go to the Home page to add some movies!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;