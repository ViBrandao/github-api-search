import React from 'react';
import { Button, ButtonGroup, Card, Table } from 'react-bootstrap';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.scss';

interface IUserCardProps {
  handleListRepos: (userName: string) => Promise<void>;
}

export function UserCard({ handleListRepos }: IUserCardProps) {
  const { user } = useUser();
  return (
    <Card className={styles.cardContainer}>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{user.login}</Card.Title>
        <Card.Text>{user.bio}</Card.Text>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Followers</th>
              <th>Following</th>
              <th>Public Repos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.followers}</td>
              <td> {user.following}</td>
              <td> {user.public_repos}</td>
            </tr>
          </tbody>
        </Table>
        <ButtonGroup vertical style={{ width: '100%' }}>
          <Button href={user.html_url} target="_blank" variant="secondary">
            Visit
          </Button>
          <Button onClick={() => handleListRepos('repos')} variant="secondary">
            Repos
          </Button>
          <Button
            onClick={() => handleListRepos('starred')}
            variant="secondary"
          >
            Starred
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
