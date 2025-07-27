import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { ChevronDown, UserCircle } from 'lucide-react';

const AVAILABLE_ROLES = [
  { value: 'admin', label: 'Admin' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'student', label: 'Student' },
  { value: 'parent', label: 'Parent' },
  { value: 'principal', label: 'Principal' },
];
export const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState<string>('student'); // Default to student
  
  // Get the intended destination (where user was trying to go)
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    login(selectedRole); // Pass the selected role to login function
  };

  // If already authenticated, redirect to intended destination
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const selectedRoleLabel = AVAILABLE_ROLES.find(role => role.value === selectedRole)?.label || 'Select Role';

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>
        
        <div className="space-y-4">
          {/* Role Selector Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Role</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex items-center">
                    <UserCircle className="mr-2 h-4 w-4" />
                    {selectedRoleLabel}
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[--radix-dropdown-menu-trigger-width]">
                {AVAILABLE_ROLES.map((role) => (
                  <DropdownMenuItem
                    key={role.value}
                    onClick={() => setSelectedRole(role.value)}
                    className={selectedRole === role.value ? "bg-accent" : ""}
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    {role.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Login Button */}
          <Button onClick={handleLogin} className="w-full">
            Login as {selectedRoleLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};