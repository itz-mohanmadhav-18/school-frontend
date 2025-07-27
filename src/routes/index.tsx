import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { LoginPage } from "@/pages/LoginPage";
import { useAuth } from "@/hooks/useAuth";
import { getRoutesForUser } from "@/utils/routeMapper";


export const AppRoutes: React.FC = () => {
    const { user, isLoading,isLoggingOut } = useAuth();
      if (isLoading || isLoggingOut) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">
            {isLoggingOut ? 'Logging out...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
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