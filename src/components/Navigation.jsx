import { useEffect, useState } from 'react';
import { links } from '../data/constant';
import { NavLink } from './NavLink';
import { SocialList } from './SocialList';

export const Navigation = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    if (activeLink) {
      const targetElement = document.getElementById(activeLink.slice(1));
      if (targetElement) {
        if (activeLink === '#header') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        onClose();
      }
    }
  }, [activeLink, onClose]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavLink
          className="navigation__close-link"
          label="close"
          href="#"
          onClick={e => {
            e.preventDefault();
            onClose();
          }}
        />
        {links.map(({ label, href }, index) => {
          return (
            <NavLink
              className={
                !index ? 'navigation__active-link' : 'navigation__link'
              }
              key={label}
              label={label}
              href={href}
              onClick={e => handleLinkClick(e, href)}
            />
          );
        })}
      </ul>
      <SocialList />
    </nav>
  );
};
