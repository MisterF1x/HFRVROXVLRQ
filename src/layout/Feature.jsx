import { AnimatedValue } from '../components/AnimatedValue';

export const Feature = () => {
  const value = 1134147814;
  return (
    <section className="section feature">
      <div className="container">
        <h2 className="feature__title">Electricity we produced for all time</h2>
        <div className="feature__line"></div>
        <AnimatedValue className="feature__paragraph" elValue={value} />
      </div>
    </section>
  );
};
