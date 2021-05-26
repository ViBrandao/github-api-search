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
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, index) => (
            <tr key={index}>
              <td>{repo.name}</td>
              <td>
                <a rel="stylesheet" href={repo.url}>
                  {repo.url}
                </a>
              </td>
            </tr>
          ))}
          {repos.length === 0 && (
            <tr>
              <td>Not found</td>
              <td>Not found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
