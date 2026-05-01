import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-hot-toast'; 

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('capstone_watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('capstone_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    const isExist = watchlist.find((m) => m.id === movie.id);
    if (isExist) {
      setWatchlist(watchlist.filter((m) => m.id !== movie.id));
      toast.error(`${movie.title || movie.name} removed from watchlist`, {
        style: {
          borderRadius: '10px',
          background: '#1f2937',
          color: '#fff',
        },
      });
    } else {
      setWatchlist([...watchlist, movie]);
      toast.success(`${movie.title || movie.name} added to watchlist`, {
        style: {
          borderRadius: '10px',
          background: '#1f2937',
          color: '#fff',
        },
        iconTheme: {
          primary: '#3b82f6',
          secondary: '#fff',
        },
      });
    }
  };

  return (
    <WatchlistContext.Provider value={{ 
      watchlist, 
      toggleWatchlist, 
      isLoggedIn, 
      login, 
      logout 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);