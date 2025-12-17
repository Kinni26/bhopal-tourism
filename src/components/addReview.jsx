import React, { useState } from "react";

const AddReview = ({ onAdd }) => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !comment) return alert("Please fill all fields");
    onAdd({ user, rating, comment });
    setUser("");
    setRating(5);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Add a Review</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "100%" }}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "100%" }}
      />
      <textarea
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ marginBottom: "8px", padding: "8px", width: "100%" }}
      />
      <button className="btn" type="submit">
        Submit Review
      </button>
    </form>
  );
};

export default AddReview;
