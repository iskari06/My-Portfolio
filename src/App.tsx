import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";

function App() {
	return (
		<>
			<Routes>
				{/* Redirect root to single page portfolio */}
				<Route path="/" element={<MainLayout />} />

				{/* Catch all other routes and redirect to the single page portfolio */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	);
}

export default App;
