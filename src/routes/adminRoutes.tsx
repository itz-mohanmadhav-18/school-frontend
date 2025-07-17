import React from "react";
import { Route } from "react-router-dom";
import { DashBoardPage } from "@/pages/DashBoardPage";

// Admin-specific components
const AdminStudentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Students Management</h1><p>Full access to student records, enrollment, etc.</p></div>;
const AdminTeachersPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Teachers Management</h1><p>Manage teacher accounts and assignments</p></div>;
const AdminCoursesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Courses Management</h1><p>Create and manage all courses</p></div>;
const AdminSchedulePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Schedule Management</h1><p>Manage school-wide schedules</p></div>;
const AdminReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Reports</h1><p>View comprehensive school reports</p></div>;
const AdminAssignmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - Assignments Overview</h1><p>Monitor all assignments across school</p></div>;
const AdminSettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Admin - System Settings</h1><p>Manage system-wide settings</p></div>;

export const adminRoutes = [
  <Route key="dashboard" path="dashboard" element={<DashBoardPage />} />,
  <Route key="students" path="students" element={<AdminStudentsPage />} />,
  <Route key="teachers" path="teachers" element={<AdminTeachersPage />} />,
  <Route key="courses" path="courses" element={<AdminCoursesPage />} />,
  <Route key="schedule" path="schedule" element={<AdminSchedulePage />} />,
  <Route key="reports" path="reports" element={<AdminReportsPage />} />,
  <Route key="assignments" path="assignments" element={<AdminAssignmentsPage />} />,
  <Route key="settings" path="settings" element={<AdminSettingsPage />} />,
];