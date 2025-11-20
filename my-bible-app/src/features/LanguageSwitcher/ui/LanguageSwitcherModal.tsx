import styles from './LanguageSwitcher.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageSwitcherModal = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen && (
        <div className={styles.languageSwitcherModal}>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  )
}