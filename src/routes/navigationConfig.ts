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
  Plus,
  Info,
  Edit,
  List,
  Eye,
  UserPlus,
  BookPlus,
  CalendarPlus,
  Upload,
  Download,
} from 'lucide-react';
import type { ComponentType } from 'react';

export interface NavigationItem {
  title: string;
  path: string;
  icon: ComponentType<any>;
  subItems?: NavigationItem[];
}

// Admin Navigation with subroutes
export const adminNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  {
    title: "Students",
    path: "/students",
    icon: Users,
    subItems: [
      { title: "All Students", path: "/students", icon: List },
      { title: "Add Student", path: "/students/add", icon: UserPlus },
      { title: "Student Info", path: "/students/info", icon: Info },
      { title: "Manage Enrollment", path: "/students/enrollment", icon: Edit },
    ]
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: GraduationCap,
    subItems: [
      { title: "All Teachers", path: "/teachers", icon: List },
      { title: "Add Teacher", path: "/teachers/add", icon: UserPlus },
      { title: "Teacher Info", path: "/teachers/info", icon: Info },
      { title: "Assign Classes", path: "/teachers/assign-classes", icon: BookOpen },
      { title: "Teacher Performance", path: "/teachers/performance", icon: BarChart3 },
    ]
  },
  {
    title: "Courses",
    path: "/courses",
    icon: BookOpen,
    subItems: [
      { title: "All Courses", path: "/courses", icon: List },
      { title: "Add Course", path: "/courses/add", icon: BookPlus },
      { title: "Course Details", path: "/courses/details", icon: Info },
      { title: "Assign Teachers", path: "/courses/assign-teachers", icon: Users },
      { title: "Course Materials", path: "/courses/materials", icon: FileText },
    ]
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: Calendar,
    subItems: [
      { title: "View Schedule", path: "/schedule", icon: Eye },
      { title: "Create Schedule", path: "/schedule/create", icon: CalendarPlus },
      { title: "Manage Timetable", path: "/schedule/timetable", icon: Edit },
      { title: "Room Allocation", path: "/schedule/rooms", icon: Settings },
    ]
  },
  {
    title: "Reports",
    path: "/reports",
    icon: BarChart3,
    subItems: [
      { title: "Academic Reports", path: "/reports/academic", icon: FileText },
      { title: "Attendance Reports", path: "/reports/attendance", icon: UserCheck },
      { title: "Performance Analytics", path: "/reports/performance", icon: BarChart3 },
      { title: "Financial Reports", path: "/reports/financial", icon: Download },
    ]
  },
  {
    title: "Assignments",
    path: "/assignments",
    icon: FileText,
    subItems: [
      { title: "All Assignments", path: "/assignments", icon: List },
      { title: "Assignment Overview", path: "/assignments/overview", icon: Eye },
      { title: "Grade Management", path: "/assignments/grades", icon: Award },
      { title: "Assignment Analytics", path: "/assignments/analytics", icon: BarChart3 },
    ]
  },
  { title: "Settings", path: "/settings", icon: Settings },
];

// Teacher Navigation with subroutes
export const teacherNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  {
    title: "My Classes",
    path: "/classes",
    icon: BookOpen,
    subItems: [
      { title: "All Classes", path: "/classes", icon: List },
      { title: "Class Details", path: "/classes/details", icon: Info },
      { title: "Class Materials", path: "/classes/materials", icon: FileText },
      { title: "Class Schedule", path: "/classes/schedule", icon: Calendar },
    ]
  },
  {
    title: "Students",
    path: "/students",
    icon: Users,
    subItems: [
      { title: "My Students", path: "/students", icon: List },
      { title: "Student Progress", path: "/students/progress", icon: BarChart3 },
      { title: "Student Attendance", path: "/students/attendance", icon: UserCheck },
      { title: "Student Info", path: "/students/info", icon: Info },
    ]
  },
  {
    title: "Assignments",
    path: "/assignments",
    icon: FileText,
    subItems: [
      { title: "All Assignments", path: "/assignments", icon: List },
      { title: "Create Assignment", path: "/assignments/create", icon: Plus },
      { title: "Grade Assignments", path: "/assignments/grade", icon: Award },
      { title: "Assignment Submissions", path: "/assignments/submissions", icon: Upload },
    ]
  },
  {
    title: "Grades",
    path: "/grades",
    icon: Award,
    subItems: [
      { title: "Grade Book", path: "/grades", icon: List },
      { title: "Enter Grades", path: "/grades/enter", icon: Edit },
      { title: "Grade Reports", path: "/grades/reports", icon: FileText },
      { title: "Grade Analytics", path: "/grades/analytics", icon: BarChart3 },
    ]
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: Calendar,
    subItems: [
      { title: "My Schedule", path: "/schedule", icon: Eye },
      { title: "Class Timetable", path: "/schedule/timetable", icon: Calendar },
      { title: "Office Hours", path: "/schedule/office-hours", icon: Settings },
    ]
  },
  {
    title: "Messages",
    path: "/messages",
    icon: MessageSquare,
    subItems: [
      { title: "All Messages", path: "/messages", icon: List },
      { title: "Send Message", path: "/messages/send", icon: Plus },
      { title: "Student Messages", path: "/messages/students", icon: Users },
      { title: "Parent Messages", path: "/messages/parents", icon: MessageSquare },
    ]
  },
  { title: "Settings", path: "/settings", icon: Settings },
];

// Student Navigation with subroutes
export const studentNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  {
    title: "My Courses",
    path: "/courses",
    icon: BookOpen,
    subItems: [
      { title: "Enrolled Courses", path: "/courses", icon: List },
      { title: "Course Details", path: "/courses/details", icon: Info },
      { title: "Course Materials", path: "/courses/materials", icon: FileText },
      { title: "Course Progress", path: "/courses/progress", icon: BarChart3 },
    ]
  },
  {
    title: "Assignments",
    path: "/assignments",
    icon: FileText,
    subItems: [
      { title: "All Assignments", path: "/assignments", icon: List },
      { title: "Pending Assignments", path: "/assignments/pending", icon: Calendar },
      { title: "Submit Assignment", path: "/assignments/submit", icon: Upload },
      { title: "Assignment History", path: "/assignments/history", icon: Eye },
    ]
  },
  {
    title: "Grades",
    path: "/grades",
    icon: Award,
    subItems: [
      { title: "My Grades", path: "/grades", icon: List },
      { title: "Grade Reports", path: "/grades/reports", icon: FileText },
      { title: "Academic Progress", path: "/grades/progress", icon: BarChart3 },
      { title: "Transcript", path: "/grades/transcript", icon: Download },
    ]
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: Calendar,
    subItems: [
      { title: "Class Schedule", path: "/schedule", icon: Eye },
      { title: "Exam Schedule", path: "/schedule/exams", icon: Calendar },
      { title: "Personal Calendar", path: "/schedule/personal", icon: Settings },
    ]
  },
  {
    title: "Attendance",
    path: "/attendance",
    icon: UserCheck,
    subItems: [
      { title: "My Attendance", path: "/attendance", icon: List },
      { title: "Attendance Reports", path: "/attendance/reports", icon: FileText },
      { title: "Leave Requests", path: "/attendance/leave", icon: Calendar },
    ]
  },
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
      return studentNavigation;
  }
};