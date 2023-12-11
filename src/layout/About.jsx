import MaximizeCircleIcon from '../assets/icons/maximize-circle.svg?react';
import GlobalEditIcon from '../assets/icons/global-edit.svg?react';
import CpuChargeIcon from '../assets/icons/cpu-charge.svg?react';
import RankingIcon from '../assets/icons/ranking.svg?react';
import mdImg from '../assets/images/md/webp/work1.webp';
import mdImgx2 from '../assets/images/md/webp/work1@2.webp';
import mdWImg from '../assets/images/md/webp/work2.webp';
import mdWImgx2 from '../assets/images/md/webp/work2@2.webp';
import lgImg from '../assets/images/lg/webp/work1.webp';
import lgImgx2 from '../assets/images/lg/webp/work1@2.webp';
import lgWImg from '../assets/images/lg/webp/work2.webp';
import lgWImgx2 from '../assets/images/lg/webp/work2@2.webp';
import { contactInfo } from '../data/constant';
import { AboutCard } from '@components/AboutCard';
import { useLayoutEffect } from 'react';
import { animateAboutSection, createScrollTrigger } from '../libs/gsap';

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
          <h2 className="about__title">Main values of our company</h2>
          <p className="about__paragraph">
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world`s energy needs.
          </p>
          <div className="about__heading-line"></div>
        </div>
        <ul className="card-list">
          <AboutCard
            icon={<MaximizeCircleIcon />}
            text="to the world, people, new ideas and projects"
            title="Openness"
          />
          <AboutCard
            icon={<GlobalEditIcon />}
            text="we are aware that the results of our work have an impact on our
              lives and the lives of future generations"
            title="Responsibility"
          />
          <li className="card-list__item">
            <picture>
              <source
                srcSet={`${lgImg} 1x, ${lgImgx2} 2x`}
                media="(min-width: 1280px)"
              />
              <img
                srcSet={`${mdImg} 1x, ${mdImgx2} 2x`}
                src={mdImg}
                alt={contactInfo.name}
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
                srcSet={`${mdWImg} 1x, ${mdWImgx2} 2x`}
                src={mdImg}
                alt={contactInfo.name}
                width="342"
              />
            </picture>
          </li>
          <AboutCard
            icon={<CpuChargeIcon />}
            text="we use the latest technology to implement non-standard solutions"
            title="Innovation"
          />
          <AboutCard
            icon={<RankingIcon />}
            text="we do not strive to be the first among others, but we want to be
              the best in our business"
            title="Quality"
          />
        </ul>
      </div>
    </section>
  );
};
