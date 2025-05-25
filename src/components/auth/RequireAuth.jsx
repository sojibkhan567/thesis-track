import { Navigate } from "react-router";
import useAuth from "../../context/AuthContext";

const RequireAuth = ({ children, role }) => {

  const { user } = useAuth();

  console.log(user)

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RequireAuth