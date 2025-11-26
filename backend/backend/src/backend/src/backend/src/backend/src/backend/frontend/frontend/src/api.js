import axios from "axios";

const API = "http://localhost:4000/api";

export const getRoutes = () => axios.get(`${API}/routes`);
export const compareRoutes = (data) => axios.post(`${API}/compare`, data);
