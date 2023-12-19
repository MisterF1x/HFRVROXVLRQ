import { animateContactSection, createScrollTrigger } from '../libs/gsap';
import { useLayoutEffect } from 'react';
import { ConactForm } from '@components/ContactForm';
import { ContactInformation } from '@components/ContactInformation';
import dataJson from '../data/pageData.json';

export const ContactSection = ({ id }) => {
  useLayoutEffect(() => {
    const contactAnimation = animateContactSection();
    createScrollTrigger('#contact-us', contactAnimation);
    return () => {
      contactAnimation.kill();
    };
  }, []);

  return (
    <section id={id} className="section section-contact">
      <div className="container">
        <h2 className="section-contact__title section__title">
          {dataJson?.contact?.title}
        </h2>
        <div className="section-contact__content">
          <div className="section-contact__contact-info">
            <ContactInformation />
          </div>
          <div className="section-contact__form">
            <ConactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
