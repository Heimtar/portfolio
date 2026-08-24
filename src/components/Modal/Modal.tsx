import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  btnText: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, btnText }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* Навешиваем стоп-пропагейшн, чтобы клик внутри модалки не закрывал её */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className={styles.badge}>// Commercial Offer</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href="mailto:your-email@example.com" className={styles.actionBtn} onClick={onClose}>
          {btnText}
        </a>
      </div>
    </div>
  );
};
