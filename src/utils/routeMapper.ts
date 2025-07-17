import { adminRoutes } from '@/routes/adminRoutes';
import { teacherRoutes } from '@/routes/teacherRoutes';
import { studentRoutes } from '@/routes/studentRoutes';

export const getRoutesForUser = (userRole: string) => {
  switch (userRole) {
    case 'admin':
      return adminRoutes;
    case 'teacher':
      return teacherRoutes;
    case 'student':
      return studentRoutes;
    default:
      return studentRoutes; // Default fallback
  }
};