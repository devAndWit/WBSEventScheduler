// components/event-container.jsx
import React, { useEffect, useState } from "react";
import EventCard from "./event-cards";
import { getEvents } from "../api/eventsAPI";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents(1, 10); // Default: page 1, limit 10
        setEvents(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 p-10 ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventContainer;
