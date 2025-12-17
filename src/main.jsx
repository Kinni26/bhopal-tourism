// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/global.css";
// import './index.css';


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);



// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/authContext";
// import "./assets/css/global.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
