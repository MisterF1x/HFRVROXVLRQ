import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import { Button } from '@components/Button';
import { MenuButton } from '@components/MenuButton';
import { Logo } from '@components/Logo';
import { Navigation } from '@components/Navigation';
import { Modal } from '@components/Modal';

export const Header = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const isScrolled = useScroll(70);
  const headerStyle = { '--header-color': isScrolled ? '#fff' : '#fff0' };

  return (
    <>
      <header id={id} className="header" style={headerStyle}>
        <div className="container">
          <Logo />
          <div className="header__group-btn">
            <MenuButton onClick={handleToggle} />
            <Button href="#contact-us">Get in touch</Button>
          </div>
        </div>
        {open ? (
          <Modal onClose={handleToggle} isModalOpen={open}>
            <Navigation onClose={handleToggle} />
          </Modal>
        ) : (
          ''
        )}
      </header>
    </>
  );
};
