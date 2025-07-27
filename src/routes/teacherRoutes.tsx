import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Academics Components
const TeacherMarkAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Mark Attendance</h1><p>Mark student attendance for your classes</p></div>;
const TeacherStudentLeaveRedressalPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Student Leave Redressal</h1><p>Manage student leave requests (Class Teacher only)</p></div>;
const TeacherUploadResourcesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Upload Resources</h1><p>Upload notes, presentations, and study materials</p></div>;
const TeacherSearchStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Search Students</h1><p>Search for any student information in school</p></div>;
const TeacherStudentsByClassPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - View Students by Class</h1><p>View all students organized by class</p></div>;

// Curriculum Management Components
const TeacherViewSyllabusPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - View Syllabus</h1><p>View course syllabus and curriculum</p></div>;
const TeacherUpdateSyllabusPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Update Syllabus</h1><p>Update and modify syllabus content</p></div>;
const TeacherCourseProgressPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Update Course Progress</h1><p>Track and update syllabus completion progress</p></div>;
const TeacherHomeworkPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Homework & Assignments</h1><p>Create and assign homework and assignments</p></div>;
const TeacherSubmissionsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Check Submissions & Review</h1><p>Review homework submissions and provide feedback</p></div>;

// Exam and Test Management Components
const TeacherCreateExamPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Create Exam</h1><p>Create and schedule new exams and tests</p></div>;
const TeacherUpdateMarksPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Update Marks</h1><p>Enter and update exam marks for students</p></div>;
const TeacherGradeReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - View Grade Reports</h1><p>View comprehensive grade reports and analytics</p></div>;

// Support Components
const TeacherMentalHealthSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Mental Health Support</h1><p>Access counseling services, stress management, and wellness programs</p></div>;
const TeacherMedicalSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Medical Support</h1><p>Access health records, medical leave, and health insurance services</p></div>;

// Schedule and Leave Components
const TeacherSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - My Schedule</h1><p>View your teaching schedule and timetable</p></div>;
const TeacherLeaveRequestPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Leave Request</h1><p>Submit leave requests and view attendance record</p></div>;

// Settings Component
const TeacherSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Settings</h1><p>Manage your preferences and account settings</p></div>;

const TeacherTransportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Teacher - Transport Facility</h1><p>View bus schedules, routes, and transport services for staff</p></div>;

export const teacherRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Schedule route (highest priority - daily use)
  <Route key="schedule" path="schedule" element={<TeacherSchedulePage />} />,
  
  // Academics routes (core teaching activities - highest priority)
  <Route key="academics-attendance" path="academics/attendance" element={<TeacherMarkAttendancePage />} />,
  <Route key="academics-resources" path="academics/resources" element={<TeacherUploadResourcesPage />} />,
  <Route key="academics-search-students" path="academics/search-students" element={<TeacherSearchStudentsPage />} />,
  <Route key="academics-students-by-class" path="academics/students-by-class" element={<TeacherStudentsByClassPage />} />,
  <Route key="academics-leave-redressal" path="academics/leave-redressal" element={<TeacherStudentLeaveRedressalPage />} />,
  
  // Curriculum Management routes (academic planning - high priority)
  <Route key="curriculum-syllabus" path="curriculum/syllabus" element={<TeacherViewSyllabusPage />} />,
  <Route key="curriculum-course-progress" path="curriculum/course-progress" element={<TeacherCourseProgressPage />} />,
  <Route key="curriculum-homework" path="curriculum/homework" element={<TeacherHomeworkPage />} />,
  <Route key="curriculum-submissions" path="curriculum/submissions" element={<TeacherSubmissionsPage />} />,
  <Route key="curriculum-update-syllabus" path="curriculum/update-syllabus" element={<TeacherUpdateSyllabusPage />} />,
  
  // Exam and Test Management routes (assessment - high priority)
  <Route key="exams-marks" path="exams/marks" element={<TeacherUpdateMarksPage />} />,
  <Route key="exams-reports" path="exams/reports" element={<TeacherGradeReportsPage />} />,
  <Route key="exams-create" path="exams/create" element={<TeacherCreateExamPage />} />,
  
  // Leave Request route (personal management - medium priority)
  <Route key="leave-request" path="leave-request" element={<TeacherLeaveRequestPage />} />,
  
  // Transport route (daily commute - medium priority)
  <Route key="transport" path="transport" element={<TeacherTransportPage />} />,
  
  // Support routes (wellbeing - lower priority but important)
  <Route key="support-mental-health" path="support/mental-health" element={<TeacherMentalHealthSupportPage />} />,
  <Route key="support-medical" path="support/medical" element={<TeacherMedicalSupportPage />} />,
  
  <Route key="settings" path="settings" element={<TeacherSettingsPage />} />,
];