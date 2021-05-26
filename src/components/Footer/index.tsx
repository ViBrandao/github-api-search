import styles from './styles.module.scss';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Vitor Brandão</p>
      <a href="https://github.com/ViBrandao">
        <RiGithubFill />
      </a>
      <a href="https://www.linkedin.com/in/vitor-brand%C3%A3o-55628a163/">
        <RiLinkedinFill />
      </a>
    </footer>
  );
}
