import styles from './ProfileButton.module.scss';
import { CiUser } from "react-icons/ci";
import { HiMenu } from "react-icons/hi"

export const ProfileButton = () => {
  return (
    <button type="button" className={styles.profileButtonContainer}>
      <HiMenu className={styles.menuIcon} />
      <div className={styles.userIconWrapper}>
        <CiUser className={styles.userIcon} />
      </div>
    </button>
  );
};