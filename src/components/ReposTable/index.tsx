/* eslint-disable react/jsx-no-target-blank */
import { Table } from 'react-bootstrap';
import { IRepo } from '../UserContainer';
import styles from './styles.module.scss';

interface IReposTableProps {
  repoSearchType: string;
  repos: IRepo[];
}

export function ReposTable({ repoSearchType, repos }: IReposTableProps) {
  return (
    <div className={styles.tableContainer}>
      <h2>{repoSearchType}</h2>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, index) => (
            <tr key={index}>
              <td>
                <a rel="stylesheet" href={repo.html_url} target="_blank">
                  {repo.name}
                </a>
              </td>
              <td>{repo.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
