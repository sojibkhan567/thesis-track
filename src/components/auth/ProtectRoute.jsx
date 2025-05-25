import React from 'react'
import useAuth from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

function ProtectRoute() {
  const { user, loading } = useAuth();

  console.log(user)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  // User authenticated, render child routes
  return <Outlet />;

}

export default ProtectRoute