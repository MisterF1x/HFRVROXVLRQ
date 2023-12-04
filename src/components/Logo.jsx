import LOGO from '../assets/images/logo.svg?react';

export const Logo = () => {
  return (
    <a className="header__link" href="/">
      <span aria-label="Company logo">
        <LOGO className="header__logo" role="presentation" />
      </span>
    </a>
  );
};
