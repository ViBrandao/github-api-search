import { Table } from 'react-bootstrap';
import { IRepo } from '../UserContainer';
import styles from './styles.module.scss';

interface IReposListProps {
  listName: string;
  repos: IRepo[];
}

export function ReposTable({ listName, repos }: IReposListProps) {
  return (
    <div className={styles.tableContainer}>
      <h2>{listName}</h2>
      <Table bordered hover responsive="md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr>
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
