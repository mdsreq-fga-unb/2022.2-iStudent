import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

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
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps>(null);
  const [token, setToken] = useState(localStorage.getItem('ISTUDENT:TOKEN') || '');

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}