import React, { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import AddReview from "../components/AddReview";

const PlaceDetails = ({ place, onBack }) => {
  const [reviews, setReviews] = useState(place.reviews || []);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="container">
      <button className="btn" onClick={onBack} style={{ margin: "20px 0" }}>
        ← Back
      </button>

      <div style={{ textAlign: "center" }}>
        <h2>{place.name}</h2>
        <img
          src={place.image}
          alt={place.name}
          style={{ maxWidth: "100%", borderRadius: "8px", margin: "20px 0" }}
        />
        <p>{place.description}</p>
        <p>
          <strong>Category:</strong> {place.category}
        </p>
        <p>{place.location}</p>
      </div>

      <section style={{ marginTop: "30px" }}>
        <h3>Reviews</h3>
        {reviews.length === 0 && <p>No reviews yet. Be the first!</p>}
        {reviews.map((r, idx) => (
          <ReviewCard key={idx} review={r} />
        ))}
        <AddReview onAdd={handleAddReview} />
      </section>
    </div>
  );
};

export default PlaceDetails;
