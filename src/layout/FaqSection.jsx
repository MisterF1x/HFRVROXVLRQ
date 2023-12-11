import { Button } from '@components/Button';
import { AccordionContainer } from '../components/AccordionContainer';
import { accordionItems } from '../data/constant';
import { useLayoutEffect } from 'react';
import { animateFaqSection, createScrollTrigger } from '../libs/gsap';

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
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <div className="faq__contact-us">
              <p>Didn&apos;t find the answer to your question? </p>
              <Button href="#contact-us">Contact Us</Button>
            </div>
          </div>
        </div>
        <AccordionContainer items={accordionItems} />
        <div className="faq__contact-us">
          <p>Didn&apos;t find the answer to your question? </p>
          <Button href="#contact-us">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
