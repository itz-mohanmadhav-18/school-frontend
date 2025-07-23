import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Teacher Classes components
const TeacherClassesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - All Classes</h1><p>Manage your assigned classes</p></div>;
const TeacherClassDetailsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Class Details</h1><p>View detailed class information</p></div>;
const TeacherClassMaterialsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Class Materials</h1><p>Manage class materials and resources</p></div>;
const TeacherClassSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Class Schedule</h1><p>View class schedule</p></div>;

// Teacher Students components
const TeacherStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - My Students</h1><p>View and manage your students</p></div>;
const TeacherStudentProgressPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Student Progress</h1><p>Track student academic progress</p></div>;
const TeacherStudentAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Student Attendance</h1><p>Manage student attendance</p></div>;
const TeacherStudentInfoPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Student Info</h1><p>View student information</p></div>;

// Teacher Assignments components
const TeacherAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - All Assignments</h1><p>Create and grade assignments</p></div>;
const TeacherCreateAssignmentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Create Assignment</h1><p>Create new assignment</p></div>;
const TeacherGradeAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Grade Assignments</h1><p>Grade student assignments</p></div>;
const TeacherAssignmentSubmissionsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Assignment Submissions</h1><p>View assignment submissions</p></div>;

// Teacher Grades components
const TeacherGradesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Grade Book</h1><p>Grade student submissions</p></div>;
const TeacherEnterGradesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Enter Grades</h1><p>Enter student grades</p></div>;
const TeacherGradeReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Grade Reports</h1><p>Generate grade reports</p></div>;
const TeacherGradeAnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Grade Analytics</h1><p>Analyze grade patterns</p></div>;

// Teacher Schedule components
const TeacherSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - My Schedule</h1><p>View your teaching schedule</p></div>;
const TeacherTimetablePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Class Timetable</h1><p>View class timetable</p></div>;
const TeacherOfficeHoursPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Office Hours</h1><p>Manage office hours</p></div>;

// Teacher Messages components
const TeacherMessagesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - All Messages</h1><p>Communicate with students and parents</p></div>;
const TeacherSendMessagePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Send Message</h1><p>Send new message</p></div>;
const TeacherStudentMessagesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Student Messages</h1><p>Messages with students</p></div>;
const TeacherParentMessagesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Parent Messages</h1><p>Messages with parents</p></div>;

const TeacherSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Settings</h1><p>Manage your preferences</p></div>;

export const teacherRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Classes routes
  <Route key="classes" path="classes" element={<TeacherClassesPage />} />,
  <Route key="classes-details" path="classes/details" element={<TeacherClassDetailsPage />} />,
  <Route key="classes-materials" path="classes/materials" element={<TeacherClassMaterialsPage />} />,
  <Route key="classes-schedule" path="classes/schedule" element={<TeacherClassSchedulePage />} />,
  
  // Students routes
  <Route key="students" path="students" element={<TeacherStudentsPage />} />,
  <Route key="students-progress" path="students/progress" element={<TeacherStudentProgressPage />} />,
  <Route key="students-attendance" path="students/attendance" element={<TeacherStudentAttendancePage />} />,
  <Route key="students-info" path="students/info" element={<TeacherStudentInfoPage />} />,
  
  // Assignments routes
  <Route key="assignments" path="assignments" element={<TeacherAssignmentsPage />} />,
  <Route key="assignments-create" path="assignments/create" element={<TeacherCreateAssignmentPage />} />,
  <Route key="assignments-grade" path="assignments/grade" element={<TeacherGradeAssignmentsPage />} />,
  <Route key="assignments-submissions" path="assignments/submissions" element={<TeacherAssignmentSubmissionsPage />} />,
  
  // Grades routes
  <Route key="grades" path="grades" element={<TeacherGradesPage />} />,
  <Route key="grades-enter" path="grades/enter" element={<TeacherEnterGradesPage />} />,
  <Route key="grades-reports" path="grades/reports" element={<TeacherGradeReportsPage />} />,
  <Route key="grades-analytics" path="grades/analytics" element={<TeacherGradeAnalyticsPage />} />,
  
  // Schedule routes
  <Route key="schedule" path="schedule" element={<TeacherSchedulePage />} />,
  <Route key="schedule-timetable" path="schedule/timetable" element={<TeacherTimetablePage />} />,
  <Route key="schedule-office-hours" path="schedule/office-hours" element={<TeacherOfficeHoursPage />} />,
  
  // Messages routes
  <Route key="messages" path="messages" element={<TeacherMessagesPage />} />,
  <Route key="messages-send" path="messages/send" element={<TeacherSendMessagePage />} />,
  <Route key="messages-students" path="messages/students" element={<TeacherStudentMessagesPage />} />,
  <Route key="messages-parents" path="messages/parents" element={<TeacherParentMessagesPage />} />,
  
  <Route key="settings" path="settings" element={<TeacherSettingsPage />} />,
];