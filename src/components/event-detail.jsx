// event-detail.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

const EventDetail = () => {
  const { currentEvent } = useAppContext();
  return (
    <div className="w-full flex justify-center items-center  pt-40">
      <div className="w-96 bg-orange-500 rounded-lg p-4">
        {/* Kart Başlığı */}
        <div className="text-white font-bold text-sm mb-4"> Event Details </div>

        {/* Tarih */}
        <div className="bg-white p-4 rounded-md mb-4">
          <p className="text-gray-500 text-sm">Date:</p>
          <p className="text-gray-800 font-medium">
            {currentEvent.date || "N/A"}
          </p>
        </div>

        {/* Başlık */}
        <div className="bg-white p-4 rounded-md mb-4">
          <p className="text-gray-500 text-sm">Title:</p>
          <p className="text-gray-800 font-medium">
            {currentEvent.title || "Untitled"}
          </p>
        </div>

        {/* Konum */}
        <div className="bg-white p-4 rounded-md mb-4">
          <p className="text-gray-500 text-sm">Location:</p>
          <p className="text-gray-800 font-medium">
            {currentEvent.location || "Not specified"}
          </p>
        </div>

        {/* Açıklama */}
        <div className="bg-white p-4 rounded-md">
          <p className="text-gray-500 text-sm">Description:</p>
          <p className="text-gray-800 font-medium">
            {currentEvent.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
