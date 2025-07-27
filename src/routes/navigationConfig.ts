import {
  Plus,
  Info,
  Edit,
  List,
  Eye,
  Lock,
  UserPlus,
  Shield,
  Percent,
  Globe,
  AlertCircle,
  Key,
  Database,
  Cog,
  CalendarPlus,
  Home,
  BookOpen,
  Calendar,
  Settings,
  FileText,
  UserCheck,
  Clock,
  GraduationCap,
  Award,
  BookMarked,
  Library,
  Bus,
  Activity,
  Heart,
  CalendarDays,
  Folder,
  Upload,
  History,
  Search,
  Users,
  PenSquare,
  MessageSquare,
  ListChecks,
  TrendingUp,
  BarChart3,
  Stethoscope,
  FileHeart,
  CalendarX,
  Download,
  DollarSign,
  Receipt,
  CreditCard,
  Bell,
  MapPin,
  FileX,
  Send,
  Syringe,
  AlertTriangle,
  Brain,

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
  
  // Student Management - HIGHEST PRIORITY (Core Operations)
  {
    title: "Student Management",
    path: "/students",
    icon: Users,
    subItems: [
      { title: "All Students", path: "/students", icon: List },
      { title: "Search Students", path: "/students/search", icon: Search },
      { title: "Admit Student", path: "/students/admit", icon: UserPlus },
      { title: "Student Records", path: "/students/records", icon: FileText },
      { title: "Promote Students", path: "/students/promote", icon: TrendingUp },
      { title: "Transfer Students", path: "/students/transfer", icon: Send },
    ]
  },
  
  // Staff Management - HIGHEST PRIORITY (Core Operations)
  {
    title: "Staff Management",
    path: "/staff",
    icon: GraduationCap,
    subItems: [
      { title: "All Staff", path: "/staff", icon: List },
      { title: "Search Staff", path: "/staff/search", icon: Search },
      { title: "Add Staff", path: "/staff/add", icon: UserPlus },
      { title: "Assign Class", path: "/staff/assign-class", icon: BookOpen },
      { title: "Staff Attendance", path: "/staff/attendance", icon: UserCheck },
      { title: "Leave Approval", path: "/staff/leave-approval", icon: Send },
      { title: "Staff Performance", path: "/staff/performance", icon: BarChart3 },
    ]
  },
  
  // Academic Management - HIGH PRIORITY (Academic Operations)
  {
    title: "Academic Management",
    path: "/academic",
    icon: BookMarked,
    subItems: [
      { title: "Classes & Sections", path: "/academic/classes", icon: Users },
      { title: "Subjects Management", path: "/academic/subjects", icon: BookOpen },
      { title: "Curriculum Planning", path: "/academic/curriculum", icon: Calendar },
      { title: "Exam Management", path: "/academic/exams", icon: Award },
      { title: "Grade Configuration", path: "/academic/grades", icon: Settings },
      { title: "Academic Reports", path: "/academic/reports", icon: FileText },
    ]
  },
  
  // Calendar Management - HIGH PRIORITY (School Operations)
  {
    title: "Calendar Management",
    path: "/calendar",
    icon: Calendar,
    subItems: [
      { title: "Academic Calendar", path: "/calendar/academic", icon: BookMarked },
      { title: "Exam Calendar", path: "/calendar/exam", icon: CalendarX },
      { title: "Event Calendar", path: "/calendar/event", icon: CalendarDays },
      { title: "Holiday Management", path: "/calendar/holidays", icon: Calendar },
      { title: "PTM Schedule", path: "/calendar/ptm", icon: Users },
      { title: "School Hours", path: "/calendar/hours", icon: Clock },
    ]
  },
  
  // Communication - HIGH PRIORITY (Daily Operations)
  {
    title: "Communication",
    path: "/notices",
    icon: MessageSquare,
    subItems: [
      { title: "Notice Center", path: "/notices", icon: MessageSquare },
      { title: "School-wide Notice", path: "/notices/school-wide", icon: Globe },
      { title: "Class-wide Notice", path: "/notices/class-wide", icon: Users },
      { title: "To Parents", path: "/notices/parents", icon: Heart },
      { title: "To Teachers", path: "/notices/teachers", icon: GraduationCap },
      { title: "SMS/Email Alerts", path: "/notices/alerts", icon: Bell },
      { title: "Notice Templates", path: "/notices/templates", icon: FileText },
    ]
  },
  
  // Fees Management - MEDIUM-HIGH PRIORITY (Financial Operations)
  {
    title: "Fees Management",
    path: "/fees",
    icon: DollarSign,
    subItems: [
      { title: "Fee Structure", path: "/fees/structure", icon: FileText },
      { title: "Collect Fees", path: "/fees/deposit", icon: CreditCard },
      { title: "Pending Dues", path: "/fees/pending", icon: AlertCircle },
      { title: "Fee Reports", path: "/fees/reports", icon: BarChart3 },
      { title: "Concessions", path: "/fees/concession", icon: Percent },
      { title: "Fee Categories", path: "/fees/categories", icon: List },
      { title: "Payment History", path: "/fees/history", icon: History },
    ]
  },
  
  // Attendance & Discipline - MEDIUM-HIGH PRIORITY (Daily Monitoring)
  {
    title: "Attendance & Discipline",
    path: "/attendance",
    icon: UserCheck,
    subItems: [
      { title: "Student Attendance", path: "/attendance/students", icon: Users },
      { title: "Staff Attendance", path: "/attendance/staff", icon: GraduationCap },
      { title: "Attendance Reports", path: "/attendance/reports", icon: FileText },
      { title: "Manage Watchlist", path: "/watchlist", icon: Eye },
      { title: "Disciplinary Actions", path: "/discipline/actions", icon: AlertTriangle },
      { title: "Incident Reports", path: "/discipline/incidents", icon: FileX },
    ]
  },
  
  // Transport Management - MEDIUM PRIORITY (Operations)
  {
    title: "Transport Management",
    path: "/transport",
    icon: Bus,
    subItems: [
      { title: "Bus Routes", path: "/transport/routes", icon: MapPin },
      { title: "Track Buses", path: "/transport/track", icon: Eye },
      { title: "Transport Staff", path: "/transport/staff", icon: Users },
      { title: "Vehicle Management", path: "/transport/vehicles", icon: Settings },
      { title: "Route Allocation", path: "/transport/allocation", icon: Users },
      { title: "Transport Fees", path: "/transport/fees", icon: DollarSign },
    ]
  },
  
  // Inventory & Resources - MEDIUM PRIORITY (Resource Management)
  {
    title: "Inventory & Resources",
    path: "/inventory",
    icon: Library,
    subItems: [
      { title: "Library Management", path: "/inventory/library", icon: Library },
      { title: "Lab Equipment", path: "/inventory/lab", icon: Activity },
      { title: "Sports Equipment", path: "/inventory/sports", icon: Award },
      { title: "Classroom Resources", path: "/inventory/classroom", icon: BookOpen },
      { title: "Maintenance Requests", path: "/inventory/maintenance", icon: Settings },
      { title: "Asset Tracking", path: "/inventory/assets", icon: List },
    ]
  },
  
  // Reports & Analytics - MEDIUM PRIORITY (Analysis & Planning)
  {
    title: "Reports & Analytics",
    path: "/reports",
    icon: BarChart3,
    subItems: [
      { title: "Academic Performance", path: "/reports/academic", icon: TrendingUp },
      { title: "Attendance Reports", path: "/reports/attendance", icon: UserCheck },
      { title: "Financial Reports", path: "/reports/financial", icon: DollarSign },
      { title: "Staff Performance", path: "/reports/staff", icon: GraduationCap },
      { title: "Student Analytics", path: "/reports/students", icon: Users },
      { title: "Custom Reports", path: "/reports/custom", icon: FileText },
      { title: "Export Data", path: "/reports/export", icon: Download },
    ]
  },
  
  // User Management - LOWER-MEDIUM PRIORITY (Admin Functions)
  {
    title: "User Management",
    path: "/users",
    icon: Settings,
    subItems: [
      { title: "User Accounts", path: "/users/accounts", icon: Users },
      { title: "Role Management", path: "/users/roles", icon: Shield },
      { title: "Permissions", path: "/users/permissions", icon: Lock },
      { title: "Parent Accounts", path: "/users/parents", icon: Heart },
      { title: "Password Reset", path: "/users/password-reset", icon: Key },
      { title: "Account Activation", path: "/users/activation", icon: UserCheck },
    ]
  },
  
  // System Configuration - LOWER PRIORITY (Setup & Maintenance)
  {
    title: "System Configuration",
    path: "/system",
    icon: Cog,
    subItems: [
      { title: "School Information", path: "/system/school-info", icon: Info },
      { title: "Academic Year", path: "/system/academic-year", icon: Calendar },
      { title: "Class Configuration", path: "/system/class-config", icon: Settings },
      { title: "Backup & Restore", path: "/system/backup", icon: Database },
      { title: "System Logs", path: "/system/logs", icon: FileText },
      { title: "Security Settings", path: "/system/security", icon: Shield },
    ]
  },
  
  { title: "Settings", path: "/settings", icon: Settings },
];

// Teacher Navigation with subroutes
export const teacherNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  
  // My Schedule - High Priority (daily use)
  { title: "My Schedule", path: "/schedule", icon: Calendar },
  
  // Academics - Core Teaching Activities (highest priority)
  {
    title: "Academics",
    path: "/academics",
    icon: GraduationCap,
    subItems: [
      { title: "Mark Attendance", path: "/academics/attendance", icon: UserCheck },
      { title: "Upload Resources", path: "/academics/resources", icon: Upload },
      { title: "Search Students", path: "/academics/search-students", icon: Search },
      { title: "View Students by Class", path: "/academics/students-by-class", icon: Users },
      { title: "Student Leave Redressal", path: "/academics/leave-redressal", icon: FileX },
    ]
  },
  
  // Curriculum Management - Core Academic Planning (high priority)
  {
    title: "Curriculum Management",
    path: "/curriculum",
    icon: BookMarked,
    subItems: [
      { title: "View Syllabus", path: "/curriculum/syllabus", icon: BookOpen },
      { title: "Update Course Progress", path: "/curriculum/course-progress", icon: TrendingUp },
      { title: "Homework & Assignments", path: "/curriculum/homework", icon: FileText },
      { title: "Check Submissions & Review", path: "/curriculum/submissions", icon: ListChecks },
      { title: "Update Syllabus", path: "/curriculum/update-syllabus", icon: Edit },
    ]
  },
  
  // Exam and Test Management - Assessment Priority (high priority)
  {
    title: "Exam & Test Management",
    path: "/exams",
    icon: Award,
    subItems: [
      { title: "Update Marks", path: "/exams/marks", icon: Edit },
      { title: "View Grade Reports", path: "/exams/reports", icon: BarChart3 },
      { title: "Create Exam", path: "/exams/create", icon: Plus },
    ]
  },
  
  // Leave Request - Personal Management (medium priority)
  { title: "Leave Request", path: "/leave-request", icon: Send },
  
  // Transport Facility - Daily Commute (medium priority)
  { title: "Transport Facility", path: "/transport", icon: Bus },
  
  // Support Services - Wellbeing (lower priority but important)
  {
    title: "Support",
    path: "/support",
    icon: Heart,
    subItems: [
      { title: "Mental Health Support", path: "/support/mental-health", icon: Brain },
      { title: "Medical Support", path: "/support/medical", icon: Stethoscope },
    ]
  },
  
  { title: "Settings", path: "/settings", icon: Settings },
];


// Student Navigation with subroutes
export const studentNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  
  // Schedule Category (Class + Exam + Calendar)
  {
    title: "Schedule",
    path: "/schedule",
    icon: Calendar,
    subItems: [
      { title: "Class Timetable", path: "/schedule/timetable", icon: Clock },
      { title: "Exam Schedule", path: "/schedule/exams", icon: CalendarX },
      { title: "Academic Calendar", path: "/schedule/calendar", icon: CalendarDays },
    ]
  },
  
  // Academic Category
  {
    title: "Academic",
    path: "/academic",
    icon: GraduationCap,
    subItems: [
      { 
        title: "Syllabus & Resources", 
        path: "/syllabus", 
        icon: BookMarked,
        subItems: [
          { title: "View Syllabus", path: "/syllabus", icon: BookOpen },
          { title: "Syllabus Details", path: "/syllabus/details", icon: FileText },
          { title: "Learning Resources", path: "/syllabus/resources", icon: Folder },
        ]
      },
      { 
        title: "Assignments", 
        path: "/assignments", 
        icon: FileText,
        subItems: [
          { title: "All Assignments", path: "/assignments", icon: ListChecks },
          { title: "Submit Assignment", path: "/assignments/submit", icon: Upload },
          { title: "Assignment History", path: "/assignments/history", icon: History },
        ]
      },
    ]
  },
  
  // Results Category (Independent)
  {
    title: "Results",
    path: "/results",
    icon: Award,
    subItems: [
      { title: "Exam Results", path: "/results/exams", icon: Award },
      { title: "Grade Reports", path: "/results/grades", icon: BarChart3 },
      { title: "Progress Reports", path: "/results/progress", icon: TrendingUp },
    ]
  },
  
  // Attendance Category
  {
    title: "Attendance",
    path: "/attendance",
    icon: UserCheck,
    subItems: [
      { title: "Attendance Tracker", path: "/attendance", icon: UserCheck },
      { title: "Attendance Reports", path: "/attendance/reports", icon: FileText },
    ]
  },
  
  // Campus Services Category
  {
    title: "Campus Services",
    path: "/services",
    icon: Activity,
    subItems: [
      { 
        title: "Library Access", 
        path: "/library", 
        icon: Library,
        subItems: [
          { title: "Library Home", path: "/library", icon: Library },
          { title: "Book Search", path: "/library/search", icon: Search },
          { title: "Borrowing History", path: "/library/history", icon: History },
        ]
      },
      { title: "Transport", path: "/transport", icon: Bus },
      { 
        title: "Extracurricular", 
        path: "/extracurricular", 
        icon: Activity,
        subItems: [
          { title: "Activities Overview", path: "/extracurricular", icon: Activity },
          { title: "Clubs & Societies", path: "/extracurricular/clubs", icon: Users },
          { title: "School Events", path: "/extracurricular/events", icon: Calendar },
        ]
      },
    ]
  },
  
  // Support Category (Counselling & Medical)
  {
    title: "Support",
    path: "/support",
    icon: Heart,
    subItems: [
      { title: "Support Services", path: "/support", icon: Heart },
      { 
        title: "Counselling", 
        path: "/support/counselling", 
        icon: MessageSquare,
        subItems: [
          { title: "Request Counselling", path: "/support/counselling/request", icon: PenSquare },
          { title: "Counselling Reports", path: "/support/counselling/reports", icon: FileHeart },
        ]
      },
      { 
        title: "Medical Support", 
        path: "/support/medical", 
        icon: Stethoscope,
        subItems: [
          { title: "Medical Support", path: "/support/medical", icon: Stethoscope },
          { title: "Health Records", path: "/support/health-records", icon: FileText },
        ]
      },
    ]
  },
  
  { title: "Settings", path: "/settings", icon: Settings },
];

export const parentNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  
  // Schedule Category
  {
    title: "Schedule",
    path: "/schedule",
    icon: Calendar,
    subItems: [
      { title: "Class Timetable", path: "/schedule/timetable", icon: Clock },
      { title: "Exam Schedule", path: "/schedule/exams", icon: CalendarX },
      { title: "Academic Calendar", path: "/schedule/calendar", icon: CalendarDays },
    ]
  },
  
  // Attendance Category
  {
    title: "Attendance",
    path: "/attendance",
    icon: UserCheck,
    subItems: [
      { title: "Attendance Tracker", path: "/attendance", icon: UserCheck },
      { title: "Attendance Reports", path: "/attendance/reports", icon: FileText },
      { title: "Leave Request", path: "/attendance/leave-request", icon: Send },
      { title: "Leave History", path: "/attendance/leave-history", icon: History },
    ]
  },
  
  // Transport Category
  {
    title: "Transport",
    path: "/transport",
    icon: Bus,
    subItems: [
      { title: "Bus Schedule", path: "/transport/schedule", icon: Clock },
      { title: "Track Your Child", path: "/transport/track", icon: MapPin },
      { title: "Transport Notifications", path: "/transport/notifications", icon: Bell },
    ]
  },
  
  // Academic Category
  {
    title: "Academic",
    path: "/academic",
    icon: GraduationCap,
    subItems: [
      { 
        title: "Syllabus", 
        path: "/academic/syllabus", 
        icon: BookMarked,
        subItems: [
          { title: "View Syllabus", path: "/academic/syllabus", icon: BookOpen },
          { title: "Syllabus Details", path: "/academic/syllabus/details", icon: FileText },
        ]
      },
      { 
        title: "Assignments", 
        path: "/academic/assignments", 
        icon: FileText,
        subItems: [
          { title: "Pending Assignments", path: "/academic/assignments", icon: FileX },
          { title: "Assignment History", path: "/academic/assignments/history", icon: History },
        ]
      },
      { 
        title: "Results", 
        path: "/academic/results", 
        icon: Award,
        subItems: [
          { title: "Exam Results", path: "/academic/results", icon: Award },
          { title: "Grade Reports", path: "/academic/grades", icon: BarChart3 },
        ]
      },
      { title: "Progress Tracker", path: "/academic/progress", icon: TrendingUp },
      { 
        title: "Library", 
        path: "/academic/library", 
        icon: Library,
        subItems: [
          { title: "Library Access", path: "/academic/library", icon: Library },
          { title: "Borrowing History", path: "/academic/library/history", icon: History },
        ]
      },
    ]
  },
  
  // Fees Category
  {
    title: "Fees",
    path: "/fees",
    icon: DollarSign,
    subItems: [
      { title: "Fees Overview", path: "/fees", icon: DollarSign },
      { title: "Outstanding Dues", path: "/fees/dues", icon: CreditCard },
      { title: "Payment Receipts", path: "/fees/receipts", icon: Receipt },
      { title: "Payment History", path: "/fees/history", icon: History },
    ]
  },
  
  // Support Category (Counselling & Medical)
  {
    title: "Support",
    path: "/support",
    icon: Heart,
    subItems: [
      { title: "Support Services", path: "/support", icon: Heart },
      { 
        title: "Counselling", 
        path: "/support/counselling", 
        icon: MessageSquare,
        subItems: [
          { title: "Counselling Services", path: "/support/counselling", icon: MessageSquare },
          { title: "Request Counselling", path: "/support/counselling/request", icon: PenSquare },
          { title: "Counselling Reports", path: "/support/counselling/reports", icon: FileHeart },
          { title: "Counselling History", path: "/support/counselling/history", icon: History },
        ]
      },
      { 
        title: "Medical Support", 
        path: "/support/medical", 
        icon: Stethoscope,
        subItems: [
          { title: "Medical Support", path: "/support/medical", icon: Stethoscope },
          { title: "Health Records", path: "/support/health-records", icon: FileText },
          { title: "Medical Alerts", path: "/support/medical-alerts", icon: AlertTriangle },
          { title: "Vaccination Records", path: "/support/vaccination", icon: Syringe },
        ]
      },
    ]
  },
  
  // Communication Category
  {
    title: "Communication",
    path: "/communication",
    icon: MessageSquare,
    subItems: [
      { title: "Messages", path: "/messages", icon: MessageSquare },
      { title: "Notifications", path: "/notifications", icon: Bell },
    ]
  },
  
  { title: "Settings", path: "/settings", icon: Settings },
];



export const principalNavigation: NavigationItem[] = [
  { title: "Dashboard", path: "/dashboard", icon: Home },
  
  // Staff Management - Flattened structure
  {
    title: "Staff Management",
    path: "/staff",
    icon: Users,
    subItems: [
      { title: "Teacher Directory", path: "/staff/teachers", icon: GraduationCap },
      { title: "Search Teachers", path: "/staff/teachers/search", icon: Search },
      { title: "Approve Teachers", path: "/staff/teachers/approve", icon: UserCheck },
      { title: "Teacher Leave Requests", path: "/staff/leave/teachers", icon: CalendarX },
      { title: "Staff Leave Requests", path: "/staff/leave/staff", icon: CalendarX },
      { title: "Leave History", path: "/staff/leave/history", icon: History },
    ]
  },
  
  // Student Management - Flattened structure
  {
    title: "Student Management",
    path: "/students",
    icon: GraduationCap,
    subItems: [
      { title: "Student Directory", path: "/students", icon: List },
      { title: "Search Students", path: "/students/search", icon: Search },
      { title: "Approve Admissions", path: "/students/admissions", icon: UserPlus },
      { title: "Disciplinary Watchlist", path: "/students/disciplinary/watchlist", icon: Eye },
      { title: "Incident Reports", path: "/students/disciplinary/incidents", icon: FileX },
      { title: "Disciplinary Actions", path: "/students/disciplinary/actions", icon: AlertTriangle },
    ]
  },
  
  // Academic Oversight - Flattened structure
  {
    title: "Academic Oversight",
    path: "/academic",
    icon: BookMarked,
    subItems: [
      { title: "Review Syllabus", path: "/academic/curriculum/syllabus", icon: BookMarked },
      { title: "Class Progress", path: "/academic/curriculum/progress", icon: TrendingUp },
      { title: "Subject Allocation", path: "/academic/curriculum/allocation", icon: Edit },
      { title: "Academic Reports", path: "/academic/reports", icon: BarChart3 },
      { title: "Performance Analytics", path: "/academic/analytics", icon: TrendingUp },
    ]
  },
  
  // Events & Activities
  {
    title: "Events & Activities",
    path: "/events",
    icon: Calendar,
    subItems: [
      { title: "Schedule Event", path: "/events/schedule", icon: CalendarPlus },
      { title: "Manage Events", path: "/events/manage", icon: Edit },
      { title: "Event Calendar", path: "/events/calendar", icon: CalendarDays },
      { title: "Event Reports", path: "/events/reports", icon: FileText },
    ]
  },
  
  // Support & Counselling - Flattened structure
  {
    title: "Support & Counselling",
    path: "/support",
    icon: Heart,
    subItems: [
      { title: "Counselling Reports", path: "/support/counselling/reports", icon: FileHeart },
      { title: "Student Welfare", path: "/support/counselling/welfare", icon: Heart },
      { title: "Counselor Management", path: "/support/counselling/management", icon: Users },
      { title: "Medical Support", path: "/support/medical", icon: Stethoscope },
    ]
  },
  
  // Grievance Management
  {
    title: "Grievance Management",
    path: "/grievance",
    icon: MessageSquare,
    subItems: [
      { title: "Parent Grievances", path: "/grievance/parents", icon: Users },
      { title: "Student Grievances", path: "/grievance/students", icon: GraduationCap },
      { title: "Staff Grievances", path: "/grievance/staff", icon: UserCheck },
      { title: "Grievance Analytics", path: "/grievance/analytics", icon: BarChart3 },
    ]
  },
  
  // Transport Management
  {
    title: "Transport Management",
    path: "/transport",
    icon: Bus,
    subItems: [
      { title: "Bus Tracking", path: "/transport/tracking", icon: MapPin },
      { title: "Route Management", path: "/transport/routes", icon: Settings },
      { title: "Driver Management", path: "/transport/drivers", icon: Users },
      { title: "Transport Reports", path: "/transport/reports", icon: FileText },
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
    case 'parent':
      return parentNavigation;
    case 'principal':
      return principalNavigation;
    default:
      return studentNavigation;
  }
};