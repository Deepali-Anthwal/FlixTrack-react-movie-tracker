import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWatchlist } from '../context/watchlistcontext'; 

function Login() {
  const { login } = useWatchlist(); 
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/watchlist'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">Welcome to FLIXTRACK</h2>
        <p className="text-gray-400 mb-8 text-sm">Please sign in to view your Personal Watchlist.</p>
        <button 
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;