import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Backdrop';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onClose, isModalOpen }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') onClose();
  };

  const onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]); // eslint-disable-line

  if (!isModalOpen) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={onClickOverlay}>{children}</Backdrop>,
    modalRoot
  );
};
