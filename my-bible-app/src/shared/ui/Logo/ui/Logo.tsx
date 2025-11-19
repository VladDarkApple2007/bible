import styles from "./Logo.module.scss";
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <div className={styles.logo}> YouVersion</div>
    </Link>
  )
}

