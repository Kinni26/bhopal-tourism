// import React from "react";
// import React, { useState } from "react";

// import { places } from "../data/placesData";
// import PlaceCard from "../components/PlaceCard";





// const Home = ({ onSelectPlace }) => {
//   const popularPlaces = places.slice(0, 6); // show first 6 as popular
//   const [searchTerm, setSearchTerm] = useState("");



 
//   return (
//     <div className="container">
//       <header style={{ textAlign: "center", margin: "30px 0" }}>
//         <h2>Welcome to Bhopal Tourism</h2>
//         <p>Explore the beauty and heritage of Bhopal</p>

//             {/* Search Bar */}
//   <div
//     style={{
//       position: "relative",
//       maxWidth: "400px",
//       margin: "20px auto 0",
//     }}
//   >
//     <input
//       type="text"
//       placeholder="Search places..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       onKeyDown={(e) => {
//         if (e.key === "Enter") {
//           setSearchTerm(""); // ✅ sirf text clear
//         }
//       }}
//       style={{
//         width: "100%",
//         padding: "0.6rem 2.5rem 0.6rem 1rem",
//         borderRadius: "8px",
//         border: "1px solid #ccc",
//         outline: "none",
//       }}
//     />

//     {/* Search Icon */}
//     <span
//       onClick={() => setSearchTerm("")}
//       style={{
//         position: "absolute",
//         right: "10px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         cursor: "pointer",
//         fontSize: "1.2rem",
//         color: "#555",
//       }}
//     >
//             <i className="fa-solid fa-magnifying-glass"></i>

//     </span>
//   </div>
//       </header>

//       <section>
//         <h3>Popular Places</h3>
//         <div className="grid">
//           {popularPlaces.map((place) => (
//             <PlaceCard
//               key={place.id}
//               place={place}
//               onClick={onSelectPlace}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from "react";
import { places as initialPlaces } from "../data/placesData";
import PlaceCard from "../components/placeCard";
import { generateReviewSummary } from "../assets/utils/aiReviewSummary";
import { getRecommendedPlaces } from "../assets/utils/aiRecommendations";

const Home = () => {
  const [places, setPlaces] = useState(initialPlaces);
  const popularPlaces = places.slice(0, 6);

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({
    user: "",
    rating: 5,
    comment: "",
  });



  const infoBoxStyle = {   // 👈 YAHAN ADD KARO
    marginTop: "1.5rem",
    padding: "1rem",
    backgroundColor: "#f5f7fa",
    borderRadius: "8px",
  };


  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectPlace = (place) => setSelectedPlace(place);

  const handleCloseModal = () => {
    setSelectedPlace(null);
    setNewReview({ user: "", rating: 5, comment: "" });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.user || !newReview.comment)
      return alert("Fill all fields");

    const updatedPlaces = places.map((p) =>
      p.id === selectedPlace.id
        ? { ...p, reviews: [...p.reviews, newReview] }
        : p
    );

    setPlaces(updatedPlaces);
    setSelectedPlace({
      ...selectedPlace,
      reviews: [...selectedPlace.reviews, newReview],
    });

    setNewReview({ user: "", rating: 5, comment: "" });
  };

  return (
    <div className="container">
      <header style={{ textAlign: "center", margin: "30px 0" }}>
        <h2>Welcome to Bhopal Tourism</h2>
        <p>Explore the beauty and heritage of Bhopal</p>

        {/* Search Bar */}
        <div style={{ maxWidth: "400px", margin: "20px auto" }}>
          <input
            placeholder="Search places..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </header>

      <h3>Popular Places</h3>
      <div className="grid">
        {popularPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onClick={handleSelectPlace}
          />
        ))}
      </div>

      {/* 🔥 SAME MODAL AS PLACES.JSX */}
      {selectedPlace && (
        <div
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              width: "90%",
              maxWidth: "600px",
              borderRadius: "12px",
              padding: "1.5rem",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{ float: "right", fontSize: "1.2rem" }}
            >
              ✖
            </button>

            <img
              src={selectedPlace.image}
              alt={selectedPlace.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.description}</p>

           {/* Reviews */}
<div style={{ marginTop: "1rem" }}>
  <h4>Reviews:</h4>

  {selectedPlace.reviews.length > 0 ? (
    selectedPlace.reviews.map((rev, i) => (
      <p key={i} style={{ marginBottom: "0.5rem" }}>
        <strong>{rev.user}</strong>:{" "}
        {"⭐".repeat(rev.rating)} - {rev.comment}
      </p>
    ))
  ) : (
    <p>No reviews yet.</p>
  )}
</div>


            <form onSubmit={handleReviewSubmit} style={{ marginTop: "1rem" }}>
  <h4>Add Your Review:</h4>

  <input
    type="text"
    placeholder="Your Name"
    value={newReview.user}
    onChange={(e) =>
      setNewReview({ ...newReview, user: e.target.value })
    }
    style={{
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
    }}
  />

  <select
    value={newReview.rating}
    onChange={(e) =>
      setNewReview({ ...newReview, rating: Number(e.target.value) })
    }
    style={{
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
    }}
  >
    {[5, 4, 3, 2, 1].map((r) => (
      <option key={r} value={r}>
        {r} Star{r > 1 ? "s" : ""}
      </option>
    ))}
  </select>

  <textarea
    placeholder="Your Comment"
    value={newReview.comment}
    onChange={(e) =>
      setNewReview({ ...newReview, comment: e.target.value })
    }
    style={{
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
    }}
  />

  <button
    type="submit"
    style={{
      padding: "0.5rem 1rem",
      backgroundColor: "#BBBDE6",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Submit Review
  </button>
</form>



   



            {/* AI Review Summary */}
<div style={infoBoxStyle}>
  <h4>AI Review Summary</h4>

  {selectedPlace.reviews.length > 0 ? (
    <p>{generateReviewSummary(selectedPlace.reviews)}</p>
  ) : (
    <p>No reviews available for AI summary.</p>
  )}
</div>

{/* AI Recommendations */}
<div style={infoBoxStyle}>
  <h4>Recommended for You</h4>

  <ul style={{ paddingLeft: "1.2rem" }}>
    {getRecommendedPlaces(places, selectedPlace).map((p) => (
      <li key={p.id} style={{ marginBottom: "0.4rem" }}>
        {p.name}
      </li>
    ))}
  </ul>
</div>

{/* Map Section */}
<div style={{ marginTop: "2rem" }}>
  <h3>View on Map:</h3>

  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      selectedPlace.location
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="map-section"
  >
    See on Map
  </a>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
