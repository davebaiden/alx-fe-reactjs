// src/services/githubApi.js
import axios from "axios";

const API_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export async function fetchUser(username) {
  try {
    const res = await axiosInstance.get(`/users/${username}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw err;
  }
}
