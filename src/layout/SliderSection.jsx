import { animateCasesSection, createScrollTrigger } from '../libs/gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import { Slider } from '@components/Slider';
import { ControlSliderPanel } from '@components/ControlSliderPanel';
import dataJson from '../data/pageData.json';

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
            <h2 className="slider-section__title">{dataJson?.cases?.title}</h2>
          </div>
          <ControlSliderPanel index={realIndex} swiperRef={swiperRef} />
        </div>
        <Slider onChange={setRealIndex} swiperRef={swiperRef} />
      </div>
    </section>
  );
};
