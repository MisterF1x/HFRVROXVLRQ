export const AboutCard = ({ icon, title, text }) => {
  return (
    <li className="card-list__item">
      <h3 className="card-list__title">
        {icon}
        {title}
      </h3>
      <p className="card-list__paragraph">{text}</p>
    </li>
  );
};
