import InstaIcon from '../assets/icons/instagram.svg?react';
import FacebookIcon from '../assets/icons/facebook.svg?react';

export const SocialList = () => {
  return (
    <ul className="social-list">
      <li className="social-list__item">
        <a className="social-list__link" href="#facebook" aria-label="facebook">
          <InstaIcon />
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="#instagram"
          aria-label="instagram"
        >
          <FacebookIcon />
        </a>
      </li>
    </ul>
  );
};
