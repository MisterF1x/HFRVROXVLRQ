import { ConactForm } from '@components/ContactForm';
import { ContactInformation } from '@components/ContactInformation';

export const ContactSection = ({ id }) => {
  return (
    <section id={id} className="section section-contact">
      <div className="container">
        <h2 className="section-contact__title section__title">Contact Us</h2>
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