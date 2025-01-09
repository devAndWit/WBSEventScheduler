import { Link } from "react-router-dom";

const EventCard = (event) => {
  const { id, date, title, location } = event.event;
  console.log(event);

  return (
    <Link to={`/eventcard/${id}`}>
<<<<<<< HEAD
      <div className="w-60 bg-orange-500 rounded-lg p-3 ">
=======
      <div className="w-60 bg-orange-500 rounded-lg p-3">
>>>>>>> b1af9fca5d4b618faec354d92bb554d5120298af
        {/* Event Date */}
        <div className="bg-white p-4 rounded-md mb-1 h-16">
          <p className="text-center text-gray-800">
            {new Date(date).toLocaleString() || "N/A"}
          </p>
        </div>

        {/* Event Title */}
        <div className="bg-white p-4 rounded-md mb-1 h-16">
          <p className="text-center text-gray-800">{title || "Untitled"}</p>
        </div>

        {/* Event Location */}
        <div className="bg-white p-4 rounded-md h-20">
          <p className="text-center text-gray-800">
            {location || "Not specified"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
