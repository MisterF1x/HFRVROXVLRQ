import LOGO from '../assets/images/logo.svg?react';

export const Logo = () => {
  return (
    <a className="header__link" href="/">
      <LOGO className="header__logo" />
    </a>
  );
};
