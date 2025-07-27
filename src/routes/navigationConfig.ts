import {
  Plus,
  Info,
  Edit,
  List,
  Eye,
  UserPlus,
  BookPlus,
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