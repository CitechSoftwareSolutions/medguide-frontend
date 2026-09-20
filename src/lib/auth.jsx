import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Try to load user from localStorage so it persists across reloads
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("medguide_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (username, password) => {
    // Mock login - accept any credentials for demo purposes
    const mockUser = { username, name: "Dr. " + username, role: "Doctor" };
    setUser(mockUser);
    localStorage.setItem("medguide_user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("medguide_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
