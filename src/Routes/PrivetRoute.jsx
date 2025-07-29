import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // ✅ Show loading state while checking authentication
  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  // ✅ If logged in → allow access
  if (user) {
    return children;
  }

  // ✅ If not logged in → redirect to login & keep last location

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
