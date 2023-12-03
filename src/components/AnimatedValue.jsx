import { useState, useEffect } from 'react';

export const AnimatedValue = ({ elValue, className }) => {
  const [value, setValue] = useState(elValue);
  const valueWithDots = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newValue = value + 1;
      setValue(newValue);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <div className="feature__wrapper">
      <h3 className={className}>{valueWithDots}</h3>
      <span>kWh</span>
    </div>
  );
};
