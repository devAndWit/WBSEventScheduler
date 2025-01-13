import { Link } from "react-router-dom";

const EventCard = (event) => {
  const { id, date, title, location } = event.event;

  return (
    <Link to={`/eventcard/${id}`}>
      <div
        className="
        w-60
        bg-[#EE8F00]
        rounded-2xl
        p-6
        mx-auto
        transition
        duration-300
        ease-in-out
        transform
        hover:scale-110
        "
      >
        {/* Event Date */}
        <div className="bg-white p-4 rounded-2xl mb-2 h-16">
          <p className="text-center ">
            {date
                ? `${new Date(date).toLocaleString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })} ${new Date(date).toLocaleTimeString("de-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`
                : "N/A"}
          </p>
        </div>

        {/* Event Title */}
        <div className="bg-white p-4 rounded-2xl mb-2 h-16">
          <p className="text-center ">{title || "Untitled"}</p>
        </div>

        {/* Event Location */}
        <div className="bg-white p-4 rounded-2xl h-20">
          <p className="text-center ">{location || "Not specified"}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
