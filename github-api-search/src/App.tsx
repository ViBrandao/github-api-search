import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { UserContainer } from './components/UserContainer';
import { UserProvider } from './hooks/useUser';
import './styles/global.scss';

function App() {
  return (
    <UserProvider>
      <Container>
        <Header />

        <SearchForm />
        <UserContainer />
      </Container>
    </UserProvider>
  );
}

export default App;
