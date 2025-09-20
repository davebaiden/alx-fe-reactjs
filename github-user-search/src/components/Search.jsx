import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUser, setLoading, setError }) {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // <-- target.value is here
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
