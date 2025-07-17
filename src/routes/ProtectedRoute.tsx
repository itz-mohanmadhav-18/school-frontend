import React from "react";
import { useAuth } from "@/hooks/useAuth"; // Updated import
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation(); // Get the current location

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

// '
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '@/hooks/useAuth';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// export function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const { isAuthenticated } = useAuth();

//   // Debug log
//   console.log('ProtectedRoute - isAuthenticated:', isAuthenticated);

//   if (!isAuthenticated) {
//     console.log('Redirecting to login...');
//     return <Navigate to="/login" replace />;
//   }

//   console.log('Rendering protected content...');
//   return <>{children}</>;
// }
// '