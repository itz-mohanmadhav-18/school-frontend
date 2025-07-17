import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAuth } from '@/hooks/useAuth';
import { getNavigationByRole } from '@/routes/navigationConfig';
import { ChevronRight, GraduationCap, LogOut } from 'lucide-react';

// Utility function for active link detection
const isActiveLink = (currentPath: string, targetPath: string): boolean => {
  if (targetPath === '/dashboard' && currentPath === '/') {
    return true;
  }
  
  if (targetPath === currentPath) {
    return true;
  }
  
  if (targetPath !== '/' && currentPath.startsWith(targetPath)) {
    return true;
  }
  
  return false;
};

export const AppSidebar: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { state, isMobile, toggleSidebar } = useSidebar();

  if (!user) {
    return null;
  }

  const navigationItems = getNavigationByRole(user.role);
  const mainNavigationItems = navigationItems.filter(item => item.path !== '/settings');
  const settingsItem = navigationItems.find(item => item.path === '/settings');

  // Helper component for menu items with tooltips when collapsed
  const MenuItem = ({ item }: { item: any }) => {
    const menuButton = (
      <SidebarMenuButton 
        asChild 
        isActive={isActiveLink(location.pathname, item.path)}
      >
        <Link to={item.path} className="flex items-center space-x-2">
          <item.icon className="h-4 w-4" />
          {/* Show text on mobile or when expanded */}
          {(isMobile || state === 'expanded') && <span>{item.title}</span>}
        </Link>
      </SidebarMenuButton>
    );

    // Only show tooltips on desktop when collapsed
    if (!isMobile && state === 'collapsed') {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {menuButton}
            </TooltipTrigger>
            <TooltipContent side="right" className="font-medium">
              {item.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return menuButton;
  };

  return (
    <Sidebar className="border-r" collapsible="icon">
      {/* Header - always present but content changes based on state */}
      <SidebarHeader className="border-b">
        {(isMobile || state === 'expanded') ? (
          // Full header for mobile or expanded desktop
          <>
            <div className="flex items-center space-x-2 px-2 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">School App</h1>
                <Badge variant="outline" className="w-fit text-xs">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </div>
            </div>
            <div className="px-2 pb-2">
              <p className="text-sm text-muted-foreground">Welcome, {user.name}</p>
            </div>
          </>
        ) : (
          // Clickable chevron for collapsed desktop - maintains spacing
          <div className="flex items-center justify-center px-2 py-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                    className="h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="font-medium">
                  Expand sidebar
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          {/* Show label on mobile or when expanded */}
          {(isMobile || state === 'expanded') && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <MenuItem item={item} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t">
        <SidebarMenu>
          {settingsItem && (
            <SidebarMenuItem>
              <MenuItem item={settingsItem} />
            </SidebarMenuItem>
          )}
          <SidebarMenuItem>
            {/* Show separator on mobile or when expanded */}
            {(isMobile || state === 'expanded') && <Separator className="my-2" />}
            
            {/* Logout button with proper mobile/desktop handling */}
            {(!isMobile && state === 'collapsed') ? (
              // Collapsed desktop version with tooltip
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      onClick={logout}
                      className="w-full justify-center text-sm font-normal hover:text-destructive p-2"
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    Logout
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              // Mobile or expanded desktop version with text
              <Button 
                variant="ghost" 
                onClick={logout}
                className="w-full justify-start text-sm font-normal hover:text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};