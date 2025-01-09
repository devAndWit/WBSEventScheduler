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
      <div className="w-96 bg-orange-500 rounded-lg p-4">
        <div className="text-white font-bold text-sm mb-4">Create Event</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Title:</p>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Date:</p>
            <input
              id="date"
              name="date"
              type="datetime-local"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Location:</p>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Description:</p>
            <input
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
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
