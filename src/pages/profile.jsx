import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(stored);
  }, []);

  if (!user) return <p style={{ padding: "20px" }}>No user logged in</p>;

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {user}
      </p>
      <p>Welcome to your profile page!</p>
    </div>
  );
};

export default Profile;
