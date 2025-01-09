// app.jsx
import { Routes, Route } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import { useAuth } from "./context/AuthProvider";
import Home from "./Layout/Home";
import SignIn from "./Layout/SignIn";
import SignUp from "./Layout/SignUp";
import NotFound from "./Layout/NotFound";
import EventCreate from "./components/event-create";
import EventDetail from "./components/event-detail";
//Test
import EventCard from "./components/event-cards";

function App() {
  const { currentView, setCurrentView } = useAppContext();
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* HomePage*/}
      <Route path="/" element={<Home />} />

      <Route path="/signin" element={isAuthenticated ? <Home /> : <SignIn />} />

      <Route path="/signup" element={isAuthenticated ? <Home /> : <SignUp />} />

      {/* TEST*/}
      <Route
        path="/eventcard"
        element={isAuthenticated ? <Home /> : <EventCard />}
      />

      {/*FOr TEsT*/}
      <Route
        path="/eventcreate"
        element={isAuthenticated ? <Home /> : <EventCreate />}
      />

      <Route
        path="/events/create"
        element={isAuthenticated ? <EventCreate /> : <EventCreate />}
      />

      <Route
        path="/events/:id"
        element={isAuthenticated ? <EventDetail /> : <EventDetail />}
      />

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
