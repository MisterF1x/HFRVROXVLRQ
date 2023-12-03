import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const Button = ({ children, outline, href = '#' }) => {
  const handleClick = e => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <a
      onClick={handleClick}
      href={href}
      className={`btn ${outline ? 'outline' : ''}`}
    >
      {children}
      <span className="btn__circle">
        <span className="wrapper">
          <ArrowRightIcon />
        </span>
      </span>
    </a>
  );
};
