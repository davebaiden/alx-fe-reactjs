// src/services/githubService.js

export async function searchUsers(query) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}`
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
