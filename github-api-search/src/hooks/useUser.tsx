import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface IUser {
  username: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextContextData {
  user: IUser;
  searchUser: (userName: string) => Promise<void>;
  searchUserError: boolean;
  setSearchUserError: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextContextData>(
  {} as UserContextContextData
);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUser>(Object);
  const [searchUserError, setSearchUserError] = useState(false);

  useEffect(() => {
    api
      .get(`/ViBrandao`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setUser(response.data);
        setSearchUserError(false);
      })
      .catch(() => setSearchUserError(true));
  }, []);

  async function searchUser(username: string) {
    api
      .get(`/${username}`, {
        headers: {
          Authorization: 'b93d34263ea42fdb72fb270d9a159caa939eb776',
        },
      })
      .then((response) => {
        setUser(response.data);
        setSearchUserError(false);
      })
      .catch(() => setSearchUserError(true));
  }

  return (
    <UserContext.Provider
      value={{ user, searchUser, searchUserError, setSearchUserError }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
