import React from 'react';
import { Navigate } from 'react-router-dom';
import { useWatchlist } from '../context/watchlistcontext'; 

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useWatchlist(); 

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;