import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { LogOut, User, Mail, Hash } from 'lucide-react';

export const UserAvatar: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src="" alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 sm:w-80" align="end" forceMount>
        <DropdownMenuLabel>
          <Card className="border-0 shadow-none">
            <CardContent className="p-3 sm:p-4">
              {/* User Avatar and Name */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="" alt={user.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm sm:text-lg">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1 min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-semibold truncate">{user.name}</p>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </Badge>
                </div>
              </div>
              
              {/* User Details */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <Hash className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="font-medium">ID:</span>
                  <span className="font-mono text-xs truncate">{user._id}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="font-medium">Email:</span>
                  <span className="truncate min-w-0">{user.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="font-medium">Role:</span>
                  <span className="capitalize">{user.role}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleLogout} 
          className="cursor-pointer text-destructive focus:text-destructive mx-2 mb-1"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};