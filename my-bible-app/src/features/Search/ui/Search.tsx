import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Искать на сайте Bible.com"
        className={styles.searchInput}
      />
      <button type="button" className={styles.searchButton}>
        <CiSearch className={styles.searchIcon} />
      </button>
    </div>
  )
}