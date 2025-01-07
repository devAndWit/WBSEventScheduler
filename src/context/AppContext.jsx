import React, { createContext, useState, useContext } from "react";

// Create Context
const AppContext = createContext();

// Context provider
export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("events"); // Default is 'events'

  return (
    <AppContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </AppContext.Provider>
  );
};

// A special hook to use the context easily
export const useAppContext = () => useContext(AppContext);
