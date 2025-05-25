import { Navigate, Outlet } from "react-router";
import useAuth from "../../context/AuthContext";

const AuthRoute = () => {
  const { isAuthenticated, user } = useAuth();
  console.log(isAuthenticated)
  if (isAuthenticated) {
    if (user) {
      switch (user.role) {
        case "ADMIN":
          return <Navigate to="/admin-dashboard" replace />;
          break;
        case "STUDENT":
          return <Navigate to="/student-dashboard" replace />;
          break;
        case "TEACHER":
          return <Navigate to="/teacher-dashboard" replace />;
          break;
        default:
          <Navigate to="/" replace />;
          break;
      }
    } else {
      return <Navigate to="/sign-in" replace />;
    }
    return <Navigate to="/admin-dashboard" replace />;
  }
  return <Outlet />; // or render children if using older React Router
};

export default AuthRoute