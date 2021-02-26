import React, { useCallback, createContext, useState, useContext } from 'react';

import api from '../services/api';

interface IAuthContextData {
  user: IUser;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
}
interface IUser {
  id: string;
  name: string;
  avatar_url: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem('@Meritial:user');
    const token = localStorage.getItem('@Meritial:token');
    if (user && token) {
      return { token, user: JSON.parse(user) };
    }
    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('@Meritial:user', JSON.stringify(user));
    localStorage.setItem('@Meritial:token', token);
    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Meritial:user');
    localStorage.removeItem('@Meritial:token');
    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}
