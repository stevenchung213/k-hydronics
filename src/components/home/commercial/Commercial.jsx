import React from 'react';
import CommercialCarousel from './carousel/Carousel';
import clinic from './../../../assets/commercial/clinic_room.webp';
import hospital1 from './../../../assets/commercial/hospital1.webp';
import hospital2 from './../../../assets/commercial/hospital2.webp';
import kidsroom from './../../../assets/commercial/kidsroom.webp';
import massage_therapy from './../../../assets/commercial/massage_therapy.webp';
import playroom from './../../../assets/commercial/playroom.webp';
import spa1 from './../../../assets/commercial/spa1.webp';
import spa2 from './../../../assets/commercial/spa2.webp';
import yoga_studio from './../../../assets/commercial/yoga_studio.webp';
import './styles.css';

const slides = [
  {
    src: yoga_studio,
    text: 'Yoga Studio'
  },
  {
    src: spa1,
    text: 'Spa Room'
  },
  {
    src: spa2,
    text: 'Spa Room'
  },
  {
    src: kidsroom,
    text: `Classroom`
  },
  {
    src: massage_therapy,
    text: 'Massage Therapy Room'
  },
  {
    src: playroom,
    text: `Children's Playroom`
  },
  {
    src: clinic,
    text: 'Medical Clinic'
  },
  {
    src: hospital1,
    text: 'Hospital'
  },
  {
    src: hospital2,
    text: 'Hospital'
  },
];

const Commercial = ({ isMobile }) => {

  const carouselOptions = { align: 'start', loop: true };

  return (
    <div id='commercial_container'>
      <h2 id='commercial_banner' className='banner'>
        Commercial Applications
      </h2>
      <h3 id='commercial_subheader' className='subheader'>
        Popular in Health & Wellness Industries
      </h3>
      <div id='commercial_carousel_container'>
        <CommercialCarousel
          options={carouselOptions}
          delayTime={5000}
          isMobile={isMobile}
          slides={slides}
        />
      </div>
    </div>
  );
};

export default Commercial;
