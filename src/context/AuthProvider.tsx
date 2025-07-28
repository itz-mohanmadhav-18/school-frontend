import { useEffect, useState, useCallback, useRef } from 'react';
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
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const initialPathRef = useRef<string | null>(null);
  
  // Store the initial path on first render
  useEffect(() => {
    if (!initialPathRef.current) {
      initialPathRef.current = window.location.pathname;
    }
  }, []);

  // More reliable navigation - both replaces history and redirects immediately
  const clearRouteHistory = useCallback(() => {
    if (window.location.pathname === '/login') {
      return; // Already on login page, no need to redirect
    }
    
    // First replace the history entry to prevent back navigation
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '/login');
    }
    
    // Then also do a hard redirect to ensure immediate navigation
    window.location.href = '/login';
  }, []);

  const handleAuthFailure = useCallback((reason: string) => {
    console.log(reason);
    
    // Clear auth state first
    setIsAuthenticated(false);
    setUser(null);
    
    // Clear stored data
    removeEncryptedItem('user');
    removeEncryptedItem('isAuthenticated');
    
    // Clear route history immediately if not on login page
    if (window.location.pathname !== '/login') {
      clearRouteHistory();
    }
  }, [clearRouteHistory]);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        // Don't load auth state if we're already on the login page
        if (window.location.pathname === '/login') {
          setIsLoading(false);
          return;
        }

        // Check if we have any encrypted data first
        const hasUserData = localStorage.getItem('user');
        const hasAuthData = localStorage.getItem('isAuthenticated');
        
        if (!hasUserData || !hasAuthData) {
          // No data exists, skip integrity check
          console.log('No stored auth data found');
          handleAuthFailure('No auth data found');
          return;
        }

        // Verify data integrity first
        const userIntegrity = verifyDataIntegrity('user');
        const authIntegrity = verifyDataIntegrity('isAuthenticated');

        if (!userIntegrity.valid || !authIntegrity.valid) {
          handleAuthFailure('Auth data integrity check failed, clearing corrupted data');
          return;
        }

        // Check if data is expired before attempting decryption
        if (userIntegrity.expired || authIntegrity.expired) {
          handleAuthFailure('Session expired');
          return;
        }

        // Get signed and encrypted auth data with automatic expiration check
        const storedUser = getSecureSessionData<User>('user');
        const storedAuth = getSecureSessionData<boolean>('isAuthenticated');

        if (storedUser && storedAuth) {
          setUser(storedUser);
          setIsAuthenticated(true);
          console.log('Secure auth state restored - signature verified');
        } else {
          handleAuthFailure('Session expired or no valid auth data found');
        }
      } catch (error) {
        console.error('Error loading secure auth state:', error);
        
        // Clean up any corrupted data
        try {
          removeEncryptedItem('user');
          removeEncryptedItem('isAuthenticated');
        } catch (cleanupError) {
          console.error('Error during cleanup:', cleanupError);
        }
        
        handleAuthFailure('Error loading auth state');
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthState();
  }, [handleAuthFailure]);

  const generateMockId = () => Math.random().toString(36).substr(2, 9);

  const getMockNameByRole = (role: string) => {
    const names = {
      admin: 'John Admin',
      teacher: 'Jane Teacher',
      student: 'Alex Student',
      parent: 'Sarah Parent'
    };
    return names[role as keyof typeof names] || 'User';
  };

  const getMockEmailByRole = (role: string) => {
    const emails = {
      admin: 'admin@school.com',
      teacher: 'teacher@school.com',
      student: 'student@school.com',
      parent: 'parent@school.com'
    };
    return emails[role as keyof typeof emails] || 'user@school.com';
  };

  const login = (role: string = 'student', sessionHours = 0.001) => {
    console.log('Secure login called with role:', role, 'and session duration:', sessionHours, 'hours');

    // Reset logging out state when logging in
    setIsLoggingOut(false);

    // Create user data with the selected role
    const userData: User = {
      _id: generateMockId(),
      email: getMockEmailByRole(role),
      role: role,
      name: getMockNameByRole(role),
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

    // Set logging out state
    setIsLoggingOut(true);

    // Clear state
    setIsAuthenticated(false);
    setUser(null);

    // Clear signed encrypted session data
    try {
      removeEncryptedItem('user');
      removeEncryptedItem('isAuthenticated');
    } catch (error) {
      console.error('Error clearing encrypted data:', error);
    }

    clearRouteHistory();

    // Reset logging out state after a brief delay
    setTimeout(() => {
      setIsLoggingOut(false);
    }, 1000);

    console.log('Secure auth state cleared');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      logout,
      isLoading,
      isLoggingOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}