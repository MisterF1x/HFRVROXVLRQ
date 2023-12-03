import { Button } from '@components/Button';
import { contactInfo } from '../data/constant';
import smImg from '../assets/images/sm/webp/hero.webp';
import smImgx2 from '../assets/images/sm/webp/hero@2.webp';
import mdImg from '../assets/images/md/webp/hero.webp';
import mdImgx2 from '../assets/images/md/webp/hero@2.webp';
import lgImg from '../assets/images/lg/webp/hero.webp';
import lgImgx2 from '../assets/images/lg/webp/hero@2.webp';

export const Hero = () => {
  const currentYear = new Date().getFullYear();
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
        <picture>
          <source
            srcSet={`${lgImg} 1x, ${lgImgx2} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${mdImg} 1x, ${mdImgx2} 2x`}
            media="(min-width: 768px)"
          />
          <img
            className="hero__img"
            srcSet={`${smImg} 1x, ${smImgx2} 2x`}
            src={smImg}
            alt={contactInfo.name}
            width="480"
          />
        </picture>
      </div>
    </section>
  );
};
