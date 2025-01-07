// event-create.jsx
import React, { useState } from "react";

const EventCreate = () => {
  //   const [formData, setFormData] = useState({
  //     title: "",
  //     date: "",
  //     location: "",
  //   });

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log("Creating Event:", formData);
  //     // Add API call for event creation
  //   };

  return (
    <div>
      <form /*onSubmit={handleSubmit}*/ className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl mb-4">Create Event</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={"formData.title"}
            onChange={"handleChange"}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={"formData.date"}
            onChange={"handleChange"}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={"formData.location"}
            onChange={"handleChange"}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default EventCreate;
