import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import CheckIcon from '../assets/icons/check.svg?react';

export const SuccessMessage = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to('.success-message', { scale: 1, autoAlpha: 1 });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="success-message">
      <span className="success-message__icon">
        <CheckIcon />
      </span>
      <h2 className="success-message__title">Thank you!</h2>
      <p className="success-message__content">
        We have received your submission and will be in touch soon.
      </p>
    </div>
  );
};
