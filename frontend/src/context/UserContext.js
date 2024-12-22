import React, { createContext, useState, useContext } from "react";

// Create the UserContext
const UserContext = createContext();

// Custom Hook for easier usage
export const useUser = () => useContext(UserContext);

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://via.placeholder.com/150",
  });

  // Simulate logout by clearing user data
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
