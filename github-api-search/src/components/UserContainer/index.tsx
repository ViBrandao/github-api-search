import React, { useState, FormEvent, useEffect } from 'react';
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Col,
  ListGroup,
  Row,
} from 'react-bootstrap';

import { useUser } from '../../hooks/useUser';
import { api } from '../../services/api';

type Repo = {
  name: string;
  url: string;
  description: string;
};

export function UserContainer() {
  const { user } = useUser();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [starredRepos, setStarredRepos] = useState<Repo[]>([]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    api
      .get(`/${user.login}/repos`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setRepos(response.data);
      })
      .catch(() => setShow(true));
  }, [user.login]);

  async function handleListRepos(event: FormEvent) {
    setShow(false);
    api
      .get(`/${user.login}/repos`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setRepos(response.data);
        setStarredRepos([]);
        if (response.data.length === 0) {
          setShow(true);
        }
      })
      .catch(() => setShow(true));
  }

  async function handleListStarred(event: FormEvent) {
    setShow(false);
    api
      .get(`/${user.login}/starred`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setStarredRepos(response.data);
        setRepos([]);
        if (response.data.length === 0) {
          setShow(true);
        }
      })
      .catch(() => setShow(true));
  }

  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img
            variant="top"
            src={user.avatar_url}
            style={{ width: 200 }}
          />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
          </Card.Body>
          <Card.Body>
            <ButtonGroup vertical style={{ width: '100%' }}>
              <Button href={user.html_url} target="_blank">
                Visit
              </Button>
              <Button onClick={handleListRepos}>Repos</Button>
              <Button onClick={handleListStarred}>Starred</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>

      <Col md={8}>
        <Alert show={show} variant="danger" style={{ display: 'flex' }}>
          Starred Repos not found!
          <Button
            onClick={() => setShow(false)}
            variant="outline-danger"
            style={{ marginLeft: 'auto' }}
            size="sm"
          >
            Close
          </Button>
        </Alert>

        {repos.length > 0 && (
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Repos
            </ListGroup.Item>
            {repos.map((repo) => (
              <ListGroup.Item as="li">{repo.name}</ListGroup.Item>
            ))}
          </ListGroup>
        )}

        {starredRepos.length > 0 && (
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Starred Repos
            </ListGroup.Item>
            {starredRepos.map((repo) => (
              <ListGroup.Item as="li">{repo.name}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}
