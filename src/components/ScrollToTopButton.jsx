import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      className="scrollup-btn"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowRightIcon />
    </button>
  );
};
