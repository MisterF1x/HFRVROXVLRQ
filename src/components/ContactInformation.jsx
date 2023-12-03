import { SocialList } from './SocialList';
import PhoneIcon from '../assets/icons/call.svg?react';
import MailIcon from '../assets/icons/sms.svg?react';
import MapIcon from '../assets/icons/map.svg?react';

export const ContactInformation = () => {
  return (
    <ul className="info-list">
      <li className="info-list__item">
        <p className="info-list__title">Phone:</p>
        <a className="info-list__link" href="tel:380981234567">
          <PhoneIcon />
          38 (098) 12 34 567
        </a>
        <a className="info-list__link" href="tel:380931234567">
          <PhoneIcon />
          38 (093) 12 34 567
        </a>
      </li>
      <li className="info-list__item">
        <p className="info-list__title">Email:</p>
        <a className="info-list__link" href="mailto:office@ecosolution.com">
          <MailIcon />
          office@ecosolution.com
        </a>
      </li>
      <li className="info-list__item">
        <p className="info-list__title">Address:</p>
        <a
          className="info-list__link"
          href="https://maps.app.goo.gl/pmoGC5Yf7tZ35uCb8"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <MapIcon />
          <p className="info-list__address">
            79005, Ukraine, Lviv street. Shota Rustaveli, 7
          </p>
        </a>
      </li>
      <li className="info-list__item">
        <p className="info-list__title">Social Networks:</p>
        <SocialList />
      </li>
    </ul>
  );
};
