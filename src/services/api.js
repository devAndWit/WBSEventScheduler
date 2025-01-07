const BASE_URL = "http://localhost:3001/api";


export const fetchEvents = async (page = 1, limit = 10) => {
    try {
        //http://localhost:3001/api/events?page=1&limit=10
      const response = await fetch(`${BASE_URL}/events?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Error fetching events: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  