import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Home from "./Layout/Home";
import SignIn from "./Layout/SignIn";
import SignUp from "./Layout/SignUp";
import NotFound from "./Layout/SignUp";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h2>HOMEPAGE</h2>} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* NOT FOUND */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
