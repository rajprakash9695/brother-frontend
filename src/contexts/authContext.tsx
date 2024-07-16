import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
  name: string;
  email: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  user: AuthContextType;
  setUser: React.Dispatch<React.SetStateAction<AuthContextType>>;
  logout: () => void;
}

const initialUserState: AuthContextType = {
  name: '',
  email: '',
};

const AuthContext = createContext<AuthContextValue | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthContextType>(initialUserState);

  const logout = () => {
    setUser(initialUserState);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
