import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { LoginPage } from "@/pages/LoginPage";
import { useAuth } from "@/hooks/useAuth";
import { getRoutesForUser } from "@/utils/routeMapper";


export const AppRoutes: React.FC = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state while auth is being checked
    }
    // If not authenticated, all routes should be accessible but protected
    const userRole = user?.role || 'student';
    const userRoutes = getRoutesForUser(userRole);


    return (
        <Routes>
            {/* Login route - outside of Layout */}
            <Route path='/login' element={<LoginPage />} />
            
            {/* Protected routes - inside Layout with sidebar */}
            <Route path='/' element={
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            }>
                <Route index element={<Navigate to="/dashboard" replace />} />
                {/* Dynamic routes based on user role */}
                {userRoutes}
            </Route>
        </Routes>
    );
};