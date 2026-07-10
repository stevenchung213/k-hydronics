import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './styles.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div id='not_found_container'>
      <h1 className='banner'>404 - Page Not Found</h1>
      <div>How did we get here?</div>
      <div>Redirecting in 3 seconds...</div>
    </div>
  );
};

export default NotFound;