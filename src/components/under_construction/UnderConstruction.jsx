import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import underConstruction from './../../assets/under_construction.webp';
import './styles.css';

const UnderConstruction = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div id='under_construction_container'>
      <h1 className='banner'>Under Construction</h1>
      <div id='icon_container'>
        <img src={underConstruction} id='under_construction_icon' alt='under_construction' />
      </div>
      <div>Sorry! This portion of our site is currently under construction.</div>
      <div>Please check back in 2 weeks!</div>
      <div>Redirecting in 3 seconds...</div>
    </div>
  );
};

export default UnderConstruction;