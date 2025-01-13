import {createContext, useContext, useState} from "react";

const EventContext = createContext();

export const useEvent = () => {
    return useContext(EventContext);
};

export function EventProvider({children}) {
    const [event, setEvent] = useState({})
    return (
        <EventContext.Provider value={{ event, setEvent }}>
            {children}
        </EventContext.Provider>
    );
}
