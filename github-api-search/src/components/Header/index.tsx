import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/images/logo-uol.jpg" alt="ig.news" />
      <h1>Compasso</h1>
    </header>
  );
}
