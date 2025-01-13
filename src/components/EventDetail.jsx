import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import {deleteEventById, getEventById} from "../api/eventsAPI.js";
import { Spinner } from "./Spinner.jsx";
import {getUserProfile} from "../api/authAPI.js";
import {useEvent} from "../context/EventProvider.jsx";
import {useAuth} from "../context/AuthProvider.jsx";

const EventDetail = () => {
  const {setEvent} = useEvent();
  const {isAuthenticated} = useAuth();
  const {eventId} = useParams();
  const navigate = useNavigate();

  const [eventDetails, setEventDetails] = useState("");
  const [userProfile, setUserProfile] = useState("")

  const [isLoading, setIsLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const response = await getEventById(eventId);
        setEventDetails(response);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const response = await getUserProfile();
        setUserProfile(response);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvent();

    if(isAuthenticated) {
      fetchUserProfile();
    }
  }, []);

  useEffect(() => {
    if (eventDetails && userProfile) {
      if (eventDetails.organizerId === userProfile.id) {
        setIsOwner(true);
      }
    }
  }, [eventDetails, userProfile]);

  function handleOnClickUpdate() {
    setEvent(eventDetails);
    navigate(`/eventupdate/${eventId}`);
  }

  async function handleOnClickDelete() {
    try {
      await deleteEventById(eventId);
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
    }
  }

  console.log("isOwner " + isOwner)
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-full max-w-[500px] bg-[#EE8F00] m-auto px-10 py-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl text-center text-white font-thin">
          Event Details
        </h2>

        <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
          <p className="text-slate-500 ">Date:</p>
          <p className="font-medium ">
            {eventDetails.date
                ? `${new Date(eventDetails.date).toLocaleString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })} ${new Date(eventDetails.date).toLocaleTimeString("de-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`
                : "N/A"}
          </p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
          <p className="text-slate-500">Title:</p>
          <p className="font-medium">{eventDetails.title || "Untitled"}</p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
          <p className="text-slate-500">Location:</p>
          <p className="font-medium">
            {eventDetails.location || "Not specified"}
          </p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
          <p className="text-slate-500">Description:</p>
          <p className="font-medium">
            {eventDetails.description || "No description available."}
          </p>
        </div>
        {isOwner && <div className="flex align-baseline">
          <button
              type="button"
              className=" px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100"
              onClick={handleOnClickUpdate}
          >
            Update
          </button>
          <button
              type="button"
              className=" px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100"
              onClick={handleOnClickDelete}
          >
            Delete
          </button>
        </div> }
      </div>
    </div>
  );
};

export default EventDetail;
