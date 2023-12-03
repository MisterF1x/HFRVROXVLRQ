import { useState } from 'react';
import { Accordion } from './Accordion';

export const AccordionContainer = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion__container">
      {items.map((item, index) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
