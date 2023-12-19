import { animateAboutSection, createScrollTrigger } from '../libs/gsap';
import { useLayoutEffect } from 'react';
import { AboutCard } from '../components/AboutCard';
import dataJson from '../data/pageData.json';
import mdImg from '../assets/images/md/webp/work1.webp';
import mdImgx2 from '../assets/images/md/webp/work1@2.webp';
import mdWImg from '../assets/images/md/webp/work2.webp';
import mdWImgx2 from '../assets/images/md/webp/work2@2.webp';
import lgImg from '../assets/images/lg/webp/work1.webp';
import lgImgx2 from '../assets/images/lg/webp/work1@2.webp';
import lgWImg from '../assets/images/lg/webp/work2.webp';
import lgWImgx2 from '../assets/images/lg/webp/work2@2.webp';

export const About = ({ id }) => {
  useLayoutEffect(() => {
    const aboutAnimation = animateAboutSection();
    createScrollTrigger('#about', aboutAnimation);
    return () => {
      aboutAnimation.kill();
    };
  }, []);
  return (
    <section id={id} className="about section">
      <div className="container">
        <div className="about__heading section__title">
          <h2 className="about__title">{dataJson?.about?.title}</h2>
          <p className="about__paragraph">{dataJson?.about?.content}</p>
        </div>
        <ul className="card-list">
          <AboutCard
            icon={dataJson?.about?.cards[0].icon}
            text={dataJson?.about?.cards[0].content}
            title={dataJson?.about?.cards[0].title}
          />
          <AboutCard
            icon={dataJson?.about?.cards[1].icon}
            text={dataJson?.about?.cards[1].content}
            title={dataJson?.about?.cards[1].title}
          />
          <li className="card-list__item">
            <picture>
              <source
                srcSet={`${lgImg} 1x, ${lgImgx2} 2x`}
                media="(min-width: 1280px)"
              />
              <img
                loading="lazy"
                srcSet={`${mdImg} 1x, ${mdImgx2} 2x`}
                src={mdImg}
                alt="worker ecosolution"
                width="342"
              />
            </picture>
          </li>
          <li className="card-list__item">
            <picture>
              <source
                srcSet={`${lgWImg} 1x, ${lgWImgx2} 2x`}
                media="(min-width: 1280px)"
              />
              <img
                loading="lazy"
                srcSet={`${mdWImg} 1x, ${mdWImgx2} 2x`}
                src={mdImg}
                alt="install solar panel"
                width="342"
              />
            </picture>
          </li>
          <AboutCard
            icon={dataJson?.about?.cards[2].icon}
            text={dataJson?.about?.cards[2].content}
            title={dataJson?.about?.cards[2].title}
          />
          <AboutCard
            icon={dataJson?.about?.cards[3].icon}
            text={dataJson?.about?.cards[3].content}
            title={dataJson?.about?.cards[3].title}
          />
        </ul>
      </div>
    </section>
  );
};
