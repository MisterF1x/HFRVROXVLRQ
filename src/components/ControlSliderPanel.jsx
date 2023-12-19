import { slidesInfo } from '../data/constant';
import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const ControlSliderPanel = ({ swiperRef, index }) => {
  const totalSliders =
    slidesInfo.length <= 10 ? `0${slidesInfo.length}` : slidesInfo.length;

  const realIndex = index <= 10 ? `0${index + 1}` : index + 1;

  return (
    <div className="slider-section__slider-panel">
      <p className="slider-section__total-slides">
        <span>{realIndex}</span>/{totalSliders}
      </p>
      <div className="slider-section__nav">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          type="button"
          aria-label="next slider button"
          className="slider-section__prev slider-section__btn"
        >
          <ArrowRightIcon />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          type="button"
          aria-label="prev slider button"
          className="slider-section_next slider-section__btn"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
