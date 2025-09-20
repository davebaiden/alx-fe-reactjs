// src/services/githubService.js

export async function searchUsers(query, location = '', minRepos = 0) {
  // Build the search query string
  let searchQuery = `${query}`;
  if (location) {
    searchQuery += `+location:${location}`;
  }
  if (minRepos > 0) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  const response = await fetch(
    `https://api.github.com/search/users?q=${searchQuery}`
  );
  const data = await response.json();
  return data.items;
}

export async function getUserDetails(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );
  return await response.json();
}
