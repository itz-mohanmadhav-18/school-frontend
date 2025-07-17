import { useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '@/types/auth.types';
import { AuthContext } from './auth-context';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    console.log('Login called'); // Debug log
    setIsAuthenticated(true);
    setUser({
      _id: "dummy-id",
      email: "user@example.com", 
      role: "admin",
      name: "john doe",
    });
  };

  const logout = () => {
    console.log('Logout called'); // Debug log
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}