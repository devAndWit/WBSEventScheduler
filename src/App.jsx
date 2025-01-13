import {Routes, Route} from "react-router-dom";
import {useAuth} from "./context/AuthProvider";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import NotFound from "./components/NotFound.jsx";
import EventCreate from "./components/EventCreate.jsx";
import EventDetail from "./components/EventDetail.jsx";
import EventsList from "./components/EventsList.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
    const {isAuthenticated} = useAuth();
    return (
        <div className="flex flex-col min-h-screen">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<EventsList/>}/>
                    <Route
                        path="signin"
                        element={isAuthenticated ? <EventsList/> : <SignIn/>}
                    />
                    <Route
                        path="signup"
                        element={isAuthenticated ? <EventsList/> : <SignUp/>}
                    />
                    <Route
                        path="eventcard/:eventId"
                        element={<EventDetail/>}
                    />
                    <Route
                        path="eventcreate"
                        element={!isAuthenticated ? <EventsList/> : <EventCreate/>}
                    />
                    {/* 404 Not Found */}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
