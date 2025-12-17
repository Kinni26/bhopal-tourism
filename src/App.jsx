
import React, { useState, useContext } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Places from "./pages/places";
import PlaceDetails from "./pages/placeDetails";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import Profile from "./pages/profile";
import { AuthContext } from "./context/authContext";
import { places } from "./data/placesData";
import { useEffect } from "react";


const App = () => {
  const { user, logout, login, signup } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPlace, setSelectedPlace] = useState(null);



  useEffect(() => {
  const handler = (e) => navigate(e.detail);
  window.addEventListener("navigate", handler);

  return () => window.removeEventListener("navigate", handler);
}, []);


  // Handle page navigation
  const navigate = (page) => {
    setCurrentPage(page);
    setSelectedPlace(null); // reset selected place
  };

  // Handle place selection
  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
    setCurrentPage("placeDetails");
  };

  // Render pages based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onSelectPlace={handleSelectPlace} />;
      case "places":
        return <Places onSelectPlace={handleSelectPlace} />;
      case "placeDetails":
        return (
          <PlaceDetails place={selectedPlace} onBack={() => navigate("places")} />
        );
      case "login":
        return <Login onLogin={login} />;
      case "signup":
        return <Signup onSignup={signup} />;
      case "profile":
        return <Profile />;
      default:
        return <Home onSelectPlace={handleSelectPlace} />;
    }
  };

  return (
    <div>
      <Navbar user={user} onLogout={logout} />
      <main>{renderPage()}</main>
      <Footer />
      <nav
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          display: "flex",
          gap: "8px",
        }}
      >
        {/* Quick page navigation buttons for demo */}
        <button className="btn" onClick={() => navigate("home")}>
          Home
        </button>
        <button className="btn" onClick={() => navigate("places")}>
          Places
        </button>
        {user ? (
          <button className="btn" onClick={() => navigate("profile")}>
            Profile
          </button>
        ) : (
          <>
            <button className="btn" onClick={() => navigate("login")}>
              Login
            </button>
            <button className="btn" onClick={() => navigate("signup")}>
              Signup
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default App;


