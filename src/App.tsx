import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { PageRoutes } from "./routes/allRoutes";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* Redirect from root to pages */}
        <Route path="/" element={<Navigate to="/pages" replace />} />
        
        <Route path="/pages" element={<MainLayout />}>
          {/* Default route (index) redirects to home */}
          <Route index element={<Navigate to="home" replace />} />
          
          {/* Map all page routes */}
          {PageRoutes.map(({ key, path, element: Element }) => {
            // Use the last part of the path after the last slash
            const routePath = path.split('/').pop();
            return <Route key={key} path={routePath} element={<Element />} />;
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;