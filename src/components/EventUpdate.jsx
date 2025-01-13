import {useRef} from "react";
import {createEvent, updateEventById} from "../api/eventsAPI.js";
import {useEvent} from "../context/EventProvider.jsx";
import {useNavigate} from "react-router-dom";
import {formatDateForInput} from "../functions/formatDateForInput.js";

export function EventUpdate() {
   const {event, setEvent} = useEvent();
   const navigation = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collect data from refs
        const formData = {
            title: event.title,
            date: event.date,
            location: event.location,
            description: event.description,
        };

        try {
            await updateEventById(event.id, formData); // Call API function
            alert("Event updated successfully!");
        } catch (error) {
            console.error("Error creating event:", error);
        } finally {
            navigation(`/eventcard/${event.id}`)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    return (
        <div className="w-full flex justify-center items-center pt-10">
            <div className="w-full max-w-[500px] bg-[#EE8F00] m-auto px-10 py-10 rounded-xl shadow-2xl">
                <h2 className="text-3xl text-center text-white font-thin">
                    Event update
                </h2>
                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="bg-white p-4 mb-6 rounded-xl">
                        <p className="text-sm">Title:</p>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={event.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                        />
                    </div>
                    <div className="bg-white p-4 mb-6 rounded-xl">
                        <p className="text-sm">Date:</p>
                        <input
                            id="date"
                            name="date"
                            type="datetime-local"
                            value={formatDateForInput(event.date)}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                        />
                    </div>
                    <div className="bg-white p-4 mb-6 rounded-xl">
                        <p className="text-sm">Location:</p>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            value={event.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                        />
                    </div>
                    <div className="bg-white p-4 mb-6 rounded-xl">
                        <p className="text-sm">Description:</p>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Description"
                            value={event.description}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                        />
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="w-full px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
