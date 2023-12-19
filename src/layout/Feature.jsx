import { AnimatedValue } from '@components/AnimatedValue';
import dataJson from '../data/pageData.json';

export const Feature = () => {
  return (
    <section className="section feature">
      <div className="container">
        <h2 className="feature__title">{dataJson?.feature?.title}</h2>
        <div className="feature__line"></div>
        <AnimatedValue
          className="feature__paragraph"
          elValue={dataJson?.feature?.number}
        />
      </div>
    </section>
  );
};
