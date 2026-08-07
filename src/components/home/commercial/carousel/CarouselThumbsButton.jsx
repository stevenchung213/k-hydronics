import React from 'react';

export const Thumb = (props) => {
  const { selected, index, onClick, imgSrc, text } = props;

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {/* THUMBNAIL HERE */}
        <img className='thumbnail' src={imgSrc} alt={text + ' photo'} />
      </button>
    </div>
  );
};
