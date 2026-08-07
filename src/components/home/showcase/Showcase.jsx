import React from 'react';
import Carousel from './carousel/Carousel';
import panel from './../../../assets/char_panel_diagram.webp';
import panel_design from './../../../assets/char_panel_design.webp';
import panel_config from './../../../assets/char_panel_config.webp';
import panel_comp from './../../../assets/char_panel_composition.webp';
import './styles.css';

const slides = [
  {
    src: panel,
    text: `Introducing our natural carbon composite hydronic floor heating panels—engineered for exceptional thermal performance, superior energy efficiency, and long-lasting durability, directly sourced from one of South Korea's leading manufacturers.`
  },
  {
    src: panel_design,
    text: `Crafted from a high-performance natural carbon composite, these panels deliver rapid, even heat distribution with noticeably increased heat retention than competitors, leveraging cutting edge thermal technology to lower utility bills without compromising on your comfort.`
  },
  {
    src: panel_config,
    text: `Designed for long-term reliability, our panels are resilient to wear and tear, maintaining peak performance over time, while their eco-conscious construction minimizes environmental impact through low emissions, recyclability, and sustainable materials.`
  },
  {
    src: panel_comp,
    text: `At the heart of our panels lies a natural carbon composite engineered to emit far-infrared radiation which delivers a sustainable, high-performance heating solution that combines the health benefits of natural minerals with the capabilities of modern technology.`
  },
];

const Showcase = ({ isMobile }) => {

  const carouselOptions = { align: 'start', loop: true, axis: isMobile ? 'x' : 'y' };

  return (
    <div id='showcase_container'>
      <h2 id='showcase_banner' className='banner'>
        Carbon Composite Heat Panels
      </h2>
      <h3 id='showcase_subheader' className='subheader'>
        Maximum Performance | Efficiency
      </h3>
      <div id='showcase_carousel_container'>
        <Carousel
          options={carouselOptions}
          delayTime={5000}
          slides={slides}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default Showcase;
