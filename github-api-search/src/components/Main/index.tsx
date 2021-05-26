import { Container } from 'react-bootstrap';
import { UserProvider } from '../../hooks/useUser';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { SearchForm } from '../SearchForm';
import { UserContainer } from '../UserContainer';

export function Main() {
  return (
    <UserProvider>
      <Container>
        <Header />
        <SearchForm />
        <UserContainer />
      </Container>
      <Footer />
    </UserProvider>
  );
}
