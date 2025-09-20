// src/services/githubService.js

const BASE_URL = "https://api.github.com";

/**
 * Search GitHub users with optional filters
 * @param {string} query - search keyword
 * @param {string} location - optional user location filter
 * @param {number} minRepos - optional minimum number of public repos
 * @returns {Promise<Array>} - list of users
 */
export async function searchUsers(query, location = "", minRepos = 0) {
  try {
    let searchQuery = `${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await fetch(`${BASE_URL}/search/users?q=${searchQuery}`);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

    const data = await response.json();
    return data.items; // array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

/**
 * Get detailed info about a specific GitHub user
 * @param {string} username
 * @returns {Promise<Object>}
 */
export async function getUserDetails(username) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
}
