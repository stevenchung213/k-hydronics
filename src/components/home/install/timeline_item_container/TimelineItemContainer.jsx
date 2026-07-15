import React from 'react';
import './styles.css';

const TimelineItemContainer = ({ isMobile, data }) => {
  const { img, text, even } = data;

  return (
    <div className='timeline_item_container'>
      {
        isMobile ?
          (
            <>
              <div className='timeline_photo_container'>
                <img src={img} className='timeline_photo' />
              </div>
              <div className='timeline_text_container'>
                <div className='timeline_text'>
                  {text.split('(')[0].trim() + '.'}
                </div>
              </div>
            </>
          )
          :
          (
            <div className='timeline_photo_container'>
              <img src={img} className={even ? 'timeline_photo tl_img_even' : 'timeline_photo tl_img_odd'} />
            </div>
          )
      }
    </div>
  );
};

export default TimelineItemContainer;
