// components/event-cards.jsx
import React from "react";

const EventCard = ({ event }) => {
  const { title, date, location, description } = event;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{new Date(date).toLocaleString()}</p>
      <p className="text-sm text-gray-800">{location}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
  //   return (
  //     <div className="w-60 h-40 border rounded-lg p-4 shadow-md">
  //       <h2 className="text-xl font-bold">{"title"}</h2>
  //       <p className="text-sm text-gray-600">
  //         {"new Date(date).toLocaleString()"}
  //       </p>
  //       <p className="text-sm text-gray-800">{"location"}</p>
  //       <p className="mt-2 text-gray-700">{"description"}</p>
  //     </div>
  //   );
};

export default EventCard;
