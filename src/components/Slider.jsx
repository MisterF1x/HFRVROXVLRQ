import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import useResize from '../hooks/useResize';
import { SliderCard } from './SliderCard';
import { slidesInfo } from '../data/constant';
import 'swiper/css';
import 'swiper/css/autoplay';

export const Slider = ({ swiperRef, onChange }) => {
  const width = useResize();
  const isMobile = width <= 768;
  const spaceBetween = isMobile ? 0 : width > 1280 ? 48 : 24;

  const swiperParams = {
    spaceBetween,
    slidesPerView: isMobile ? 1 : 2,
    modules: [Autoplay, A11y],
    loop: true,
    autoplay: { delay: 5000 },
    onBeforeInit: swiper => {
      swiperRef.current = swiper;
    },
    onSlideChange: swiper => {
      onChange(swiper.realIndex);
    },
  };

  return (
    <>
      <Swiper {...swiperParams}>
        {slidesInfo.map(sliderInfo => (
          <SwiperSlide key={sliderInfo.id}>
            <SliderCard slidesInfo={sliderInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
