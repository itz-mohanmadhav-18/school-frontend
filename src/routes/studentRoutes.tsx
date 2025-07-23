import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Student Courses components
const StudentCoursesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Enrolled Courses</h1><p>View your enrolled courses</p></div>;
const StudentCourseDetailsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Course Details</h1><p>View detailed course information</p></div>;
const StudentCourseMaterialsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Course Materials</h1><p>Access course materials and resources</p></div>;
const StudentCourseProgressPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Course Progress</h1><p>Track your course progress</p></div>;

// Student Assignments components
const StudentAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - All Assignments</h1><p>View and submit assignments</p></div>;
const StudentPendingAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Pending Assignments</h1><p>View pending assignments</p></div>;
const StudentSubmitAssignmentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Submit Assignment</h1><p>Submit your assignments</p></div>;
const StudentAssignmentHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Assignment History</h1><p>View assignment submission history</p></div>;

// Student Grades components
const StudentGradesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - My Grades</h1><p>Check your grades and progress</p></div>;
const StudentGradeReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Grade Reports</h1><p>View grade reports</p></div>;
const StudentAcademicProgressPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Academic Progress</h1><p>Track academic progress</p></div>;
const StudentTranscriptPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Transcript</h1><p>View and download transcript</p></div>;

// Student Schedule components
const StudentSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Class Schedule</h1><p>View your class schedule</p></div>;
const StudentExamSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Exam Schedule</h1><p>View exam schedule</p></div>;
const StudentPersonalCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Personal Calendar</h1><p>Manage personal calendar</p></div>;

// Student Attendance components
const StudentAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - My Attendance</h1><p>Track your attendance record</p></div>;
const StudentAttendanceReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Attendance Reports</h1><p>View attendance reports</p></div>;
const StudentLeaveRequestsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Leave Requests</h1><p>Submit and manage leave requests</p></div>;

const StudentSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Settings</h1><p>Update your profile and preferences</p></div>;

export const studentRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Courses routes
  <Route key="courses" path="courses" element={<StudentCoursesPage />} />,
  <Route key="courses-details" path="courses/details" element={<StudentCourseDetailsPage />} />,
  <Route key="courses-materials" path="courses/materials" element={<StudentCourseMaterialsPage />} />,
  <Route key="courses-progress" path="courses/progress" element={<StudentCourseProgressPage />} />,
  
  // Assignments routes
  <Route key="assignments" path="assignments" element={<StudentAssignmentsPage />} />,
  <Route key="assignments-pending" path="assignments/pending" element={<StudentPendingAssignmentsPage />} />,
  <Route key="assignments-submit" path="assignments/submit" element={<StudentSubmitAssignmentPage />} />,
  <Route key="assignments-history" path="assignments/history" element={<StudentAssignmentHistoryPage />} />,
  
  // Grades routes
  <Route key="grades" path="grades" element={<StudentGradesPage />} />,
  <Route key="grades-reports" path="grades/reports" element={<StudentGradeReportsPage />} />,
  <Route key="grades-progress" path="grades/progress" element={<StudentAcademicProgressPage />} />,
  <Route key="grades-transcript" path="grades/transcript" element={<StudentTranscriptPage />} />,
  
  // Schedule routes
  <Route key="schedule" path="schedule" element={<StudentSchedulePage />} />,
  <Route key="schedule-exams" path="schedule/exams" element={<StudentExamSchedulePage />} />,
  <Route key="schedule-personal" path="schedule/personal" element={<StudentPersonalCalendarPage />} />,
  
  // Attendance routes
  <Route key="attendance" path="attendance" element={<StudentAttendancePage />} />,
  <Route key="attendance-reports" path="attendance/reports" element={<StudentAttendanceReportsPage />} />,
  <Route key="attendance-leave" path="attendance/leave" element={<StudentLeaveRequestsPage />} />,
  
  <Route key="settings" path="settings" element={<StudentSettingsPage />} />,
];