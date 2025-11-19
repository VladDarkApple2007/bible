import styles from './LanguageSwitcher.module.scss';
import { FaGlobe } from "react-icons/fa";

export const LanguageSwitcher = () => {
  return (
    <button type="button" className={styles.languageSwitcherButton}>
      <FaGlobe className={styles.globeIcon} />
    </button>
  );
};