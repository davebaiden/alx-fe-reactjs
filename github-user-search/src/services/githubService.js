import axios from "axios";

// Function to fetch GitHub users with optional filters
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = `https://api.github.com/search/users?q=${username}`;

    // Add filters if provided
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(query);
    return response.data; // returns an object with "items" array
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
