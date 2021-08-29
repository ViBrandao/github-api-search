import { GoLogoGithub } from "react-icons/go";

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <GoLogoGithub className={styles.icons} />
    </header>
  );
}
