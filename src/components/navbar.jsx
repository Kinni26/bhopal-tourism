import React from "react";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar container">
      <h1>Bhopal Tourism</h1>
      <div>
        <a href="/">Home</a>
        <a href="/places">Places</a>
        {user ? (
          <>
            <span style={{ marginLeft: "12px" }}>Hello, {user}</span>
            <button className="btn" onClick={onLogout} style={{ marginLeft: "12px" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
//       <div className="container">
//         <Link className="navbar-brand fw-bold fs-3" to="/">
//           Bhopal Tourism
//         </Link>

//         <button
//           className="navbar-toggler"
//           data-bs-toggle="collapse"
//           data-bs-target="#nav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="nav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item mx-2">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item mx-2">
//               <Link className="nav-link" to="/places">Places</Link>
//             </li>
//             <li className="nav-item mx-2">
//               <Link className="btn btn-light px-4 rounded-pill" to="/login">
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
