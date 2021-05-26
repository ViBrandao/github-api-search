/* eslint-disable react/jsx-no-target-blank */
import styles from './styles.module.scss';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Vitor Brandão</p>
      <a href="https://github.com/ViBrandao" target="_blank">
        <RiGithubFill />
      </a>
      <a
        href="https://www.linkedin.com/in/vitor-brand%C3%A3o-55628a163/"
        target="_blank"
      >
        <RiLinkedinFill />
      </a>
    </footer>
  );
}
