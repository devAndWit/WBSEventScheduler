import axios from "axios";
import {config} from "../config.js";

export async function createEvent(event) {
    try {
        const response = await axios.post(`${config.eventsAPI}/events`, event,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        return response.data
    } catch (err) {
        alert("Something went wrong, please try again later.")
        console.error(err);
    }
}

export async function getEvents(pageNumber, limit) {
    try {
        const response = await axios.get(`${config.eventsAPI}/events`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
                page: pageNumber,
                limit: limit,
            }
        })
        return response.data
    } catch (err) {
        alert("Something went wrong, please try again later.")
        console.error(err);
    }
}

export async function getEventById(id) {
    try {
        const response = await axios.get(`${config.eventsAPI}/events/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        return response.data
    } catch (err) {
        alert("Something went wrong, please try again later.")
        console.error(err);
    }
}

export async function updateEventById(id, newEvent) {
    try {
        const response = await axios.put(`${config.eventsAPI}/events/${id}`, newEvent,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        return response.data
    } catch (err) {
        alert("Something went wrong, please try again later.")
        console.error(err);
    }
}

export async function deleteEventById(id) {
    try {
        const response = await axios.delete(`${config.eventsAPI}/events/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        if (response) alert("Event deleted")
    } catch (err) {
        alert(err.error)
        console.error(err);
    }
}

export async function getUpcomingEventsList() {
    try {
        const response = await axios.get(`${config.eventsAPI}/events/upcoming`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        //if (response) alert("Event deleted")
        return response.data;
    } catch (err) {
        console.error(err);
    }
}
