import React from 'react';
import Carousel from './../../home/carousel/Carousel';
import './styles.css';



const Showcase = ({ isMobile }) => {

  const carouselOptions = { align: 'start', loop: true, axis: 'y' };

  return (
    <div id='showcase_container'>
      <h2 id='showcase_banner' className='banner'>
        Carbon Composite Heat Panels
      </h2>
      <h3 id='showcase_subheader' className='subheader'>
        Maximum Performance | Efficiency
      </h3>
      <div id='showcase_carousel_container'>
        <Carousel options={carouselOptions} delayTime={5000} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default Showcase;
