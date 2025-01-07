// event-detail.jsx
import React from "react";

const EventDetail = ({ event }) => {
  //   return (
  //     <div className="event-detail p-4 bg-gray-100 rounded-lg">
  //       <h2 className="text-2xl font-bold">{event.title}</h2>
  //       <p>Date: {event.date}</p>
  //       <p>Location: {event.location}</p>
  //       <p>Description: {event.description}</p>
  //     </div>
  //   );

  return (
    <div className="w-60 h-60 event-detail p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">{"event.title"}</h2>
      <p>Date: {"event.date"}</p>
      <p>Location: {"event.location"}</p>
      <p>Description: {"event.description"}</p>
    </div>
  );
};

export default EventDetail;
