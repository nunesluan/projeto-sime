// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// confere se o caminho está correto

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // JSX correto
  }

  return children;
};

export default ProtectedRoute;
