// components/event-ContentContainer.jsx
import { useEffect, useState } from "react";
import EventCard from "./EventCard.jsx";
import { getUpcomingEventsList } from "../api/eventsAPI";
import { Spinner } from "./Spinner.jsx";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const data = await getUpcomingEventsList(); // Default: page 1, limit 10
        console.log(`Upcoming Events ${data}`);
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  console.log(events);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex flex-wrap justify-center gap-10 p-10 mx-auto">
      {events ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <h2>There are currently no events, please check back later.</h2>
      )}
    </div>
  );
};

export default EventContainer;
