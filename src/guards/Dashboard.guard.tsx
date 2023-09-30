import { Navigate } from "react-router-dom";

const DashboardGuard = ({ children }:{ children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default DashboardGuard;
