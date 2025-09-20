import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUser, setLoading, setError }) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!username) return;

    setIsLoading(true);
    setIsError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setIsError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // <-- target.value
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} width={100} /> {/* <-- avatar_url, img */}
          <h2>{userData.login}</h2> {/* <-- login */}
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
