import { Logo } from '@components/Logo';
import { SocialList } from '@components/SocialList';
import { ScrollToTopButton } from '@components/ScrollToTopButton';
import dataJson from '../data/pageData.json';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left-content">
            <Logo />
            <ScrollToTopButton />
            <SocialList />
            <p className="footer__address">{dataJson?.contactInfo.address}</p>
          </div>
          <div className="footer__right-content">
            <div className="footer__right-content-top">
              <SocialList />
            </div>
            <div className="footer__right-content-bottom">
              <a href="email:office@ecosolution.com?subject=Mail from Our Site">
                {dataJson?.contactInfo.email}
              </a>
              <p className="footer__copyright">
                {dataJson?.contactInfo.name} © {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
