import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "../api/eventsAPI.js";
import { Spinner } from "./Spinner.jsx";

const EventDetail = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

    fetchEvent();
  }, []);

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
            {new Date(eventDetails.date).toLocaleString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }) || "N/A"}
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
      </div>
    </div>
  );
};

export default EventDetail;
