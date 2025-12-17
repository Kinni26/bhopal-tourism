import React, { useState } from "react";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return alert("Enter username");
    localStorage.setItem("user", username);
    onSignup(username);
  };

  return (
    <div className="container" style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button className="btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
