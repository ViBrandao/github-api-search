import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/images/logo-compasso.png" alt="ig.news" />
    </header>
  );
}
