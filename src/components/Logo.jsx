import { useLayoutEffect } from 'react';
import LOGO from '../assets/images/logo.svg?react';
import { gsap } from 'gsap';

export const Logo = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    let ctx = gsap.context(() => {
      tl.to('.header__link', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
        ease: 'power4.inOut',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <a className="header__link" href="/">
      <span aria-label="Ecosolution logo">
        <LOGO className="header__logo" role="presentation" />
      </span>
    </a>
  );
};
