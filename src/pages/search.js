import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/moviecard';
const API_KEY = process.env.REACT_APP_TMDB_KEY;

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
        );
        
        const validResults = response.data.results.filter(
          item => item.media_type === 'movie' || item.media_type === 'tv'
        );
        
        setResults(validResults);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch search results.');
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]); 

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
        Results for: <span className="text-blue-500">"{query}"</span>
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {results.length > 0 ? (
          results.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full py-10">No movies or tv shows found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;