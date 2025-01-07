// components/event-cards.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

const EventCard = ({ event }) => {
  const { title, date, location, description, id } = event;
  const { currentView, setCurrentView, setCurrentEvent } = useAppContext(); // Doğru değişkenler bağlanıyor

  // Kart tıklama fonksiyonu
  const handleCardClick = (event) => {
    console.log(`events clicked and current event: ${currentView}`);
    setCurrentEvent(event); // Seçilen etkinliğin ID'sini ayarla
    setCurrentView("details"); // Görünümü "EventDetails" olarak değiştir
  };

  return (
    // <div
    //   className="border rounded-lg p-4 shadow-md cursor-pointer"
    //   onClick={() => handleCardClick(event)} // Fonksiyon çağrısı bu şekilde olmalı
    // >
    //   <h2 className="text-xl font-bold">{title}</h2>
    //   <p className="text-sm text-gray-600">{new Date(date).toLocaleString()}</p>
    //   <p className="text-sm text-gray-800">{location}</p>
    //   <p className="mt-2 text-gray-700">{description}</p>
    // </div>
    <div
      className="w-60 bg-orange-500 rounded-lg p-3"
      onClick={() => handleCardClick(event)}
    >
      {/* Event Date */}
      <div className="bg-white p-4 rounded-md mb-1">
        <p className="text-center text-gray-800">
          {new Date(date).toLocaleString() || "N/A"}
        </p>
      </div>

      {/* Event Title */}
      <div className="bg-white p-4 rounded-md mb-1">
        <p className="text-center text-gray-800">{title || "Untitled"}</p>
      </div>

      {/* Event Location */}
      <div className="bg-white p-4 rounded-md">
        <p className="text-center text-gray-800">
          {location || "Not specified"}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
