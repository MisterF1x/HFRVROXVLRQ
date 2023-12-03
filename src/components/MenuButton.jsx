import MenuIcon from '../assets/icons/menu.svg?react';

export const MenuButton = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-controls="menu"
      aria-label="Menu"
      className="menu-button"
      onClick={onClick}
    >
      <MenuIcon />
    </button>
  );
};
