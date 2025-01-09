import axios from "axios";
import {config} from "../config.js";

export async function userSignUp(email, password) {
    try {
        return await axios.post(`${config.eventsAPI}/users`, {
            email: email,
            password: password
        });
    } catch (err) {
        alert("Something went wrong, please try again later.")
        console.error(err);
    }
}

export async function userLogIn(email, password) {
    try {
        const response = await axios.post(`${config.eventsAPI}/auth/login`, {
            email: email,
            password: password
        })
        localStorage.setItem("token", response.data.token);
        return response;
    } catch (err) {
        alert(err.error)
        console.error(err);
    }
}

export async function getUserProfile() {
    try {
        const response = await axios.get(`${config.eventsAPI}/auth/profile`, {
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
