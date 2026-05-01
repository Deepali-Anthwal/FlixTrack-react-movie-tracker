import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; 

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`); 
      setSearchTerm('');
    } else {
      toast('Please Enter a Search Query', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#1f2937',
          color: '#fff',
        },
      });
    }
  };

  return (
    <nav className="bg-black/95 sticky top-0 z-50 border-b border-gray-800 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <Link to="/" className="text-2xl font-black tracking-tighter text-white hover:opacity-80 transition">
          FLIX<span className="text-blue-500">TRACK</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/movies" className="hover:text-blue-500 transition-colors">Movies</Link>
          <Link to="/tv-shows" className="hover:text-blue-500 transition-colors">TV Shows</Link>
          <Link to="/watchlist" className="hover:text-blue-500 transition-colors">Watchlist</Link>
        </div>

        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-64">
          <input 
            type="text"
            placeholder="Search movies & tv shows..."
            className="w-full bg-gray-900 text-white text-xs p-3 pl-4 rounded-full border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button type="submit" className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;