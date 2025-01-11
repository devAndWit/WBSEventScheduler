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
      <div className="w-full max-w-[500px] bg-[#EE8F00] m-auto px-10 py-10 rounded-xl shadow-2xl">
        <h2 className="text-3xl text-center text-white font-thin">
          Create Event
        </h2>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="bg-white p-4 mb-6 rounded-xl">
            <p className="text-sm">Title:</p>
            <input
              id="title"
              name="title"
              type="text"
              ref={titleRef}
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
              ref={dateRef}
              className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
            />
          </div>
          <div className="bg-white p-4 mb-6 rounded-xl">
            <p className="text-sm">Location:</p>
            <input
              id="location"
              name="location"
              type="text"
              ref={locationRef}
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
              ref={descriptionRef}
              className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="w-full px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  hover:bg-[#0082dd] bg-[#0594F9] bg-opacity-90 hover:bg-opacity-100"
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
