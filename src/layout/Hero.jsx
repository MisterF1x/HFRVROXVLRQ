import { Button } from '@components/Button';
import { contactInfo } from '../data/constant';
import VideoWindmill from '../assets/video/windmill.mp4';
import VideoWindmillSmall from '../assets/video/windmill_sm.mp4';
import useResize from '../hooks/useResize';
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const currentYear = new Date().getFullYear();
  const width = useResize();
  const videoSrc = useRef(VideoWindmillSmall);

  useEffect(() => {
    videoSrc.current = width > 768 ? VideoWindmill : VideoWindmillSmall;
  }, [width]);

  return (
    <section className="hero section">
      <div className="container hero__container">
        <div className="hero__heading">
          <div className="hero__title-wrapper">
            <h1 className="hero__title">RENEWABLE ENERGY For any task</h1>
          </div>
          <div className="hero__content">
            <p>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <Button outline href="#cases">
              Learn more
            </Button>
          </div>
        </div>
        <div className="hero__footer">
          <div className="hero__footer-right">
            <p>{contactInfo.address}</p>
          </div>
          <div className="hero__footer-left">
            <p>{contactInfo.email}</p>
            <p>
              {contactInfo.name} © {currentYear}
            </p>
          </div>
        </div>
        <div className="hero__video">
          <video autoPlay muted loop playsInline>
            <source src={videoSrc?.current} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
