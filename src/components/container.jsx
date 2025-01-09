// container.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";
import SignIn from "../Layout/SignIn";
import SignUp from "../Layout/SignUp";
import EventCreate from "./event-create";
import EventContainer from "./events-container";
import EventDetails from "./event-detail";

const PrintInContainer = () => {
  return (
    <div className="flex items-center justify-center pt-60">
      <p className="text-2xl font-bold">LOGOUT</p>
    </div>
  );
};

const Container = () => {
  const { currentView } = useAppContext();

  switch (currentView) {
    case "login":
      return <SignIn />;
    case "signup":
      return <SignUp />;
    case "details":
      return <EventDetails />;
    case "create":
      return <EventCreate />;
    case "logout":
      return <EventContainer />;
    case "events":
    default:
      return <EventContainer />;
  }
};

export default Container;
