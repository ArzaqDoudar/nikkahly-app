// context/AuthContext.js
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Create the provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // default: not logged in

  const [isOfficant, setIsOfficant] = useState(false);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isOfficant, setIsOfficant }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Create a custom hook (for easy access)
export const useAuth = () => useContext(AuthContext);
