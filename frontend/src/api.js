import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchCabFares = (pickup, dropoff) =>
  API.get(`/cabs`, { params: { pickup, dropoff } });

export const fetchRentals = (location) =>
  API.get(`/rentals`, { params: { location } });

export const fetchWalkingBuddies = () => API.get(`/walkingbuddies`);
export const postWalkingBuddy = (buddy) => API.post(`/walkingbuddies`, buddy);

export const fetchTrips = () => API.get(`/trips`);
export const postTrip = (trip) => API.post(`/trips`, trip);

export default API;
