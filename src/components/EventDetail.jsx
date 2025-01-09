import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventById} from "../api/eventsAPI.js";
import {Spinner} from "./Spinner.jsx";


const EventDetail = () => {
  const { eventId } = useParams()
  const [eventDetails, setEventDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchEvent = async () =>{
      setIsLoading(true)
      try {
        const response = await getEventById(eventId);
        setEventDetails(response);
      } catch (err){
        console.error(err)
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvent()
  }, []);

  return isLoading ? <Spinner/> : (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-96 bg-orange-500 rounded-lg p-4">
        <div className="text-white font-bold text-sm mb-4"> Event Details </div>

        <div className="bg-white p-4 rounded-md mb-4">
          <p className="text-gray-500 text-sm">Date:</p>
          <p className="text-gray-800 font-medium">
            {eventDetails.date || "N/A"}
          </p>
        </div>

        <div className="bg-white p-4 rounded-md mb-4">
          <p className="text-gray-500 text-sm">Title:</p>
          <p className="text-gray-800 font-medium">
            {eventDetails.title || "Untitled"}
          </p>
        </div>

        <div className="bg-white p-4 rounded-md mb-4">
          <p className="text-gray-500 text-sm">Location:</p>
          <p className="text-gray-800 font-medium">
            {eventDetails.location || "Not specified"}
          </p>
        </div>

        <div className="bg-white p-4 rounded-md">
          <p className="text-gray-500 text-sm">Description:</p>
          <p className="text-gray-800 font-medium">
            {eventDetails.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
