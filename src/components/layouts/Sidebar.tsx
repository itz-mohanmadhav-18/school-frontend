import React, { useState } from 'react';
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useAuth } from '@/hooks/useAuth';
import { getNavigationByRole, type NavigationItem } from '@/routes/navigationConfig';
import { ChevronDown, ChevronRight, GraduationCap, Loader2, LogOut } from 'lucide-react';
import { useLogout } from '@/hooks/useLogout';


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

// Check if any subitem is active
const hasActiveSubItem = (item: NavigationItem, currentPath: string): boolean => {
  if (!item.subItems) return false;
  return item.subItems.some(subItem => isActiveLink(currentPath, subItem.path));
};

export const AppSidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const { handleLogout, isLoggingOut } = useLogout();
  const { state, isMobile, toggleSidebar, setOpenMobile } = useSidebar();
  // Changed from array to single string to only allow one expanded item
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!user) {
    return null;
  }

  const navigationItems = getNavigationByRole(user.role);
  const mainNavigationItems = navigationItems.filter(item => item.path !== '/settings');
  const settingsItem = navigationItems.find(item => item.path === '/settings');

  const handleNavigationClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  // Modified to only allow one expanded item at a time
  const toggleExpanded = (path: string) => {
    setExpandedItem(prev => prev === path ? null : path);
  };

  // Helper component for menu items with tooltips when collapsed
  // ...existing code...

  // Helper component for menu items with tooltips when collapsed
  const MenuItem = ({ item }: { item: NavigationItem }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItem === item.path;
    const isActive = isActiveLink(location.pathname, item.path);
    const hasActiveSub = hasActiveSubItem(item, location.pathname);

    // If collapsed and has subitems, show tooltip with subitems
    if (!isMobile && state === 'collapsed' && hasSubItems) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarMenuButton
                asChild
                isActive={isActive || hasActiveSub}
              >
                <Link to={item.path} onClick={handleNavigationClick} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                </Link>
              </SidebarMenuButton>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-medium">
              <div className="space-y-1">
                <div className="font-semibold">{item.title}</div>
                {item.subItems?.map((subItem) => (
                  <div key={subItem.path} className="text-sm text-muted-foreground">
                    • {subItem.title}
                  </div>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    // If collapsed and no subitems, show simple tooltip
    if (!isMobile && state === 'collapsed') {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarMenuButton
                asChild
                isActive={isActive}
              >
                <Link to={item.path} onClick={handleNavigationClick} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                </Link>
              </SidebarMenuButton>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-medium">
              {item.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    // Expanded or mobile view with dropdown functionality
    if (hasSubItems) {
      return (
        <Collapsible
          open={isExpanded}
          onOpenChange={() => toggleExpanded(item.path)}
        >
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              isActive={isActive || hasActiveSub}
              className="w-full"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 shrink-0" />
                )}
              </div>
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subItems?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.path}>
                  <SidebarMenuSubButton
                    asChild
                    isActive={isActiveLink(location.pathname, subItem.path)}
                  >
                    <Link to={subItem.path} onClick={handleNavigationClick}>
                      <subItem.icon className="h-4 w-4" />
                      <span>{subItem.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    // Simple menu item without subitems
    return (
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className="w-full"
      >
        <Link to={item.path} onClick={handleNavigationClick}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </div>
            {/* Empty div to maintain consistent spacing */}
            <div className="h-4 w-4 shrink-0" />
          </div>
        </Link>
      </SidebarMenuButton>
    );
  };

  // ...existing code...

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
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </p>
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
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="w-full justify-center text-sm font-normal hover:text-destructive p-2"
                    >
                      {isLoggingOut ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <LogOut className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-medium">
                    {isLoggingOut ? 'Logging out ....' : 'Logout'}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              // Mobile or expanded desktop version with text
              <Button
                variant="ghost"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full justify-start text-sm font-normal hover:text-destructive"
              >
                {isLoggingOut ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <LogOut className="mr-2 h-4 w-4" />
                )}
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </Button>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};