
const EventCreate = () => {

  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-96 bg-orange-500 rounded-lg p-4">
        <div className="text-white font-bold text-sm mb-4">Create Event</div>
        <form /*onSubmit={handleSubmit}*/ className="space-y-4">
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Title:</p>
            <input
              id="title"
              name="title"
              type="text"
              value={"formData.title"}
              onChange={"handleChange"}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Date:</p>
            <input
              id="date"
              name="date"
              type="date"
              value={"formData.date"}
              onChange={"handleChange"}
              className="w-full p-2 border rounded text-gray-800 font-medium"
            />
          </div>
          <div className="bg-white p-4 rounded-md">
            <p className="text-gray-500 text-sm">Location:</p>
            <input
              id="location"
              name="location"
              type="text"
              value={"formData.location"}
              onChange={"handleChange"}
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
