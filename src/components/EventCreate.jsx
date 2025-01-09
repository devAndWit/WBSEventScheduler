import { useState } from "react";
import { createEvent } from "../api/eventsAPI"; // for API funciton call

const EventCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createEvent(formData); // call API function
      alert("Event created successfully!");
      console.log(result); // Print the result
      setFormData({ title: "", date: "", location: "", description: "" }); // delete all field
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
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
            />
          </div>
          <div className="bg-white p-4 mb-6 rounded-xl">
            <p className="text-sm">Date:</p>
            <input
              id="date"
              name="date"
              type="datetime-local"
              value={formData.date}
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
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
