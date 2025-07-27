import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Student Management Components
const AdminStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - All Students</h1><p>View and manage all student records</p></div>;
const AdminSearchStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Search Students</h1><p>Search and filter student records</p></div>;
const AdminAdmitStudentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Admit Student</h1><p>Process new student admissions</p></div>;
const AdminStudentRecordsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Student Records</h1><p>Manage student academic and personal records</p></div>;
const AdminPromoteStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Promote Students</h1><p>Promote students to next grade/class</p></div>;
const AdminTransferStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Transfer Students</h1><p>Process student transfers between schools</p></div>;

// Staff Management Components
const AdminStaffPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - All Staff</h1><p>View and manage all staff members</p></div>;
const AdminSearchStaffPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Search Staff</h1><p>Search and filter staff records</p></div>;
const AdminAddStaffPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Add Staff</h1><p>Add new staff members to the system</p></div>;
const AdminAssignClassPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Assign Class to Teacher</h1><p>Assign classes and subjects to teachers</p></div>;
const AdminStaffAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Staff Attendance</h1><p>Monitor and manage staff attendance</p></div>;
const AdminLeaveApprovalPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Leave Approval</h1><p>Review and approve staff and faculty leave requests</p></div>;
const AdminStaffPerformancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Staff Performance</h1><p>Monitor and evaluate staff performance</p></div>;

// Academic Management Components
const AdminAcademicPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Academic Management</h1><p>Manage academic operations and curriculum</p></div>;
const AdminClassesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Classes & Sections</h1><p>Manage class divisions and sections</p></div>;
const AdminSubjectsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Subjects Management</h1><p>Manage subjects and course offerings</p></div>;
const AdminCurriculumPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Curriculum Planning</h1><p>Plan and manage curriculum structure</p></div>;
const AdminExamsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Exam Management</h1><p>Manage examination schedules and processes</p></div>;
const AdminGradesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Grade Configuration</h1><p>Configure grading system and criteria</p></div>;
const AdminAcademicReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Academic Reports</h1><p>Generate and view academic performance reports</p></div>;

// Calendar Management Components
const AdminCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Calendar Management</h1><p>Manage school calendar and events</p></div>;
const AdminAcademicCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Academic Calendar</h1><p>Manage academic year calendar</p></div>;
const AdminExamCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Exam Calendar</h1><p>Schedule and manage examination dates</p></div>;
const AdminEventCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Event Calendar</h1><p>Plan and manage school events</p></div>;
const AdminHolidaysPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Holiday Management</h1><p>Manage school holidays and breaks</p></div>;
const AdminPTMSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Parent-Teacher Meeting</h1><p>Schedule parent-teacher meeting sessions</p></div>;
const AdminSchoolHoursPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - School Hours</h1><p>Configure daily school timings</p></div>;

// Communication Components
const AdminNoticesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Notice Center</h1><p>Manage all notice communications</p></div>;
const AdminSchoolWideNoticePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - School-wide Notice</h1><p>Send notices to entire school</p></div>;
const AdminClassWideNoticePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Class-wide Notice</h1><p>Send notices to specific classes</p></div>;
const AdminParentsNoticePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Notice to Parents</h1><p>Send notices to all or specific parents</p></div>;
const AdminTeachersNoticePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Notice to Teachers</h1><p>Send notices to teaching staff</p></div>;
const AdminAlertsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - SMS/Email Alerts</h1><p>Send urgent alerts via SMS and email</p></div>;
const AdminNoticeTemplatesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Notice Templates</h1><p>Manage notice templates for quick communication</p></div>;

// Fees Management Components
const AdminFeesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Fees Management</h1><p>Manage all fee-related activities</p></div>;
const AdminFeeStructurePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Fee Structure</h1><p>View and manage fee structure</p></div>;
const AdminDepositFeePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Collect Fees</h1><p>Process fee payments and deposits</p></div>;
const AdminPendingDuesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Pending Dues</h1><p>View and manage pending fee payments</p></div>;
const AdminFeeReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Fee Reports</h1><p>Generate fee collection and analysis reports</p></div>;
const AdminConcessionPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Fee Concessions</h1><p>Manage fee concessions and waivers</p></div>;
const AdminFeeCategoriesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Fee Categories</h1><p>Manage different fee categories and types</p></div>;
const AdminPaymentHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Payment History</h1><p>View complete payment transaction history</p></div>;

// Attendance & Discipline Components
const AdminAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Attendance Management</h1><p>Manage student and staff attendance</p></div>;
const AdminStudentAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Student Attendance</h1><p>Monitor and manage student attendance</p></div>;
const AdminStaffAttendanceManagePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Staff Attendance</h1><p>Monitor and manage staff attendance</p></div>;
const AdminAttendanceReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Attendance Reports</h1><p>Generate attendance analysis reports</p></div>;
const AdminWatchlistPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Manage Watchlist</h1><p>Manage student disciplinary watchlist</p></div>;
const AdminDisciplinaryActionsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Disciplinary Actions</h1><p>Manage disciplinary measures and actions</p></div>;
const AdminIncidentReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Incident Reports</h1><p>View and manage incident reports</p></div>;

// Transport Management Components
const AdminTransportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Transport Management</h1><p>Manage school transport services</p></div>;
const AdminBusRoutesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Bus Routes</h1><p>Manage bus routes and schedules</p></div>;
const AdminTrackBusPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Track Buses</h1><p>Real-time bus tracking and monitoring</p></div>;
const AdminTransportStaffPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Transport Staff</h1><p>Manage transport staff members</p></div>;
const AdminVehicleManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Vehicle Management</h1><p>Manage school vehicles and maintenance</p></div>;
const AdminRouteAllocationPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Route Allocation</h1><p>Allocate students to transport routes</p></div>;
const AdminTransportFeesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Transport Fees</h1><p>Manage transport fee collection</p></div>;

// Inventory & Resources Components
const AdminInventoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Inventory Management</h1><p>Manage school resources and inventory</p></div>;
const AdminLibraryManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Library Management</h1><p>Manage library books and resources</p></div>;
const AdminLabEquipmentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Lab Equipment</h1><p>Manage laboratory equipment and supplies</p></div>;
const AdminSportsEquipmentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Sports Equipment</h1><p>Manage sports equipment and facilities</p></div>;
const AdminClassroomResourcesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Classroom Resources</h1><p>Manage classroom supplies and equipment</p></div>;
const AdminMaintenanceRequestsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Maintenance Requests</h1><p>Handle facility maintenance requests</p></div>;
const AdminAssetTrackingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Asset Tracking</h1><p>Track school assets and equipment</p></div>;

// Reports & Analytics Components
const AdminReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Reports & Analytics</h1><p>Generate comprehensive school reports</p></div>;
const AdminAcademicPerformancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Academic Performance</h1><p>Analyze academic performance metrics</p></div>;
const AdminAttendanceReportsAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Attendance Reports</h1><p>Detailed attendance analysis and reports</p></div>;
const AdminFinancialReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Financial Reports</h1><p>Financial analysis and revenue reports</p></div>;
const AdminStaffPerformanceReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Staff Performance Reports</h1><p>Staff evaluation and performance analysis</p></div>;
const AdminStudentAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Student Analytics</h1><p>Student behavior and performance analytics</p></div>;
const AdminCustomReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Custom Reports</h1><p>Create custom reports and dashboards</p></div>;
const AdminExportDataPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Export Data</h1><p>Export data in various formats</p></div>;

// User Management Components
const AdminUsersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - User Management</h1><p>Manage system users and accounts</p></div>;
const AdminUserAccountsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - User Accounts</h1><p>Manage all user accounts in the system</p></div>;
const AdminRoleManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Role Management</h1><p>Manage user roles and responsibilities</p></div>;
const AdminPermissionsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Permissions</h1><p>Configure user permissions and access levels</p></div>;
const AdminParentAccountsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Parent Accounts</h1><p>Manage parent user accounts</p></div>;
const AdminPasswordResetPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Password Reset</h1><p>Handle password reset requests</p></div>;
const AdminAccountActivationPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Account Activation</h1><p>Activate and deactivate user accounts</p></div>;

// System Configuration Components
const AdminSystemPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - System Configuration</h1><p>Configure system-wide settings</p></div>;
const AdminSchoolInfoPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - School Information</h1><p>Manage school basic information and details</p></div>;
const AdminAcademicYearPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Academic Year</h1><p>Configure academic year settings</p></div>;
const AdminClassConfigPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Class Configuration</h1><p>Configure class structures and hierarchies</p></div>;
const AdminBackupPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Backup & Restore</h1><p>Manage data backup and restoration</p></div>;
const AdminSystemLogsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - System Logs</h1><p>View system activity and error logs</p></div>;
const AdminSecuritySettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Security Settings</h1><p>Configure security policies and settings</p></div>;

// Settings Component
const AdminSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Settings</h1><p>General system settings and preferences</p></div>;

export const adminRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Student Management routes
  <Route key="students" path="students" element={<AdminStudentsPage />} />,
  <Route key="students-search" path="students/search" element={<AdminSearchStudentsPage />} />,
  <Route key="students-admit" path="students/admit" element={<AdminAdmitStudentPage />} />,
  <Route key="students-records" path="students/records" element={<AdminStudentRecordsPage />} />,
  <Route key="students-promote" path="students/promote" element={<AdminPromoteStudentsPage />} />,
  <Route key="students-transfer" path="students/transfer" element={<AdminTransferStudentsPage />} />,
  
  // Staff Management routes
  <Route key="staff" path="staff" element={<AdminStaffPage />} />,
  <Route key="staff-search" path="staff/search" element={<AdminSearchStaffPage />} />,
  <Route key="staff-add" path="staff/add" element={<AdminAddStaffPage />} />,
  <Route key="staff-assign-class" path="staff/assign-class" element={<AdminAssignClassPage />} />,
  <Route key="staff-attendance" path="staff/attendance" element={<AdminStaffAttendancePage />} />,
  <Route key="staff-leave-approval" path="staff/leave-approval" element={<AdminLeaveApprovalPage />} />,
  <Route key="staff-performance" path="staff/performance" element={<AdminStaffPerformancePage />} />,
  
  // Academic Management routes
  <Route key="academic" path="academic" element={<AdminAcademicPage />} />,
  <Route key="academic-classes" path="academic/classes" element={<AdminClassesPage />} />,
  <Route key="academic-subjects" path="academic/subjects" element={<AdminSubjectsPage />} />,
  <Route key="academic-curriculum" path="academic/curriculum" element={<AdminCurriculumPage />} />,
  <Route key="academic-exams" path="academic/exams" element={<AdminExamsPage />} />,
  <Route key="academic-grades" path="academic/grades" element={<AdminGradesPage />} />,
  <Route key="academic-reports" path="academic/reports" element={<AdminAcademicReportsPage />} />,
  
  // Calendar Management routes
  <Route key="calendar" path="calendar" element={<AdminCalendarPage />} />,
  <Route key="calendar-academic" path="calendar/academic" element={<AdminAcademicCalendarPage />} />,
  <Route key="calendar-exam" path="calendar/exam" element={<AdminExamCalendarPage />} />,
  <Route key="calendar-event" path="calendar/event" element={<AdminEventCalendarPage />} />,
  <Route key="calendar-holidays" path="calendar/holidays" element={<AdminHolidaysPage />} />,
  <Route key="calendar-ptm" path="calendar/ptm" element={<AdminPTMSchedulePage />} />,
  <Route key="calendar-hours" path="calendar/hours" element={<AdminSchoolHoursPage />} />,
  
  // Communication routes
  <Route key="notices" path="notices" element={<AdminNoticesPage />} />,
  <Route key="notices-school-wide" path="notices/school-wide" element={<AdminSchoolWideNoticePage />} />,
  <Route key="notices-class-wide" path="notices/class-wide" element={<AdminClassWideNoticePage />} />,
  <Route key="notices-parents" path="notices/parents" element={<AdminParentsNoticePage />} />,
  <Route key="notices-teachers" path="notices/teachers" element={<AdminTeachersNoticePage />} />,
  <Route key="notices-alerts" path="notices/alerts" element={<AdminAlertsPage />} />,
  <Route key="notices-templates" path="notices/templates" element={<AdminNoticeTemplatesPage />} />,
  
  // Fees Management routes
  <Route key="fees" path="fees" element={<AdminFeesPage />} />,
  <Route key="fees-structure" path="fees/structure" element={<AdminFeeStructurePage />} />,
  <Route key="fees-deposit" path="fees/deposit" element={<AdminDepositFeePage />} />,
  <Route key="fees-pending" path="fees/pending" element={<AdminPendingDuesPage />} />,
  <Route key="fees-reports" path="fees/reports" element={<AdminFeeReportsPage />} />,
  <Route key="fees-concession" path="fees/concession" element={<AdminConcessionPage />} />,
  <Route key="fees-categories" path="fees/categories" element={<AdminFeeCategoriesPage />} />,
  <Route key="fees-history" path="fees/history" element={<AdminPaymentHistoryPage />} />,
  
  // Attendance & Discipline routes
  <Route key="attendance" path="attendance" element={<AdminAttendancePage />} />,
  <Route key="attendance-students" path="attendance/students" element={<AdminStudentAttendancePage />} />,
  <Route key="attendance-staff" path="attendance/staff" element={<AdminStaffAttendanceManagePage />} />,
  <Route key="attendance-reports" path="attendance/reports" element={<AdminAttendanceReportsPage />} />,
  <Route key="watchlist" path="watchlist" element={<AdminWatchlistPage />} />,
  <Route key="discipline-actions" path="discipline/actions" element={<AdminDisciplinaryActionsPage />} />,
  <Route key="discipline-incidents" path="discipline/incidents" element={<AdminIncidentReportsPage />} />,
  
  // Transport Management routes
  <Route key="transport" path="transport" element={<AdminTransportPage />} />,
  <Route key="transport-routes" path="transport/routes" element={<AdminBusRoutesPage />} />,
  <Route key="transport-track" path="transport/track" element={<AdminTrackBusPage />} />,
  <Route key="transport-staff" path="transport/staff" element={<AdminTransportStaffPage />} />,
  <Route key="transport-vehicles" path="transport/vehicles" element={<AdminVehicleManagementPage />} />,
  <Route key="transport-allocation" path="transport/allocation" element={<AdminRouteAllocationPage />} />,
  <Route key="transport-fees" path="transport/fees" element={<AdminTransportFeesPage />} />,
  
  // Inventory & Resources routes
  <Route key="inventory" path="inventory" element={<AdminInventoryPage />} />,
  <Route key="inventory-library" path="inventory/library" element={<AdminLibraryManagementPage />} />,
  <Route key="inventory-lab" path="inventory/lab" element={<AdminLabEquipmentPage />} />,
  <Route key="inventory-sports" path="inventory/sports" element={<AdminSportsEquipmentPage />} />,
  <Route key="inventory-classroom" path="inventory/classroom" element={<AdminClassroomResourcesPage />} />,
  <Route key="inventory-maintenance" path="inventory/maintenance" element={<AdminMaintenanceRequestsPage />} />,
  <Route key="inventory-assets" path="inventory/assets" element={<AdminAssetTrackingPage />} />,
  
  // Reports & Analytics routes
  <Route key="reports" path="reports" element={<AdminReportsPage />} />,
  <Route key="reports-academic" path="reports/academic" element={<AdminAcademicPerformancePage />} />,
  <Route key="reports-attendance" path="reports/attendance" element={<AdminAttendanceReportsAnalyticsPage />} />,
  <Route key="reports-financial" path="reports/financial" element={<AdminFinancialReportsPage />} />,
  <Route key="reports-staff" path="reports/staff" element={<AdminStaffPerformanceReportsPage />} />,
  <Route key="reports-students" path="reports/students" element={<AdminStudentAnalyticsPage />} />,
  <Route key="reports-custom" path="reports/custom" element={<AdminCustomReportsPage />} />,
  <Route key="reports-export" path="reports/export" element={<AdminExportDataPage />} />,
  
  // User Management routes
  <Route key="users" path="users" element={<AdminUsersPage />} />,
  <Route key="users-accounts" path="users/accounts" element={<AdminUserAccountsPage />} />,
  <Route key="users-roles" path="users/roles" element={<AdminRoleManagementPage />} />,
  <Route key="users-permissions" path="users/permissions" element={<AdminPermissionsPage />} />,
  <Route key="users-parents" path="users/parents" element={<AdminParentAccountsPage />} />,
  <Route key="users-password-reset" path="users/password-reset" element={<AdminPasswordResetPage />} />,
  <Route key="users-activation" path="users/activation" element={<AdminAccountActivationPage />} />,
  
  // System Configuration routes
  <Route key="system" path="system" element={<AdminSystemPage />} />,
  <Route key="system-school-info" path="system/school-info" element={<AdminSchoolInfoPage />} />,
  <Route key="system-academic-year" path="system/academic-year" element={<AdminAcademicYearPage />} />,
  <Route key="system-class-config" path="system/class-config" element={<AdminClassConfigPage />} />,
  <Route key="system-backup" path="system/backup" element={<AdminBackupPage />} />,
  <Route key="system-logs" path="system/logs" element={<AdminSystemLogsPage />} />,
  <Route key="system-security" path="system/security" element={<AdminSecuritySettingsPage />} />,
  
  <Route key="settings" path="settings" element={<AdminSettingsPage />} />,
];