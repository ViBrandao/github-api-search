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
import { useParams } from 'react-router-dom';

interface IUser {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextContextData {
  user: IUser;
  searchUserError: boolean;
  setSearchUserError: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextContextData>(
  {} as UserContextContextData
);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [searchUserError, setSearchUserError] = useState(false);
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    if (username) {
      api
        .get(`/${username}`)
        .then((response) => {
          setUser(response.data);
          setSearchUserError(false);
        })
        .catch(() => {
          setUser({} as IUser);
          setSearchUserError(true);
        });
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ user, searchUserError, setSearchUserError }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
