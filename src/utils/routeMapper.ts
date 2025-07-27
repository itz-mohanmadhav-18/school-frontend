import { adminRoutes } from '@/routes/adminRoutes';
import { teacherRoutes } from '@/routes/teacherRoutes';
import { studentRoutes } from '@/routes/studentRoutes';
import { parentRoutes } from '@/routes/parentRoutes';
import { principalRoutes } from '@/routes/principalRoutes';

export const getRoutesForUser = (userRole: string) => {
  switch (userRole) {
    case 'admin':
      return adminRoutes;
    case 'teacher':
      return teacherRoutes;
    case 'student':
      return studentRoutes;
    case 'parent':
      return parentRoutes;
    case 'principal':
      return principalRoutes;
    default:
      return studentRoutes; // Default fallback
  }
};