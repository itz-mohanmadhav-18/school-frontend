import React from "react";
import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Admin Students components
const AdminStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - All Students</h1><p>Full access to student records, enrollment, etc.</p></div>;
const AdminAddStudentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Add Student</h1><p>Add new student to the system</p></div>;
const AdminStudentInfoPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Student Information</h1><p>View detailed student information</p></div>;
const AdminStudentEnrollmentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Manage Enrollment</h1><p>Manage student course enrollments</p></div>;

// Admin Teachers components
const AdminTeachersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - All Teachers</h1><p>Manage teacher accounts and assignments</p></div>;
const AdminAddTeacherPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Add Teacher</h1><p>Add new teacher to the system</p></div>;
const AdminTeacherInfoPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Teacher Information</h1><p>View detailed teacher information</p></div>;
const AdminAssignClassesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Assign Classes</h1><p>Assign classes to teachers</p></div>;
const AdminTeacherPerformancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Teacher Performance</h1><p>View teacher performance metrics</p></div>;

// Admin Courses components
const AdminCoursesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - All Courses</h1><p>Create and manage all courses</p></div>;
const AdminAddCoursePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Add Course</h1><p>Create new course</p></div>;
const AdminCourseDetailsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Course Details</h1><p>View and edit course details</p></div>;
const AdminAssignTeachersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Assign Teachers</h1><p>Assign teachers to courses</p></div>;
const AdminCourseMaterialsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Course Materials</h1><p>Manage course materials and resources</p></div>;

// Admin Schedule components
const AdminSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - View Schedule</h1><p>Manage school-wide schedules</p></div>;
const AdminCreateSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Create Schedule</h1><p>Create new schedule</p></div>;
const AdminTimetablePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Manage Timetable</h1><p>Manage class timetables</p></div>;
const AdminRoomAllocationPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Room Allocation</h1><p>Manage room assignments</p></div>;

// Admin Reports components
const AdminReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Academic Reports</h1><p>View comprehensive school reports</p></div>;
const AdminAttendanceReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Attendance Reports</h1><p>View attendance analytics</p></div>;
const AdminPerformanceAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Performance Analytics</h1><p>Analyze academic performance</p></div>;
const AdminFinancialReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Financial Reports</h1><p>View financial reports</p></div>;

// Admin Assignments components
const AdminAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - All Assignments</h1><p>Monitor all assignments across school</p></div>;
const AdminAssignmentOverviewPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Assignment Overview</h1><p>Overview of all assignments</p></div>;
const AdminGradeManagementPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Grade Management</h1><p>Manage grading system</p></div>;
const AdminAssignmentAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Assignment Analytics</h1><p>Assignment performance analytics</p></div>;

const AdminSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - System Settings</h1><p>Manage system-wide settings</p></div>;

export const adminRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Students routes
  <Route key="students" path="students" element={<AdminStudentsPage />} />,
  <Route key="students-add" path="students/add" element={<AdminAddStudentPage />} />,
  <Route key="students-info" path="students/info" element={<AdminStudentInfoPage />} />,
  <Route key="students-enrollment" path="students/enrollment" element={<AdminStudentEnrollmentPage />} />,
  
  // Teachers routes
  <Route key="teachers" path="teachers" element={<AdminTeachersPage />} />,
  <Route key="teachers-add" path="teachers/add" element={<AdminAddTeacherPage />} />,
  <Route key="teachers-info" path="teachers/info" element={<AdminTeacherInfoPage />} />,
  <Route key="teachers-assign-classes" path="teachers/assign-classes" element={<AdminAssignClassesPage />} />,
  <Route key="teachers-performance" path="teachers/performance" element={<AdminTeacherPerformancePage />} />,
  
  // Courses routes
  <Route key="courses" path="courses" element={<AdminCoursesPage />} />,
  <Route key="courses-add" path="courses/add" element={<AdminAddCoursePage />} />,
  <Route key="courses-details" path="courses/details" element={<AdminCourseDetailsPage />} />,
  <Route key="courses-assign-teachers" path="courses/assign-teachers" element={<AdminAssignTeachersPage />} />,
  <Route key="courses-materials" path="courses/materials" element={<AdminCourseMaterialsPage />} />,
  
  // Schedule routes
  <Route key="schedule" path="schedule" element={<AdminSchedulePage />} />,
  <Route key="schedule-create" path="schedule/create" element={<AdminCreateSchedulePage />} />,
  <Route key="schedule-timetable" path="schedule/timetable" element={<AdminTimetablePage />} />,
  <Route key="schedule-rooms" path="schedule/rooms" element={<AdminRoomAllocationPage />} />,
  
  // Reports routes
  <Route key="reports-academic" path="reports" element={<AdminReportsPage />} />,
  <Route key="reports-academic-full" path="reports/academic" element={<AdminReportsPage />} />,
  <Route key="reports-attendance" path="reports/attendance" element={<AdminAttendanceReportsPage />} />,
  <Route key="reports-performance" path="reports/performance" element={<AdminPerformanceAnalyticsPage />} />,
  <Route key="reports-financial" path="reports/financial" element={<AdminFinancialReportsPage />} />,
  
  // Assignments routes
  <Route key="assignments" path="assignments" element={<AdminAssignmentsPage />} />,
  <Route key="assignments-overview" path="assignments/overview" element={<AdminAssignmentOverviewPage />} />,
  <Route key="assignments-grades" path="assignments/grades" element={<AdminGradeManagementPage />} />,
  <Route key="assignments-analytics" path="assignments/analytics" element={<AdminAssignmentAnalyticsPage />} />,
  
  <Route key="settings" path="settings" element={<AdminSettingsPage />} />,
];