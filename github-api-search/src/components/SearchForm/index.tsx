import { FormEvent, useState } from 'react';
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.scss';

export function SearchForm() {
  const [username, setUsername] = useState('');
  const { searchUser, searchUserError, setSearchUserError } = useUser();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    searchUser(username);
  }

  return (
    <Form inline onSubmit={handleSubmit} className={styles.formContainer}>
      <InputGroup>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className={styles.formControl}
        />
        <InputGroup.Append>
          <Button variant="secondary" size="lg" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <Alert
        show={searchUserError}
        variant="secondary"
        style={{ display: 'flex' }}
        className={styles.alert}
      >
        User not found!
        <Button
          onClick={() => setSearchUserError(false)}
          style={{ marginLeft: 'auto' }}
          size="sm"
          variant="secondary"
        >
          Close
        </Button>
      </Alert>
    </Form>
  );
}
