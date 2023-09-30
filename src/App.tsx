import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDocumentTitle } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RootState } from "stores/Base.store";

// styles
import "./App.css";

// layout
import DashboardLayout from "pages/Dashboard/Layout/Layout";

// middleware
import DashboardGuard from "guards/Dashboard.guard";

// pages
import Home from "./pages/Home/Home";
import Dashboard from "pages/Dashboard/Dashboard/Dashboard";

function App() {
	const appState = useSelector((state: RootState) => state.App);

	useDocumentTitle(appState.titlePage);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/dashboard"
					element={
						<DashboardGuard>
							<DashboardLayout />
						</DashboardGuard>
					}>
					<Route index element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
