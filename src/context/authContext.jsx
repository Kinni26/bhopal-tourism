import React, { createContext, useState, useEffect } from "react";

// 1. Create Auth Context
export const AuthContext = createContext();

// 2. Create Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(storedUser);
  }, []);

  // Login function
  const login = (username) => {
    localStorage.setItem("user", username);
    setUser(username);
  };

  // Signup function
  const signup = (username) => {
    localStorage.setItem("user", username);
    setUser(username);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
