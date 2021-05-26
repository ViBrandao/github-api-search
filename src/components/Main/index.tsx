import { Container } from 'react-bootstrap';
import { UserProvider } from '../../hooks/useUser';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { SearchForm } from '../SearchForm';
import { UserContainer } from '../UserContainer';
import styles from './styles.module.scss';

export function Main() {
  return (
    <UserProvider>
      <Container fluid={'lg'} className={styles.container}>
        <Header />
        <SearchForm />
        <UserContainer />
      </Container>
      <Footer />
    </UserProvider>
  );
}
