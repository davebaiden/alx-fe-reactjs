// src/components/SearchBar.jsx
function SearchBar({ username, setUsername, onSearch }) {
  return (
    <form onSubmit={onSearch} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          marginRight: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          backgroundColor: "#24292e",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
