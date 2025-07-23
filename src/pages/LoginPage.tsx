import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth'; // Updated import
import { Navigate, useLocation } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  
  // Get the intended destination (where user was trying to go)
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    login();
  };

  // If already authenticated, redirect to intended destination
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
          {/* <p className="text-sm text-gray-500 mt-2">
            Will redirect to: {from}
          </p> */}
        </div>
        <Button onClick={handleLogin} className="w-full">
          Login (Dummy)
        </Button>
      </div>
    </div>
  );
};