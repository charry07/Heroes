import { createContext } from 'react';

interface userInterface {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const UserContext = createContext({username: '', email: '', password: '' } as userInterface);
