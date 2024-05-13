import axios from "axios";

const API = axios.create({baseURL: "http://127.0.0.1:5000"});

export const getAllJobs = () => API.get("/jobs/get");

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);