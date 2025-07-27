import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useLogout = () => {
  const { logout, isLoggingOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    console.log('Logout initiated');
    
    try {
      // Call logout from auth context
      logout();
      
      // Wait a brief moment for state to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Navigate to login and clear history
      navigate('/login', { replace: true });
      
      // Clear browser history stack
      window.history.replaceState(null, '', '/login');
      
      console.log('Logout completed successfully');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }, [logout, navigate]);

  return { 
    handleLogout, 
    isLoggingOut 
  };
};