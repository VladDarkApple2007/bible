import { Link } from 'react-router-dom';
import styles from "./NavLinks.module.scss";


export const NavLinks = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.item}>
        <Link to="/bible">Библия</Link>
      </li>
      <li className={styles.item}>
        <Link to="/plans">Планы</Link>
      </li>
      <li className={styles.item}>
        <Link to="/video">Видео</Link>
      </li>
    </ul>

  )
}