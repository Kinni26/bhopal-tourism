

import React, { useState } from "react";

const PlaceCard = ({ place, onClick }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={place.image}
        alt={place.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
        onClick={() => onClick(place)}
      />

      {/* Wishlist Heart using Font Awesome */}
<i
  className={favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
  onClick={(e) => {
    e.stopPropagation();
    setFavorite(!favorite); // toggle
  }}
  style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.6rem",
    color: favorite ? "red" : "white", // click pe red, default white
    cursor: "pointer",
    textShadow: "0 0 5px black",
    transition: "transform 0.2s, color 0.2s",
  }}
/>



      {/* Place Info */}
      <div style={{ padding: "1rem" }} onClick={() => onClick(place)}>
        <h3>{place.name}</h3>
        <span
          style={{
            // backgroundColor: "#4caf50",
              backgroundColor: "grey",
            color: "white",
            padding: "0.3rem 0.6rem",
            borderRadius: "5px",
            fontSize: "0.8rem",
          }}
        >
          {place.category}
        </span>
        <p style={{ marginTop: "0.5rem" }}>
          <i className="fa-solid fa-location-crosshairs"></i> {place.location}
        </p>

        {/* View Details Button */}
        <button
          onClick={() => onClick(place)}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            // backgroundColor: "#3498db",
                backgroundColor: "#92b6f0",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default placeCard;
