// // import React from "react";
// // import { places } from "../data/placesData";
// // import PlaceCard from "../components/PlaceCard";

// // const Places = ({ onSelectPlace }) => {
// //   return (
// //     <div className="container">
// //       <header style={{ margin: "20px 0" }}>
// //         <h2>All Places to Visit in Bhopal</h2>
// //       </header>
// //       <div className="grid">
// //         {places.map((place) => (
// //           <PlaceCard key={place.id} place={place} onClick={onSelectPlace} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Places;



// import React, { useState } from "react";
// import { places } from "../data/placesData";
// import PlaceCard from "../components/PlaceCard";

// const Places = () => {
//   const [selectedPlace, setSelectedPlace] = useState(null);

//   const handleSelectPlace = (place) => setSelectedPlace(place);
//   const handleCloseModal = () => setSelectedPlace(null);

//   return (
//     <div className="container">
//       <header style={{ margin: "20px 0" }}>
//         <h2>All Places to Visit in Bhopal</h2>
//       </header>
//       <div
//         className="grid"
//         style={{
//           display: "grid",
//           gap: "1.5rem",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         }}
//       >
//         {places.map((place) => (
//           <PlaceCard key={place.id} place={place} onClick={handleSelectPlace} />
//         ))}
//       </div>

//       {selectedPlace && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={handleCloseModal}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "12px",
//               maxWidth: "500px",
//               width: "90%",
//               padding: "1.5rem",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "15px",
//                 fontSize: "1.5rem",
//                 cursor: "pointer",
//                 background: "none",
//                 border: "none",
//               }}
//               onClick={handleCloseModal}
//             >
//               ✖
//             </button>
//             <img
//               src={selectedPlace.image}
//               alt={selectedPlace.name}
//               style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}
//             />
//             <h2 style={{ marginTop: "1rem" }}>{selectedPlace.name}</h2>
//             <p><strong>Category:</strong> {selectedPlace.category}</p>
//             <p><strong>Location:</strong> {selectedPlace.location}</p>
//             <p>{selectedPlace.description}</p>

//             {/* Reviews */}
//             {selectedPlace.reviews.length > 0 && (
//               <div style={{ marginTop: "1rem" }}>
//                 <h4>Reviews:</h4>
//                 {selectedPlace.reviews.map((rev, i) => (
//                   <p key={i}>
//                     <strong>{rev.user}</strong>: {"⭐".repeat(rev.rating)} - {rev.comment}
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* See on Map button */}
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.location)}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginTop: "1rem",
//                 padding: "0.5rem 1rem",
//                 backgroundColor: "#3498db",
//                 color: "white",
//                 borderRadius: "5px",
//                 textDecoration: "none",
//               }}
//             >
//               See on Map
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Places;




// import React, { useState } from "react";
// import { places as initialPlaces } from "../data/placesData";
// import PlaceCard from "../components/PlaceCard";

// const Places = () => {
//   const [places, setPlaces] = useState(initialPlaces);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });

//   const handleSelectPlace = (place) => setSelectedPlace(place);
//   const handleCloseModal = () => {
//     setSelectedPlace(null);
//     setNewReview({ user: "", rating: 5, comment: "" });
//   };

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     if (!newReview.user || !newReview.comment) return alert("Please fill all fields");

//     // Add review to selected place
//     const updatedPlaces = places.map((p) =>
//       p.id === selectedPlace.id
//         ? { ...p, reviews: [...p.reviews, newReview] }
//         : p
//     );
//     setPlaces(updatedPlaces);

//     // Update selectedPlace so modal shows new review immediately
//     setSelectedPlace({ ...selectedPlace, reviews: [...selectedPlace.reviews, newReview] });

//     // Clear form
//     setNewReview({ user: "", rating: 5, comment: "" });
//   };

//   return (
//     <div className="container">
//       <header style={{ margin: "20px 0" }}>
//         <h2>All Places to Visit in Bhopal</h2>
//       </header>
//       <div
//         className="grid"
//         style={{
//           display: "grid",
//           gap: "1.5rem",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         }}
//       >
//         {places.map((place) => (
//           <PlaceCard key={place.id} place={place} onClick={handleSelectPlace} />
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedPlace && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//           onClick={handleCloseModal}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "12px",
//               maxWidth: "600px",
//               width: "90%",
//               maxHeight: "90vh",
//               overflowY: "auto",
//               padding: "1.5rem",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "15px",
//                 fontSize: "1.5rem",
//                 cursor: "pointer",
//                 background: "none",
//                 border: "none",
//               }}
//               onClick={handleCloseModal}
//             >
//               ✖
//             </button>
//             <img
//               src={selectedPlace.image}
//               alt={selectedPlace.name}
//               style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
//             />
//             <h2 style={{ marginTop: "1rem" }}>{selectedPlace.name}</h2>
//             <p><strong>Category:</strong> {selectedPlace.category}</p>
//             <p><strong>Location:</strong> {selectedPlace.location}</p>
//             <p style={{ marginTop: "0.5rem" }}>{selectedPlace.description}</p>

//             {/* Reviews */}
//             <div style={{ marginTop: "1rem" }}>
//               <h4>Reviews:</h4>
//               {selectedPlace.reviews.length > 0 ? (
//                 selectedPlace.reviews.map((rev, i) => (
//                   <p key={i}>
//                     <strong>{rev.user}</strong>: {"⭐".repeat(rev.rating)} - {rev.comment}
//                   </p>
//                 ))
//               ) : (
//                 <p>No reviews yet.</p>
//               )}
//             </div>

//             {/* Add Review Form */}
//             <form onSubmit={handleReviewSubmit} style={{ marginTop: "1rem" }}>
//               <h4>Add Your Review:</h4>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={newReview.user}
//                 onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
//                 style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//               />
//               <select
//                 value={newReview.rating}
//                 onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
//                 style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//               >
//                 {[5, 4, 3, 2, 1].map((r) => (
//                   <option key={r} value={r}>
//                     {r} Star{r > 1 ? "s" : ""}
//                   </option>
//                 ))}
//               </select>
//               <textarea
//                 placeholder="Your Comment"
//                 value={newReview.comment}
//                 onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                 style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//               />
//               <button
//                 type="submit"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   backgroundColor: "#4caf50",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Submit Review
//               </button>
//             </form>

//             {/* See on Map */}
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.location)}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginTop: "1rem",
//                 padding: "0.5rem 1rem",
//                 backgroundColor: "#3498db",
//                 color: "white",
//                 borderRadius: "5px",
//                 textDecoration: "none",
//               }}
//             >
//               See on Map
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Places;




// import React, { useState } from "react";
// import { places as initialPlaces } from "../data/placesData";
// import PlaceCard from "../components/PlaceCard";

// const Places = () => {
//   const [places, setPlaces] = useState(initialPlaces);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });

//   const handleSelectPlace = (place) => setSelectedPlace(place);
//   const handleCloseModal = () => {
//     setSelectedPlace(null);
//     setNewReview({ user: "", rating: 5, comment: "" });
//   };

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     if (!newReview.user || !newReview.comment) return alert("Please fill all fields");

//     const updatedPlaces = places.map((p) =>
//       p.id === selectedPlace.id
//         ? { ...p, reviews: [...p.reviews, newReview] }
//         : p
//     );
//     setPlaces(updatedPlaces);

//     setSelectedPlace({ ...selectedPlace, reviews: [...selectedPlace.reviews, newReview] });
//     setNewReview({ user: "", rating: 5, comment: "" });
//   };

//   return (
//     <div className="container">
//       <header style={{ margin: "20px 0" }}>
//         <h2>All Places to Visit in Bhopal</h2>
//       </header>

//       <div
//         className="grid"
//         style={{
//           display: "grid",
//           gap: "1.5rem",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         }}
//       >
//         {places.map((place) => (
//           <PlaceCard key={place.id} place={place} onClick={handleSelectPlace} />
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedPlace && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//           onClick={handleCloseModal}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "12px",
//               maxWidth: "600px",
//               width: "90%",
//               maxHeight: "90vh",
//               overflowY: "auto",
//               padding: "1.5rem",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "15px",
//                 fontSize: "1.5rem",
//                 cursor: "pointer",
//                 background: "none",
//                 border: "none",
//               }}
//               onClick={handleCloseModal}
//             >
//               ✖
//             </button>

//             {/* Place Image */}
//             <img
//               src={selectedPlace.image}
//               alt={selectedPlace.name}
//               style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
//             />

//             {/* Place Info */}
//             <h2 style={{ marginTop: "1rem" }}>{selectedPlace.name}</h2>
//             <p><strong>Category:</strong> {selectedPlace.category}</p>
//             <p><strong>Location:</strong> {selectedPlace.location}</p>
//             <p style={{ marginTop: "0.5rem" }}>{selectedPlace.description}</p>

//             {/* Reviews */}
//             <div style={{ marginTop: "1rem" }}>
//               <h4>Reviews:</h4>
//               {selectedPlace.reviews.length > 0 ? (
//                 selectedPlace.reviews.map((rev, i) => (
//                   <p key={i}>
//                     <strong>{rev.user}</strong>: {"⭐".repeat(rev.rating)} - {rev.comment}
//                   </p>
//                 ))
//               ) : (
//                 <p>No reviews yet.</p>
//               )}
//             </div>

//             {/* Add Review Form */}
//             <form onSubmit={handleReviewSubmit} style={{ marginTop: "1rem" }}>
//               <h4>Add Your Review:</h4>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={newReview.user}
//                 onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
//                 style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//               />
//               <select
//                 value={newReview.rating}
//                 onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
//                 style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//               >
//                 {[5, 4, 3, 2, 1].map((r) => (
//                   <option key={r} value={r}>
//                     {r} Star{r > 1 ? "s" : ""}
//                   </option>
//                 ))}
//               </select>
//               <textarea
//                 placeholder="Your Comment"
//                 value={newReview.comment}
//                 onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                 style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
//               />
//               <button
//                 type="submit"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   backgroundColor: "#4caf50",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Submit Review
//               </button>
//             </form>

//             {/* Share Buttons */}
//             <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
//               <a
//                 href={`https://api.whatsapp.com/send?text=Check out ${encodeURIComponent(selectedPlace.name)} in Bhopal!`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   backgroundColor: "#25D366",
//                   color: "white",
//                   borderRadius: "5px",
//                   textDecoration: "none",
//                 }}
//               >
//                 WhatsApp
//               </a>
//               <a
//                 href={`https://twitter.com/intent/tweet?text=Check out ${encodeURIComponent(selectedPlace.name)} in Bhopal!`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   backgroundColor: "#1DA1F2",
//                   color: "white",
//                   borderRadius: "5px",
//                   textDecoration: "none",
//                 }}
//               >
//                 Twitter
//               </a>
//               <a
//                 href={`https://www.facebook.com/sharer/sharer.php?u=https://example.com`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   backgroundColor: "#3b5998",
//                   color: "white",
//                   borderRadius: "5px",
//                   textDecoration: "none",
//                 }}
//               >
//                 Facebook
//               </a>
//             </div>

//             {/* See on Map */}
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.location)}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginTop: "1rem",
//                 padding: "0.5rem 1rem",
//                 backgroundColor: "#3498db",
//                 color: "white",
//                 borderRadius: "5px",
//                 textDecoration: "none",
//               }}
//             >
//               See on Map
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Places;




import React, { useState } from "react";
import { places as initialPlaces } from "../data/placesData";
import PlaceCard from "../components/placeCard";
import { generateReviewSummary } from "../assets/utils/aiReviewSummary";
import { getRecommendedPlaces } from "../assets/utils/aiRecommendations";


const Places = () => {
  const [places, setPlaces] = useState(initialPlaces);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });
  const [searchTerm, setSearchTerm] = useState("");


  const handleSelectPlace = (place) => setSelectedPlace(place);
  const handleCloseModal = () => {
    setSelectedPlace(null);
    setNewReview({ user: "", rating: 5, comment: "" });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.user || !newReview.comment) return alert("Please fill all fields");

    const updatedPlaces = places.map((p) =>
      p.id === selectedPlace.id
        ? { ...p, reviews: [...p.reviews, newReview] }
        : p
    );
    setPlaces(updatedPlaces);
    setSelectedPlace({ ...selectedPlace, reviews: [...selectedPlace.reviews, newReview] });
    setNewReview({ user: "", rating: 5, comment: "" });
  };

  return (
    <div className="container">
      <header style={{ margin: "20px 0" }}>
        <h2>All Places to Visit in Bhopal</h2>
          
            <div
    style={{
      position: "relative",
      maxWidth: "400px",
      marginTop: "1rem",
    }}
  >
    <input
      type="text"
      placeholder="Search places..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setSearchTerm(""); // 🔥 sirf text clear
        }
      }}
      style={{
        width: "100%",
        padding: "0.6rem 2.5rem 0.6rem 1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
      }}
    />

    {/* Search Icon */}
    <span
      onClick={() => setSearchTerm("")}
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "#555",
      }}
    >
      <i class="fa-solid fa-magnifying-glass"></i>
    </span>
  </div>
      </header>

      <div
        className="grid"
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} onClick={handleSelectPlace} />
        ))}
      </div>

      {/* Modal */}
      {selectedPlace && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "1.5rem",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "1.5rem",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              onClick={handleCloseModal}
            >
              ✖
            </button>

            {/* Place Image */}
            <img
              src={selectedPlace.image}
              alt={selectedPlace.name}
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
            />

            {/* Place Info */}
            <h2 style={{ marginTop: "1rem" }}>{selectedPlace.name}</h2>
            <p><strong>Category:</strong> {selectedPlace.category}</p>
            <p><strong>Location:</strong> {selectedPlace.location}</p>
            <p style={{ marginTop: "0.5rem" }}>{selectedPlace.description}</p>

            {/* Reviews */}
            <div style={{ marginTop: "1rem" }}>
              <h4>Reviews:</h4>
              {selectedPlace.reviews.length > 0 ? (
                selectedPlace.reviews.map((rev, i) => (
                  <p key={i}>
                    <strong>{rev.user}</strong>: {"⭐".repeat(rev.rating)} - {rev.comment}
                  </p>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>

            {/* Add Review Form */}
            <form onSubmit={handleReviewSubmit} style={{ marginTop: "1rem" }}>
              <h4>Add Your Review:</h4>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.user}
                onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
                style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
              />
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
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
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  // backgroundColor: "#4caf50",
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

            {/* Share Section */}
            <div style={{ marginTop: "2rem" }}>
              <h3>Share this place:</h3>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <a
                  href={`https://api.whatsapp.com/send?text=Check out ${encodeURIComponent(selectedPlace.name)} in Bhopal!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#25D366",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=Check out ${encodeURIComponent(selectedPlace.name)} in Bhopal!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#1DA1F2",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3b5998",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div style={{ marginTop: "2rem" }}>
              <h3>View on Map:</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-section"
                // style={{
                //   display: "inline-block",
                //   marginTop: "0.5rem",
                //   padding: "0.5rem 1rem",
                //   // backgroundColor: "#3498db",
                //   backgroundColor: "#BDD4E7",
                //   color: "white",
                //   borderRadius: "5px",
                //   textDecoration: "none",
                // }}
              >
                See on Map
              </a>
            </div>



            {/* AI Review Summary */}
    <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#f5f7fa", borderRadius: "8px" }}>
    <h4> AI Review Summary</h4>
  <p>{generateReviewSummary(selectedPlace.reviews)}</p>
</div>



            {/* AI Recommendations */}
<div
  style={{
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#f5f7fa",
    borderRadius: "8px",
  }}
>
  <h3> Recommended for You</h3>

  <ul>
    {getRecommendedPlaces(places, selectedPlace).map((p) => (
      <li key={p.id}>{p.name}</li>
    ))}
  </ul>
</div>


          </div>
        </div>
      )}
    </div>
  );
};

export default Places;
