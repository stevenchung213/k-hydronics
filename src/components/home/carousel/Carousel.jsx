import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from './../../shared/Loading/Loading';
import useAutoplay from './CarouselAutoplay';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButtons';
import { DotButton, useDotButton } from './CarouselDotButton';
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

const Carousel = ({ options, delayTime, isMobile }) => {
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
