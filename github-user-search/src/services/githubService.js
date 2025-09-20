// src/services/githubService.js

const BASE_URL = "https://api.github.com";

export async function searchUsers(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/users?q=${query}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const data = await response.json();
    return data.items; // array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getUserDetails(username) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
}
