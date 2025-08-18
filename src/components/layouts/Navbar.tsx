import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { getNavigationByRole } from '@/routes/navigationConfig';
import { UserAvatar } from './UserAvatar';
import { useSidebar } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

// Utility function to get page title
const getCurrentPageTitle = (currentPath: string, navigationItems: any[]): string => {
  const isActiveLink = (currentPath: string, targetPath: string): boolean => {
    if (targetPath === '/dashboard' && currentPath === '/') return true;
    if (targetPath === currentPath) return true;
    if (targetPath !== '/' && currentPath.startsWith(targetPath)) return true;
    return false;
  };     

  const item = navigationItems.find(item => isActiveLink(currentPath, item.path));
  return item?.title || 'Dashboard';
};

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const { state, toggleSidebar } = useSidebar();

  if (!user) return null;

  const navigationItems = getNavigationByRole(user.role);
  const pageTitle = getCurrentPageTitle(location.pathname, navigationItems);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Left side - Custom sidebar trigger and page title */}
          <div className="flex items-center gap-4">
            {/* Only show toggle button when sidebar is expanded */}
            {state === 'expanded' && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="h-8 w-8"
                >
                  <PanelLeft className="h-4 w-4" />
                </Button>
                <Separator orientation="vertical" className="h-6" />
              </>
            )}
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold tracking-tight">{pageTitle}</h1>
              {/* <p className="text-sm text-muted-foreground">
                Welcome back, {user.name}
              </p> */}
            </div>
          </div>

          {/* Right side - User info and avatar */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Separator orientation="vertical" className="h-6 hidden md:block" />
            <div className="hidden md:flex flex-col items-end text-sm">
              <span className="font-medium">{user.name}</span>
              <span className="text-muted-foreground text-xs">{user.email}</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden md:block" />
            <UserAvatar />
          </div>
        </div>
      </header>
    </>
  );
};