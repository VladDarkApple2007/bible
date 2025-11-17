import { Link } from 'react-router-dom';
import styles from "./NavLinks.module.scss";


export const NavLinks = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <Link to="/bible">Библия</Link>
      </li>
      <li>
        <Link to="/plans">Планы</Link>
      </li>
      <li>
        <Link to="/video">Видео</Link>
      </li>
    </ul>

  )
}