import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {
  const {
    loading,
    authenticated,
  } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems:
            "center",
          justifyContent:
            "center",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;