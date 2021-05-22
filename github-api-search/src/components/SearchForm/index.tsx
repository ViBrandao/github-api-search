import React, { FormEvent, useState } from 'react';
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useUser } from '../../hooks/useUser';

export function SearchForm() {
  const [username, setUsername] = useState('');
  const { searchUser, searchUserError, setSearchUserError } = useUser();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    searchUser(username);
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <InputGroup size="lg">
        <FormControl
          placeholder="Username"
          aria-label="Username"
          // aria-describedby="basic-addon2"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <InputGroup.Append>
          <Button variant="primary" size="lg" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Alert
        show={searchUserError}
        variant="danger"
        style={{ display: 'flex' }}
      >
        User not found!
        <Button
          onClick={() => setSearchUserError(false)}
          variant="outline-danger"
          style={{ marginLeft: 'auto' }}
          size="sm"
        >
          Close
        </Button>
      </Alert>
    </Form>
  );
}
