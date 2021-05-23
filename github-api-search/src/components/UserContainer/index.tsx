import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { useUser } from '../../hooks/useUser';
import { api } from '../../services/api';
import { ReposTable } from '../ReposTable';
import { UserCard } from '../UserCard';

export interface IRepo {
  name: string;
  url: string;
  description: string;
}

export function UserContainer() {
  const { user } = useUser();
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [listType, setListType] = useState('repos');

  useEffect(() => {
    api
      .get(`/${user.login}/repos`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setRepos(response.data);
        setListType('repos');
      });
  }, [user.login]);

  async function handleListRepos(searchType: string) {
    setListType(searchType);
    api
      .get(`/${user.login}/${searchType}`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setRepos(response.data);
      });
  }

  return (
    <Row>
      <Col md={4}>
        <UserCard handleListRepos={handleListRepos} />
      </Col>

      <Col md={8}>
        <ReposTable listName={listType} repos={repos} />
      </Col>
    </Row>
  );
}
