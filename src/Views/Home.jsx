import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home</p>
      <a href="#" onClick={() => navigate('/login')} className="text-blue-400 hover:text-blue-600">
        LogOut
      </a>
    </div>
  );
};

export default Home;
