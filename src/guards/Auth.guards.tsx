import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
	const token = localStorage.getItem("token");
	const user = localStorage.getItem("user");

	if (token && user) {
		return <Navigate to="/admin" />;
	}
	return children;
};

export default AuthGuard;
