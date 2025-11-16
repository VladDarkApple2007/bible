import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { NavLinks } from "@/features/Navigation/NavLinks";
import { ProfileButton } from "@/features/ProfileButton";
import { Search } from "@/features/Search";
import { Logo } from "@/shared/ui/Logo";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Logo />
        <NavLinks />
      </div>
      <div className={styles.center}>
        <Search />
      </div>
      <div className={styles.right}>
        <LanguageSwitcher />
        <ProfileButton />
      </div>
    </nav>
  );
};
