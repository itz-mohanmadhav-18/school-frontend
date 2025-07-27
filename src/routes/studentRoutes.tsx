import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Schedule Components
const StudentTimetablePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Class Timetable</h1><p>View your class schedule</p></div>;
const StudentExamSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Exam Schedule</h1><p>View upcoming examination schedule</p></div>;
const StudentCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Academic Calendar</h1><p>View academic and event calendar</p></div>;

// Academic Components
const StudentSyllabusPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Syllabus & Resources</h1><p>Access course syllabi and learning materials</p></div>;
const StudentSyllabusDetailsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Syllabus Details</h1><p>View detailed syllabus information</p></div>;
const StudentResourcesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Learning Resources</h1><p>Access additional learning resources</p></div>;
const StudentAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Assignments</h1><p>View and submit assignments</p></div>;
const StudentSubmitAssignmentPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Submit Assignment</h1><p>Submit your completed assignments</p></div>;
const StudentAssignmentHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Assignment History</h1><p>View your assignment submission history</p></div>;

// Results (Independent Category)
const StudentExamResultsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Exam Results</h1><p>View your examination results</p></div>;
const StudentGradeReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Grade Reports</h1><p>View detailed grade reports</p></div>;
const StudentProgressReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Progress Reports</h1><p>View academic progress reports</p></div>;

// Attendance Components
const StudentAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Attendance Tracker</h1><p>Track your attendance record</p></div>;
const StudentAttendanceReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Attendance Reports</h1><p>View detailed attendance reports</p></div>;

// Campus Services Components
const StudentLibraryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Library Access</h1><p>Browse and check out library resources</p></div>;
const StudentBookSearchPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Book Search</h1><p>Search for books in the library</p></div>;
const StudentBookHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Borrowing History</h1><p>View your book borrowing history</p></div>;
const StudentTransportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Transport</h1><p>View transport schedules and routes</p></div>;
const StudentExtracurricularPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Extracurricular Activities</h1><p>Browse and join extracurricular activities</p></div>;
const StudentClubsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Clubs & Societies</h1><p>Browse student clubs and societies</p></div>;
const StudentEventsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - School Events</h1><p>View upcoming events and competitions</p></div>;

// Support Components (Counselling & Medical)
const StudentSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Support Services</h1><p>Access counselling and medical support</p></div>;
const StudentCounsellingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Counselling Services</h1><p>Access counselling services and support</p></div>;
const StudentCounsellingRequestPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Request Counselling</h1><p>Request a counselling session</p></div>;
const StudentCounsellingReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Counselling Reports</h1><p>View your counselling history and reports</p></div>;
const StudentMedicalSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Medical Support</h1><p>Access medical support and health services</p></div>;
const StudentHealthRecordsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Health Records</h1><p>View your health records</p></div>;

const StudentSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Student - Settings</h1><p>Update your profile and preferences</p></div>;

export const studentRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Schedule routes (Class Schedule + Exam Schedule + Calendar)
  <Route key="schedule-timetable" path="schedule/timetable" element={<StudentTimetablePage />} />,
  <Route key="schedule-exams" path="schedule/exams" element={<StudentExamSchedulePage />} />,
  <Route key="schedule-calendar" path="schedule/calendar" element={<StudentCalendarPage />} />,
  
  // Academic routes
  <Route key="syllabus" path="syllabus" element={<StudentSyllabusPage />} />,
  <Route key="syllabus-details" path="syllabus/details" element={<StudentSyllabusDetailsPage />} />,
  <Route key="syllabus-resources" path="syllabus/resources" element={<StudentResourcesPage />} />,
  
  <Route key="assignments" path="assignments" element={<StudentAssignmentsPage />} />,
  <Route key="assignments-submit" path="assignments/submit" element={<StudentSubmitAssignmentPage />} />,
  <Route key="assignments-history" path="assignments/history" element={<StudentAssignmentHistoryPage />} />,
  
  // Results routes (Independent category)
  <Route key="results-exams" path="results/exams" element={<StudentExamResultsPage />} />,
  <Route key="results-grades" path="results/grades" element={<StudentGradeReportsPage />} />,
  <Route key="results-progress" path="results/progress" element={<StudentProgressReportsPage />} />,
  
  // Attendance routes
  <Route key="attendance" path="attendance" element={<StudentAttendancePage />} />,
  <Route key="attendance-reports" path="attendance/reports" element={<StudentAttendanceReportsPage />} />,
  
  // Campus Services routes
  <Route key="library" path="library" element={<StudentLibraryPage />} />,
  <Route key="library-search" path="library/search" element={<StudentBookSearchPage />} />,
  <Route key="library-history" path="library/history" element={<StudentBookHistoryPage />} />,
  
  <Route key="transport" path="transport" element={<StudentTransportPage />} />,
  
  <Route key="extracurricular" path="extracurricular" element={<StudentExtracurricularPage />} />,
  <Route key="extracurricular-clubs" path="extracurricular/clubs" element={<StudentClubsPage />} />,
  <Route key="extracurricular-events" path="extracurricular/events" element={<StudentEventsPage />} />,
  
  // Support routes (Counselling & Medical) - Added missing intermediate routes
  <Route key="support" path="support" element={<StudentSupportPage />} />,
  <Route key="support-counselling" path="support/counselling" element={<StudentCounsellingPage />} />,
  <Route key="support-counselling-request" path="support/counselling/request" element={<StudentCounsellingRequestPage />} />,
  <Route key="support-counselling-reports" path="support/counselling/reports" element={<StudentCounsellingReportsPage />} />,
  <Route key="support-medical" path="support/medical" element={<StudentMedicalSupportPage />} />,
  <Route key="support-health-records" path="support/health-records" element={<StudentHealthRecordsPage />} />,
  
  <Route key="settings" path="settings" element={<StudentSettingsPage />} />,
];