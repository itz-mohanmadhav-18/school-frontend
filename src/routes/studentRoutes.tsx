import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Student-specific components
const StudentCoursesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - My Courses</h1><p>View your enrolled courses</p></div>;
const StudentAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Assignments</h1><p>View and submit assignments</p></div>;
const StudentGradesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - My Grades</h1><p>Check your grades and progress</p></div>;
const StudentSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - My Schedule</h1><p>View your class schedule</p></div>;
const StudentAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Attendance</h1><p>Track your attendance record</p></div>;
const StudentSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Settings</h1><p>Update your profile and preferences</p></div>;

export const studentRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  <Route key="courses" path="courses" element={<StudentCoursesPage />} />,
  <Route key="assignments" path="assignments" element={<StudentAssignmentsPage />} />,
  <Route key="grades" path="grades" element={<StudentGradesPage />} />,
  <Route key="schedule" path="schedule" element={<StudentSchedulePage />} />,
  <Route key="attendance" path="attendance" element={<StudentAttendancePage />} />,
  <Route key="settings" path="settings" element={<StudentSettingsPage />} />,
];