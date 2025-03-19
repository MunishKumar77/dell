import React, { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [credentials, setCredentials] = useState(() => {
    const savedCredentials = localStorage.getItem("credentials");
    return savedCredentials ? JSON.parse(savedCredentials) : null;
  });

  // Signup function (store username & password)
  const signup = (username, password) => {
    const newUser = { username, password };
    setCredentials(newUser); // Save in state
    setUser({ username }); // Log in after signup

    // Save to localStorage for persistence
    localStorage.setItem("credentials", JSON.stringify(newUser));
    localStorage.setItem("user", JSON.stringify({ username }));

    return true;
  };

  // Login function (match username & password)
  const login = (username, password) => {
    if (credentials && username === credentials.username && password === credentials.password) {
      setUser({ username });

      // Save session to localStorage
      localStorage.setItem("user", JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear session
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Auth
export const useAuth = () => useContext(AuthContext);
