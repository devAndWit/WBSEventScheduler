import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import {EventProvider} from "./context/EventProvider.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <EventProvider>
                <App/>
            </EventProvider>
        </AuthProvider>
    </BrowserRouter>
);
