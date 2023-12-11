import { Slider } from '@components/Slider';
import { useLayoutEffect, useRef, useState } from 'react';
import { ControlSliderPanel } from '@components/ControlSliderPanel';
import { animateCasesSection, createScrollTrigger } from '../libs/gsap';

export const SliderSection = ({ id }) => {
  const [realIndex, setRealIndex] = useState(0);
  const swiperRef = useRef(null);

  useLayoutEffect(() => {
    const casesAnimation = animateCasesSection();
    createScrollTrigger('#cases', casesAnimation);
    return () => {
      casesAnimation.kill();
    };
  }, []);

  return (
    <section id={id} className="slider-section section">
      <div className="container">
        <div className="slider-section__heading section__title">
          <div className="slider-section__title-wrapper">
            <h2 className="slider-section__title">
              Successful cases of our company
            </h2>
          </div>
          <ControlSliderPanel index={realIndex} swiperRef={swiperRef} />
          <div className="slider-section__line"></div>
        </div>
        <Slider onChange={setRealIndex} swiperRef={swiperRef} />
      </div>
    </section>
  );
};
