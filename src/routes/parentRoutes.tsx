import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Schedule Components
const ParentTimetablePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Child's Timetable</h1><p>View your child's class schedule</p></div>;
const ParentExamSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Exam Schedule</h1><p>View your child's examination schedule</p></div>;
const ParentCalendarPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Academic Calendar</h1><p>View academic events and calendar</p></div>;

// Attendance Components
const ParentAttendancePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Attendance Tracker</h1><p>Track your child's attendance</p></div>;
const ParentAttendanceReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Attendance Reports</h1><p>View detailed attendance reports</p></div>;
const ParentLeaveRequestPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Leave Request</h1><p>Request leave for your child</p></div>;
const ParentLeaveHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Leave History</h1><p>View leave request history</p></div>;

// Transport Components
const ParentBusSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Bus Schedule</h1><p>View bus schedules and routes</p></div>;
const ParentTrackChildPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Track Your Child</h1><p>Track your child's location and bus</p></div>;
const ParentTransportNotificationsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Transport Notifications</h1><p>View transport related notifications</p></div>;

// Academic Components
const ParentSyllabusPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Syllabus</h1><p>View your child's course syllabus</p></div>;
const ParentSyllabusDetailsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Syllabus Details</h1><p>View detailed syllabus information</p></div>;
const ParentPendingAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Pending Assignments</h1><p>View your child's pending assignments</p></div>;
const ParentAssignmentHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Assignment History</h1><p>View assignment submission history</p></div>;
const ParentResultsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Exam Results</h1><p>View your child's exam results</p></div>;
const ParentGradeReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Grade Reports</h1><p>View detailed grade reports</p></div>;
const ParentProgressTrackerPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Progress Tracker</h1><p>Track your child's academic progress</p></div>;
const ParentLibraryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Library Access</h1><p>View your child's library activities</p></div>;
const ParentLibraryHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Library History</h1><p>View book borrowing history</p></div>;

// Fees Components
const ParentFeesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Fees Overview</h1><p>View fee structure and payments</p></div>;
const ParentDuesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Outstanding Dues</h1><p>View pending fee payments</p></div>;
const ParentReceiptsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Payment Receipts</h1><p>View and download payment receipts</p></div>;
const ParentPaymentHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Payment History</h1><p>View complete payment history</p></div>;

// Support Components (Counselling & Medical)
const ParentSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Support Services</h1><p>Access support services for your child</p></div>;
const ParentCounsellingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Counselling Services</h1><p>Access counselling services for your child</p></div>;
const ParentCounsellingRequestPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Request Counselling</h1><p>Request counselling session for your child</p></div>;
const ParentCounsellingReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Counselling Reports</h1><p>View your child's counselling reports</p></div>;
const ParentCounsellingHistoryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Counselling History</h1><p>View counselling session history</p></div>;
const ParentMedicalSupportPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Medical Support</h1><p>Access medical support services</p></div>;
const ParentHealthRecordsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Health Records</h1><p>View your child's health records</p></div>;
const ParentMedicalAlertsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Medical Alerts</h1><p>Manage medical alerts and allergies</p></div>;
const ParentVaccinationRecordsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Vaccination Records</h1><p>View vaccination history</p></div>;

// Communication Components
const ParentMessagesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Messages</h1><p>Communicate with teachers and school</p></div>;
const ParentNotificationsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Notifications</h1><p>View school notifications and announcements</p></div>;

const ParentSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Parent - Settings</h1><p>Update your profile and preferences</p></div>;

export const parentRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  
  // Schedule routes
  <Route key="schedule-timetable" path="schedule/timetable" element={<ParentTimetablePage />} />,
  <Route key="schedule-exams" path="schedule/exams" element={<ParentExamSchedulePage />} />,
  <Route key="schedule-calendar" path="schedule/calendar" element={<ParentCalendarPage />} />,
  
  // Attendance routes
  <Route key="attendance" path="attendance" element={<ParentAttendancePage />} />,
  <Route key="attendance-reports" path="attendance/reports" element={<ParentAttendanceReportsPage />} />,
  <Route key="attendance-leave-request" path="attendance/leave-request" element={<ParentLeaveRequestPage />} />,
  <Route key="attendance-leave-history" path="attendance/leave-history" element={<ParentLeaveHistoryPage />} />,
  
  // Transport routes
  <Route key="transport-schedule" path="transport/schedule" element={<ParentBusSchedulePage />} />,
  <Route key="transport-track" path="transport/track" element={<ParentTrackChildPage />} />,
  <Route key="transport-notifications" path="transport/notifications" element={<ParentTransportNotificationsPage />} />,
  
  // Academic routes
  <Route key="academic-syllabus" path="academic/syllabus" element={<ParentSyllabusPage />} />,
  <Route key="academic-syllabus-details" path="academic/syllabus/details" element={<ParentSyllabusDetailsPage />} />,
  <Route key="academic-assignments" path="academic/assignments" element={<ParentPendingAssignmentsPage />} />,
  <Route key="academic-assignments-history" path="academic/assignments/history" element={<ParentAssignmentHistoryPage />} />,
  <Route key="academic-results" path="academic/results" element={<ParentResultsPage />} />,
  <Route key="academic-grades" path="academic/grades" element={<ParentGradeReportsPage />} />,
  <Route key="academic-progress" path="academic/progress" element={<ParentProgressTrackerPage />} />,
  <Route key="academic-library" path="academic/library" element={<ParentLibraryPage />} />,
  <Route key="academic-library-history" path="academic/library/history" element={<ParentLibraryHistoryPage />} />,
  
  // Fees routes
  <Route key="fees" path="fees" element={<ParentFeesPage />} />,
  <Route key="fees-dues" path="fees/dues" element={<ParentDuesPage />} />,
  <Route key="fees-receipts" path="fees/receipts" element={<ParentReceiptsPage />} />,
  <Route key="fees-history" path="fees/history" element={<ParentPaymentHistoryPage />} />,
  
  // Support routes (Counselling & Medical)
  <Route key="support" path="support" element={<ParentSupportPage />} />,
  <Route key="support-counselling" path="support/counselling" element={<ParentCounsellingPage />} />,
  <Route key="support-counselling-request" path="support/counselling/request" element={<ParentCounsellingRequestPage />} />,
  <Route key="support-counselling-reports" path="support/counselling/reports" element={<ParentCounsellingReportsPage />} />,
  <Route key="support-counselling-history" path="support/counselling/history" element={<ParentCounsellingHistoryPage />} />,
  <Route key="support-medical" path="support/medical" element={<ParentMedicalSupportPage />} />,
  <Route key="support-health-records" path="support/health-records" element={<ParentHealthRecordsPage />} />,
  <Route key="support-medical-alerts" path="support/medical-alerts" element={<ParentMedicalAlertsPage />} />,
  <Route key="support-vaccination" path="support/vaccination" element={<ParentVaccinationRecordsPage />} />,
  
  // Communication routes
  <Route key="messages" path="messages" element={<ParentMessagesPage />} />,
  <Route key="notifications" path="notifications" element={<ParentNotificationsPage />} />,
  
  <Route key="settings" path="settings" element={<ParentSettingsPage />} />,
];