import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../../../shared/Loading/Loading';
import useAutoplay from './CarouselAutoplay';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButtons';
import { DotButton, useDotButton } from './CarouselDotButton';
import './styles.css';

const Carousel = ({ options, delayTime, slides, isMobile }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [Autoplay({ playOnInit: true, delay: delayTime })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const { onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__container">
                  {
                    // mobile
                    isMobile ?
                      (
                        <>
                          <div className='slide_image_container'>
                            <img src={slide.src} key={'image_' + index + 1} />
                          </div>
                          <div className='slide_info_container_bottom'>
                            <div>{slide.text}</div>
                          </div>
                        </>
                      )
                      :
                      // desktop
                      (
                        index % 2 === 0 ?
                          <>
                            <div className='slide_info_container_left'>
                              <div>{slide.text}</div>
                            </div>
                            <div className='slide_image_container'>
                              <img src={slide.src} key={'image_' + index + 1} />
                            </div>
                          </>
                          :
                          <>
                            <div className='slide_image_container'>
                              <img src={slide.src} key={'image_' + index + 1} />
                            </div>
                            <div className='slide_info_container_right'>
                              <div>{slide.text}</div>
                            </div>
                          </>
                      )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={() => onAutoplayButtonClick(onPrevButtonClick)} disabled={prevBtnDisabled} />
          <NextButton onClick={() => onAutoplayButtonClick(onNextButtonClick)} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {
            scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onAutoplayButtonClick(onDotButtonClick(index))}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Carousel;
