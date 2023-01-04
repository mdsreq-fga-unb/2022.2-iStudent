import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import userInfo from '../shared/services/user/userInfo';

type UserProps = {
    name: string
    email: string
    role: 'STUDENT' | 'TEACHER'
} | null;

interface UserContextProps {
  user: UserProps;
  token: string;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
  setToken:  React.Dispatch<React.SetStateAction<string>>;
  changeToken: Function
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps>(null);
  const [token, setToken] = useState(localStorage.getItem('ISTUDENT:TOKEN') || '');

  const changeToken = (token: string) => {
    setToken(token);
    localStorage.setItem('ISTUDENT:TOKEN', token);
  }
  useEffect(() => {
    if(!token) return
    userInfo().then((userInfo) => setUser(userInfo))
  },[token])
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, changeToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}