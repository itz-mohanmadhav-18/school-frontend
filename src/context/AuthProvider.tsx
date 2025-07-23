import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '@/types/auth.types';
import { AuthContext } from './auth-context';
import { 
  setSecureSessionData, 
  getSecureSessionData, 
  removeEncryptedItem,
  verifyDataIntegrity 
} from '@/utils/encryption';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        // Verify data integrity first
        const userIntegrity = verifyDataIntegrity('user');
        const authIntegrity = verifyDataIntegrity('isAuthenticated');
        
        if (!userIntegrity.valid || !authIntegrity.valid) {
          console.warn('Auth data integrity check failed, clearing corrupted data');
          removeEncryptedItem('user');
          removeEncryptedItem('isAuthenticated');
          return;
        }
        
        // Get signed and encrypted auth data with automatic expiration check
        const storedUser = getSecureSessionData<User>('user');
        const storedAuth = getSecureSessionData<boolean>('isAuthenticated');
        
        if (storedUser && storedAuth) {
          setUser(storedUser);
          setIsAuthenticated(true);
          console.log('Secure auth state restored - signature verified');
        }
      } catch (error) {
        console.error('Error loading secure auth state:', error);
        
        // Clear potentially corrupted or tampered data
        removeEncryptedItem('user');
        removeEncryptedItem('isAuthenticated');
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthState();
  }, []);

  const login = (sessionHours = 0.30) => {
    console.log('Secure login called with session duration:', sessionHours, 'hours');
    
    const userData: User = {
      _id: "dummy-id",
      email: "user@example.com",
      role: "student",
      name: "john doe",
    };

    setIsAuthenticated(true);
    setUser(userData);

    // Store signed, encrypted data with session expiration
    try {
      setSecureSessionData('user', userData, sessionHours);
      setSecureSessionData('isAuthenticated', true, sessionHours);
      console.log('Auth state encrypted, signed, and saved with', sessionHours, 'hour expiration');
    } catch (error) {
      console.error('Error storing secure auth data:', error);
    }
  };

  const logout = () => {
    console.log('Secure logout called');
    
    // Clear state
    setIsAuthenticated(false);
    setUser(null);
    
    // Clear signed encrypted session data
    removeEncryptedItem('user');
    removeEncryptedItem('isAuthenticated');
    
    console.log('Secure auth state cleared');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      logout, 
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}