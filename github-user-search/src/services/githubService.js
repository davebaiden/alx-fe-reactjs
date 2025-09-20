import axios from "axios";

const API_URL = "https://api.github.com";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: token ? { Authorization: `token ${token}` } : undefined,
});

export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const res = await axiosInstance.get(
    `/search/users?q=${encodeURIComponent(query)}`
  );
  return res.data;
}
