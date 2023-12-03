import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const NavLink = ({ label, href, onClick, className }) => {
  return (
    <li className="navigation__item">
      <a className={className} href={href} onClick={onClick}>
        {label}
        {className === 'navigation__close-link' ? (
          <span className="close-button"></span>
        ) : (
          <ArrowRightIcon />
        )}
      </a>
    </li>
  );
};
