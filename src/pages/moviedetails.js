import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useWatchlist } from '../context/watchlistcontext';
const API_KEY = process.env.REACT_APP_TMDB_KEY;

function MovieDetails({ type }) {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const { watchlist, toggleWatchlist } = useWatchlist();
  
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`);
        setItem(res.data);
      } catch (err) {
        console.error(`Error fetching ${type} details`);
      }
    };
    fetchDetails();
  }, [id, type]); 

  if (!item) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    </div>
  );

  const isInWatchlist = watchlist.find((m) => m.id === item.id);

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen bg-gray-900 text-white">
      <Link to="/" className="text-blue-500 hover:text-blue-400 mb-6 inline-block transition-colors">
        ← Back to Browse
      </Link>
      
      <div className="flex flex-col md:flex-row gap-10 mt-4">
        <img 
          src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://via.placeholder.com/500x750'} 
          alt={item.title || item.name} 
          className="w-full md:w-96 rounded-xl shadow-2xl border border-gray-800"
        />
        
        <div className="flex-1">
          <h1 className="text-5xl font-black tracking-tight">{item.title || item.name}</h1>
          
          {item.tagline && <p className="text-blue-400 mt-2 italic text-lg">{item.tagline}</p>}
          
          <div className="mt-6 flex flex-wrap gap-3">
            {item.genres?.map(genre => (
              <span key={genre.id} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-300 leading-relaxed text-lg max-w-3xl">{item.overview}</p>
          
          <div className="mt-8 flex flex-wrap gap-6 items-center">
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-bold tracking-widest">Release Date</span>
              <span className="text-xl font-semibold">{item.release_date || item.first_air_date}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs uppercase font-bold tracking-widest">User Rating</span>
              <span className="text-xl font-semibold text-yellow-400">⭐ {item.vote_average?.toFixed(1)}</span>
            </div>
          </div>

          <button 
            onClick={() => toggleWatchlist(item)}
            className={`mt-10 px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg ${
              isInWatchlist 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;