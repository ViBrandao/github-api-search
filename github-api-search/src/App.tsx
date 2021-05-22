import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { SearchForm } from './components/SearchForm';
import { UserContainer } from './components/UserContainer';
import { UserProvider } from './hooks/useUser';

function App() {
  return (
    <UserProvider>
      <Container>
        <header>
          <Jumbotron>
            <Container>
              <h1>UOL Compasso Test</h1>
            </Container>
          </Jumbotron>
        </header>
        <SearchForm />
        <UserContainer />
      </Container>
    </UserProvider>
  );
}

export default App;
