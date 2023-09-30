import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function DashboardLayout() {
	return (
		<>
			<header>Header</header>
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	);
}

export default DashboardLayout;
