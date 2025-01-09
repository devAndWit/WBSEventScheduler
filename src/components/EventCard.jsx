import {Link} from "react-router-dom";


const EventCard = (event) => {
const {id, date, title, location} = event.event;
    console.log(event)

    return (
        <Link to={`/eventcard/${id}`}>
            <div
                className="w-60 bg-orange-500 rounded-lg p-3"
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
        </Link>
    );
};

export default EventCard;
