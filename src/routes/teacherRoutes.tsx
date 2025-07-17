import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Teacher-specific components
const TeacherClassesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - My Classes</h1><p>Manage your assigned classes</p></div>;
const TeacherStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - My Students</h1><p>View and manage your students</p></div>;
const TeacherAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Assignments</h1><p>Create and grade assignments</p></div>;
const TeacherGradesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Grades</h1><p>Grade student submissions</p></div>;
const TeacherSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - My Schedule</h1><p>View your teaching schedule</p></div>;
const TeacherMessagesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Messages</h1><p>Communicate with students and parents</p></div>;
const TeacherSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Settings</h1><p>Manage your preferences</p></div>;

export const teacherRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  <Route key="classes" path="classes" element={<TeacherClassesPage />} />,
  <Route key="students" path="students" element={<TeacherStudentsPage />} />,
  <Route key="assignments" path="assignments" element={<TeacherAssignmentsPage />} />,
  <Route key="grades" path="grades" element={<TeacherGradesPage />} />,
  <Route key="schedule" path="schedule" element={<TeacherSchedulePage />} />,
  <Route key="messages" path="messages" element={<TeacherMessagesPage />} />,
  <Route key="settings" path="settings" element={<TeacherSettingsPage />} />,
];