// @ts-nocheck
// src/services/githubService.js
import axios from "axios";

const API_URL = "https://api.github.com/users";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY || "";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export async function fetchUserData(username) {
  try {
    const response = await axiosInstance.get(`/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
