import {
  Home,
  Users,
  BookOpen,
  Calendar,
  Settings,
  GraduationCap,
  FileText,
  BarChart3,
  UserCheck,
  Award,
  MessageSquare,
} from 'lucide-react';
import type { ComponentType } from 'react';

export interface NavigationItem {
  title: string;
  path: string;
  icon: ComponentType<any>;
}

// Admin Navigation
export const adminNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  { title: "Students", path: "/students", icon: Users },
  { title: "Teachers", path: "/teachers", icon: GraduationCap },
  { title: "Courses", path: "/courses", icon: BookOpen },
  { title: "Schedule", path: "/schedule", icon: Calendar },
  { title: "Reports", path: "/reports", icon: BarChart3 },
  { title: "Assignments", path: "/assignments", icon: FileText },
  { title: "Settings", path: "/settings", icon: Settings },
];

// Teacher Navigation
export const teacherNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  { title: "My Classes", path: "/classes", icon: BookOpen },
  { title: "Students", path: "/students", icon: Users },
  { title: "Assignments", path: "/assignments", icon: FileText },
  { title: "Grades", path: "/grades", icon: Award },
  { title: "Schedule", path: "/schedule", icon: Calendar },
  { title: "Messages", path: "/messages", icon: MessageSquare },
  { title: "Settings", path: "/settings", icon: Settings },
];

// Student Navigation
export const studentNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  { title: "My Courses", path: "/courses", icon: BookOpen },
  { title: "Assignments", path: "/assignments", icon: FileText },
  { title: "Grades", path: "/grades", icon: Award },
  { title: "Schedule", path: "/schedule", icon: Calendar },
  { title: "Attendance", path: "/attendance", icon: UserCheck },
  { title: "Settings", path: "/settings", icon: Settings },
];

export const getNavigationByRole = (role: string): NavigationItem[] => {
  switch (role) {
    case 'admin':
      return adminNavigation;
    case 'teacher':
      return teacherNavigation;
    case 'student':
      return studentNavigation;
    default:
      return studentNavigation; // Default fallback
  }
};