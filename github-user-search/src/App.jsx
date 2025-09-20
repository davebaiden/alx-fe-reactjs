// @ts-nocheck
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar setUser={setUser} setLoading={setLoading} setError={setError} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
