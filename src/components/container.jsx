// container.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";
import SignIn from "../Layout/SignIn";
import SignUp from "../Layout/SignUp";
import EventContainer from "./events-container";

const Container = () => {
  const { currentView } = useAppContext();

  switch (currentView) {
    case "login":
      return <SignIn />;
    case "signup":
      return <SignUp />;
    case "events":
    default:
      return <EventContainer />;
  }
};

export default Container;
