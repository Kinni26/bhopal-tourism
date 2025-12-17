import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "12px",
        // backgroundColor: "#fff",
        backgroundColor: "#BBBDE6",
      }}
    >
      <h4>{review.user}</h4>
      <p>Rating: {review.rating} / 5</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
