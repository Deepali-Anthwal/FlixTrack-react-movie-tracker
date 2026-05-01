import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { WatchlistProvider } from './context/watchlistcontext';
import Navbar from './components/navbar';
import ProtectedRoute from './components/protectedroute'; 

import Home from './pages/home';
import Search from './pages/search';
import MovieDetails from './pages/moviedetails';
import Watchlist from './pages/watchlist';
import Login from './pages/login'; 

function App() {
  return (
    <WatchlistProvider>
      <Router>
        <Toaster position="top-center" />
        
        <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
          <Navbar />
          
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              
              <Route path="/login" element={<Login />} />
              
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/tv-shows" element={<Home type="tv" />} />

              <Route path="/movie/:id" element={<MovieDetails type="movie" />} />
              <Route path="/tv-show/:id" element={<MovieDetails type="tv" />} />
              
              <Route 
                path="/watchlist" 
                element={
                  <ProtectedRoute>
                    <Watchlist />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>

          <footer className="p-6 text-center border-t border-gray-800 text-gray-500 text-sm">
            © 2026 FlixTrack Movie Tracker by Deepali Anthwal
          </footer>
        </div>
      </Router>
    </WatchlistProvider>
  );
}

export default App;