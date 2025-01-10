import { useRef } from "react";
import { createEvent } from "../api/eventsAPI"; // for API function call

const EventCreate = () => {
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect data from refs
    const formData = {
      title: titleRef.current.value,
      date: dateRef.current.value,
      location: locationRef.current.value,
      description: descriptionRef.current.value,
    };

    try {
      const result = await createEvent(formData); // Call API function
      alert("Event created successfully!");
      console.log(result); // Print the result

      // Clear input fields
      titleRef.current.value = "";
      dateRef.current.value = "";
      locationRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-96 bg-orange-500 rounded-lg p-4">
        <div className="text-white font-bold text-sm mb-4">Create Event</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Title:</p>
            <input
              id="title"
              name="title"
              type="text"
              ref={titleRef}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Date:</p>
            <input
              id="date"
              name="date"
              type="datetime-local"
              ref={dateRef}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Location:</p>
            <input
              id="location"
              name="location"
              type="text"
              ref={locationRef}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Description:</p>
            <input
              id="description"
              name="description"
              type="text"
              ref={descriptionRef}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;
