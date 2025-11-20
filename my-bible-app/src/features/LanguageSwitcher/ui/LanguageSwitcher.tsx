import styles from './LanguageSwitcher.module.scss';
import { useState } from 'react';
import { LanguageSwitcherModal } from './LanguageSwitcherModal';
import { FaGlobe } from "react-icons/fa";

export const LanguageSwitcher = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (): void => {
    console.log('LanguageSwitcherModal');
  };

  return (
    <div>
      <button type="button" className={styles.languageSwitcherButton} onClick={openModal}>
        <FaGlobe className={styles.globeIcon} />
      </button>
      <LanguageSwitcherModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>

  );
};