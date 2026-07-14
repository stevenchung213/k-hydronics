import React from 'react';
import { NavLink } from 'react-router';
import './styles.css';
import quote1 from './../../../assets/quote_image.webp';

const Consultation = () => {

  return (
    <div id='consultation_container'>
      <h2 id='consultation_banner' className='banner'>
        Interested?
      </h2>
      <div className='consultation_section'>
        <img src={quote1} alt='consultation' className='consultation_image' />
        <div className='consultation_info'>
          Give us a call at (213) 649-6071 and we can provide an estimate over the phone
          <br />
          or
          <br />
          click the button below if you prefer electronic communication!
        </div>
      </div>
      <NavLink
        to='contact'
      >
        <button
          id='consultation_button'
          className='navbar_contact_button'
          aria-label='Contact Form Link Button'
        >
          I'm Interested!
        </button>
      </NavLink>
    </div>
  );
};

export default Consultation;
