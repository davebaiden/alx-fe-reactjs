// src/components/Search.jsx
import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);
  const [users, setUsers] = useState([]);

  // Function the tests expect
  const fetchUserData = async () => {
    if (!query) return;
    const results = await searchUsers(query, location, minRepos);
    setUsers(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location (optional)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Repos (optional)"
        value={minRepos}
        onChange={(e) => setMinRepos(Number(e.target.value))}
      />
      <button onClick={fetchUserData}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}
