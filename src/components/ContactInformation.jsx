import { SocialList } from './SocialList';
import { SpriteIcon } from './SpriteIcon';
import { formatPhoneNumber } from '../utils/utils';
import dataJson from '../data/pageData.json';
import sprite from '../assets/icons/contact-sprite.svg';

export const ContactInformation = () => {
  return (
    <ul className="info-list">
      <li className="info-list__item">
        <p className="info-list__title">Phone:</p>
        <a
          className="info-list__link"
          href={`tel:${dataJson?.contactInfo?.phone}`}
        >
          <SpriteIcon path={sprite} iconName="call" width={24} height={24} />
          {formatPhoneNumber(dataJson?.contactInfo?.phone)}
        </a>
        <a
          className="info-list__link"
          href={`tel:${dataJson?.contactInfo?.otherPhone}`}
        >
          <SpriteIcon path={sprite} iconName="call" width={24} height={24} />
          {formatPhoneNumber(dataJson?.contactInfo?.otherPhone)}
        </a>
      </li>
      <li className="info-list__item">
        <p className="info-list__title">Email:</p>
        <a
          className="info-list__link"
          href={`mailto:${dataJson?.contactInfo?.email}`}
        >
          <SpriteIcon path={sprite} iconName="sms" width={24} height={24} />
          {dataJson?.contactInfo?.email}
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
          <SpriteIcon path={sprite} iconName="map" width={24} height={24} />
          <p className="info-list__address">{dataJson?.contactInfo?.address}</p>
        </a>
      </li>
      <li className="info-list__item">
        <p className="info-list__title">Social Networks:</p>
        <SocialList />
      </li>
    </ul>
  );
};
