import { Button } from '@components/Button';
import { AccordionContainer } from '../components/AccordionContainer';
import { accordionItems } from '../data/constant';

export const FaqSection = () => {
  return (
    <section className="section faq">
      <div className="container">
        <div className="faq__heading-wrapper">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <div className="faq__contact-us">
            <p>Didn&apos;t find the answer to your question? </p>
            <Button href="#contact-us">Contact Us</Button>
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
