import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home";
import { useAuth } from "./context/AuthProvider";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h2>HOMEPAGE</h2>} />
          <Route path="login" element={<h2>Login Page</h2>} />

          {/* Protected Route */}
          <Route
            path="dashboard"
            element={
              isAuthenticated ? <h2>Dashboard</h2> : <h2>Access Denied</h2>
            }
          />
          {/* NOT FOUND */}
          <Route path="*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
