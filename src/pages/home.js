import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/moviecard';
const API_KEY = process.env.REACT_APP_TMDB_KEY; 

function Home({ type = 'all' }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        
        const endpoint = type === 'all' ? 'trending/all/day' : `trending/${type}/day`;
        
        const response = await axios.get(
          `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch content. Check your connection.');
        setLoading(false);
      }
    };

    getTrending();
  }, [type]); 

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative bg-black h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
        <div className="z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Welcome to <span className="text-blue-500">FLIXTRACK</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover millions of movies and TV shows. Track your favorites in one place.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 border-l-4 border-blue-500 pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-widest">
            {type === 'movie' ? 'Trending Movies' : type === 'tv' ? 'Trending TV Shows' : 'Trending Now'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map(item => (
            <MovieCard 
              key={item.id} 
              item={item} 
              mediaType={item.media_type || (type !== 'all' ? type : null)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;