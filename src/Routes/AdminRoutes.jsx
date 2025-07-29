import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  // ✅ If logged in → allow access
  if (user && isAdmin) {
    return children;
  }

  // ✅ If not logged in → redirect to login & keep last location

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
