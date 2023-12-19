import { animateFaqSection, createScrollTrigger } from '../libs/gsap';
import { useLayoutEffect } from 'react';
import { Button } from '@components/Button';
import { AccordionContainer } from '@components/AccordionContainer';
import dataJson from '../data/pageData.json';

export const FaqSection = ({ id }) => {
  useLayoutEffect(() => {
    const faqAnimation = animateFaqSection();
    createScrollTrigger('#faq', faqAnimation);
    return () => {
      faqAnimation.kill();
    };
  }, []);
  return (
    <section id={id} className="section faq">
      <div className="container">
        <div className="faq__heading-wrapper">
          <div>
            <h2 className="faq__title">{dataJson?.faq?.title}</h2>
            <div className="faq__contact-us">
              <p>{dataJson?.faq?.question}</p>
              <Button href="#contact-us">Contact Us</Button>
            </div>
          </div>
        </div>
        <AccordionContainer items={dataJson?.faq?.accordionItems} />
        <div className="faq__contact-us">
          <p>{dataJson?.faq?.question}</p>
          <Button href="#contact-us">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
