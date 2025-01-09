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
<<<<<<< HEAD
        console.log(data);
=======
        console.log(`Upcoming Events ${data}`);
>>>>>>> b1af9fca5d4b618faec354d92bb554d5120298af
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 p-10 ">
      {events ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <h2>There are currently no events, please check back later.</h2>
      )}
    </div>
  );
};

export default EventContainer;
