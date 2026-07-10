import React from 'react';
import Compare from './compare/Compare';
import floor_heating_diagram from './../../../assets/floor_heating_diagram.webp';
import './styles.css';


const Benefits = ({ isMobile }) => {

  return (
    <div className='benefits_showcase_container'>
      <h2 className='benefits_showcase_banner banner'>
        What Are The Benefits of Floor Heating?
      </h2>
      <h3 className='subheader benefits_subheader'>
        Compared with Forced Air Systems
      </h3>
      <img
        src={floor_heating_diagram} alt='floor_heating_diagram'
        id='floor_heating_diagram'
      />
      <div className='compare_container'>
        <Compare />
      </div>
    </div>
  );
};

export default Benefits;
