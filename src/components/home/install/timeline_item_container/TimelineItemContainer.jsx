import React from 'react';
import './styles.css';

const TimelineItemContainer = ({ isMobile, data }) => {
  const { img, text } = data;

  return (
    <div className='timeline_item_container'>
      <div className='timeline_photo_container'>
        <img src={img} className='timeline_photo' />
      </div>
    </div>
  );
};

export default TimelineItemContainer;
