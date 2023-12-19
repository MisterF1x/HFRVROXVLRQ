import { SpriteIcon } from '@components/SpriteIcon';
import sprite from '../assets/icons/sprite.svg';

export const AboutCard = ({ icon, title, text }) => {
  return (
    <li className="card-list__item">
      <h3 className="card-list__title">
        <SpriteIcon path={sprite} iconName={icon} width={16} height={16} />
        {title}
      </h3>
      <p className="card-list__paragraph">{text}</p>
    </li>
  );
};
