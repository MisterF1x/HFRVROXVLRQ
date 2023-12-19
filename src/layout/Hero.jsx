import { useEffect, useRef } from 'react';
import useResize from '../hooks/useResize';
import { Button } from '@components/Button';
import dataJson from '../data/pageData.json';
import VideoWindmill from '../assets/video/windmill.mp4';
import VideoWindmillSmall from '../assets/video/windmill_sm.mp4';

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
            <h1 className="hero__title">{dataJson?.hero?.title}</h1>
          </div>
          <div className="hero__content">
            <p>{dataJson?.hero?.content}</p>
            <Button outline href="#cases">
              Learn more
            </Button>
          </div>
        </div>
        <div className="hero__footer">
          <div className="hero__footer-right">
            <p>{dataJson?.contactInfo.address}</p>
          </div>
          <div className="hero__footer-left">
            <p>{dataJson?.contactInfo.email}</p>
            <p>
              {dataJson?.contactInfo.name} © {currentYear}
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
