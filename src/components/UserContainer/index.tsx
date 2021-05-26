import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { useUser } from '../../hooks/useUser';
import { api } from '../../services/api';
import { ReposTable } from '../ReposTable';
import { UserCard } from '../UserCard';
import styles from './styles.module.scss';

export interface IRepo {
  name: string;
  html_url: string;
  description: string;
}

export function UserContainer() {
  const { user } = useUser();
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [repoSearchType, setRepoSearchType] = useState('repos');

  useEffect(() => {
    api.get(`/${user.login}/repos`).then((response) => {
      setRepos(response.data);
      setRepoSearchType('repos');
    });
  }, [user.login]);

  async function handleListRepos(searchType: string) {
    setRepoSearchType(searchType);
    api.get(`/${user.login}/${searchType}`).then((response) => {
      setRepos(response.data);
    });
  }

  if (!user?.login) {
    return null;
  }

  return (
    <Row className={styles.userContainer}>
      <Col xs={12} md={6} lg={4}>
        <UserCard handleListRepos={handleListRepos} />
      </Col>

      <Col xs={12} md={6} lg={8}>
        <ReposTable repoSearchType={repoSearchType} repos={repos} />
      </Col>
    </Row>
  );
}
