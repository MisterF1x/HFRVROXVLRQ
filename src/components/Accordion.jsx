import AddIcon from '../assets/icons/add.svg?react';
import MinusIcon from '../assets/icons/minus.svg?react';

export const Accordion = ({ title, content, isOpen, onToggle }) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className="accordion"
      role="region"
      aria-labelledby={`accordion-${title.replace(/\s+/g, '-')}`}
    >
      <div
        onClick={handleClick}
        className={`accordion__heading ${
          isOpen ? 'accordion__heading--open' : ''
        }`}
        role="button"
        aria-expanded={isOpen}
      >
        <span
          className={`accordion__icon ${isOpen ? 'accordion__icon-open' : ''} `}
        >
          {isOpen ? <MinusIcon /> : <AddIcon />}
        </span>
        <h3 className="accordion__title">{title}</h3>
      </div>
      <div
        className={`accordion__content ${
          isOpen ? 'accordion__content-open' : ''
        } `}
        aria-hidden={!isOpen}
      >
        {content}
      </div>
    </div>
  );
};
