import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Staff Management Components
const PrincipalTeachersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Teacher Directory</h1><p>View all teachers and their information</p></div>;
const PrincipalSearchTeachersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Search Teachers</h1><p>Search and filter teacher records</p></div>;
const PrincipalApproveTeachersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Approve Teachers</h1><p>Review and approve teacher applications after interviews</p></div>;

const PrincipalTeacherLeavePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Teacher Leave Requests</h1><p>Review and approve teacher leave requests</p></div>;
const PrincipalStaffLeavePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Staff Leave Requests</h1><p>Review and approve staff leave requests</p></div>;
const PrincipalLeaveHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Leave History</h1><p>View complete leave history and analytics</p></div>;

// Student Management Components
const PrincipalStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Student Directory</h1><p>View all students and their information</p></div>;
const PrincipalSearchStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Search Students</h1><p>Search and filter student records</p></div>;
const PrincipalApproveAdmissionsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Approve Admissions</h1><p>Review and approve student admission applications</p></div>;

const PrincipalWatchlistPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Disciplinary Watchlist</h1><p>Monitor students with disciplinary concerns</p></div>;
const PrincipalIncidentReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Incident Reports</h1><p>View and manage disciplinary incident reports</p></div>;
const PrincipalDisciplinaryActionsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Disciplinary Actions</h1><p>Manage disciplinary actions and decisions</p></div>;

// Academic Oversight Components
const PrincipalReviewSyllabusPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Review Syllabus</h1><p>Review and approve curriculum and syllabus changes</p></div>;
const PrincipalClassProgressPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Class Progress</h1><p>Monitor academic progress across all classes</p></div>;
const PrincipalSubjectAllocationPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Subject Allocation</h1><p>Manage teacher-subject assignments</p></div>;
const PrincipalAcademicReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Academic Reports</h1><p>View comprehensive academic performance reports</p></div>;
const PrincipalAcademicAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Academic Analytics</h1><p>Analyze school-wide academic performance trends</p></div>;

// Events & Activities Components
const PrincipalScheduleEventPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Schedule Event</h1><p>Plan and schedule school events and activities</p></div>;
const PrincipalManageEventsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Manage Events</h1><p>Edit and manage existing school events</p></div>;
const PrincipalEventCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Event Calendar</h1><p>View comprehensive school event calendar</p></div>;
const PrincipalEventReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Event Reports</h1><p>View event participation and success metrics</p></div>;

// Support Services Components
const PrincipalCounsellingReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Counselling Reports</h1><p>Review student counselling reports and outcomes</p></div>;
const PrincipalStudentWelfarePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Student Welfare</h1><p>Monitor overall student welfare and wellbeing</p></div>;
const PrincipalCounselorManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Counselor Management</h1><p>Manage school counselors and support staff</p></div>;
const PrincipalMedicalSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Medical Support</h1><p>Oversee school medical services and health programs</p></div>;

// Grievance Management Components
const PrincipalParentGrievancesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Parent Grievances</h1><p>Handle and resolve parent complaints and concerns</p></div>;
const PrincipalStudentGrievancesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Student Grievances</h1><p>Address student complaints and concerns</p></div>;
const PrincipalStaffGrievancesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Staff Grievances</h1><p>Handle staff complaints and workplace issues</p></div>;
const PrincipalGrievanceAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Grievance Analytics</h1><p>Analyze grievance patterns and resolution metrics</p></div>;

// Transport Management Components
const PrincipalBusTrackingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Bus Tracking</h1><p>Monitor all school buses in real-time</p></div>;
const PrincipalRouteManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Route Management</h1><p>Manage and optimize bus routes</p></div>;
const PrincipalDriverManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Driver Management</h1><p>Manage bus drivers and transport staff</p></div>;
const PrincipalTransportReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Transport Reports</h1><p>View transport efficiency and safety reports</p></div>;

// Settings Component
const PrincipalSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Principal - Settings</h1><p>Manage your preferences and system settings</p></div>;

export const principalRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Staff Management routes
  <Route key="staff-teachers" path="staff/teachers" element={<PrincipalTeachersPage />} />,
  <Route key="staff-teachers-search" path="staff/teachers/search" element={<PrincipalSearchTeachersPage />} />,
  <Route key="staff-teachers-approve" path="staff/teachers/approve" element={<PrincipalApproveTeachersPage />} />,
  
  <Route key="staff-leave-teachers" path="staff/leave/teachers" element={<PrincipalTeacherLeavePage />} />,
  <Route key="staff-leave-staff" path="staff/leave/staff" element={<PrincipalStaffLeavePage />} />,
  <Route key="staff-leave-history" path="staff/leave/history" element={<PrincipalLeaveHistoryPage />} />,
  
  // Student Management routes
  <Route key="students" path="students" element={<PrincipalStudentsPage />} />,
  <Route key="students-search" path="students/search" element={<PrincipalSearchStudentsPage />} />,
  <Route key="students-admissions" path="students/admissions" element={<PrincipalApproveAdmissionsPage />} />,
  
  <Route key="students-disciplinary-watchlist" path="students/disciplinary/watchlist" element={<PrincipalWatchlistPage />} />,
  <Route key="students-disciplinary-incidents" path="students/disciplinary/incidents" element={<PrincipalIncidentReportsPage />} />,
  <Route key="students-disciplinary-actions" path="students/disciplinary/actions" element={<PrincipalDisciplinaryActionsPage />} />,
  
  // Academic Oversight routes
  <Route key="academic-curriculum-syllabus" path="academic/curriculum/syllabus" element={<PrincipalReviewSyllabusPage />} />,
  <Route key="academic-curriculum-progress" path="academic/curriculum/progress" element={<PrincipalClassProgressPage />} />,
  <Route key="academic-curriculum-allocation" path="academic/curriculum/allocation" element={<PrincipalSubjectAllocationPage />} />,
  <Route key="academic-reports" path="academic/reports" element={<PrincipalAcademicReportsPage />} />,
  <Route key="academic-analytics" path="academic/analytics" element={<PrincipalAcademicAnalyticsPage />} />,
  
  // Events & Activities routes
  <Route key="events-schedule" path="events/schedule" element={<PrincipalScheduleEventPage />} />,
  <Route key="events-manage" path="events/manage" element={<PrincipalManageEventsPage />} />,
  <Route key="events-calendar" path="events/calendar" element={<PrincipalEventCalendarPage />} />,
  <Route key="events-reports" path="events/reports" element={<PrincipalEventReportsPage />} />,
  
  // Support Services routes
  <Route key="support-counselling-reports" path="support/counselling/reports" element={<PrincipalCounsellingReportsPage />} />,
  <Route key="support-counselling-welfare" path="support/counselling/welfare" element={<PrincipalStudentWelfarePage />} />,
  <Route key="support-counselling-management" path="support/counselling/management" element={<PrincipalCounselorManagementPage />} />,
  <Route key="support-medical" path="support/medical" element={<PrincipalMedicalSupportPage />} />,
  
  // Grievance Management routes
  <Route key="grievance-parents" path="grievance/parents" element={<PrincipalParentGrievancesPage />} />,
  <Route key="grievance-students" path="grievance/students" element={<PrincipalStudentGrievancesPage />} />,
  <Route key="grievance-staff" path="grievance/staff" element={<PrincipalStaffGrievancesPage />} />,
  <Route key="grievance-analytics" path="grievance/analytics" element={<PrincipalGrievanceAnalyticsPage />} />,
  
  // Transport Management routes
  <Route key="transport-tracking" path="transport/tracking" element={<PrincipalBusTrackingPage />} />,
  <Route key="transport-routes" path="transport/routes" element={<PrincipalRouteManagementPage />} />,
  <Route key="transport-drivers" path="transport/drivers" element={<PrincipalDriverManagementPage />} />,
  <Route key="transport-reports" path="transport/reports" element={<PrincipalTransportReportsPage />} />,
  
  <Route key="settings" path="settings" element={<PrincipalSettingsPage />} />,
];