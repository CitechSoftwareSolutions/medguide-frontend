import { useState } from "react";
import { useAuth } from "../lib/auth.jsx";
import { navigate } from "../lib/router.js";

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username, password);
      navigate("/");
    }
  };

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", backgroundColor: "var(--blue-50)"
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "var(--white)", padding: "40px", borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)", width: "100%", maxWidth: "400px",
        display: "flex", flexDirection: "column", gap: "20px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <h1 style={{ color: "var(--blue-700)", margin: "0 0 8px", fontSize: "24px" }}>MedGuide Portal</h1>
          <p style={{ color: "var(--gray-600)", margin: 0, fontSize: "14px" }}>Sign in to access your dashboard</p>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--blue-700)" }}>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter any username"
            required
            style={{ 
              padding: "12px", borderRadius: "8px", border: "1px solid var(--gray-200)",
              fontSize: "15px", fontFamily: "inherit"
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--blue-700)" }}>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter any password"
            required
            style={{ 
              padding: "12px", borderRadius: "8px", border: "1px solid var(--gray-200)",
              fontSize: "15px", fontFamily: "inherit"
            }}
          />
        </div>

        <button type="submit" style={{
          background: "var(--blue-600)", color: "var(--white)", border: "none",
          padding: "14px", borderRadius: "8px", fontSize: "15px", fontWeight: "600",
          cursor: "pointer", marginTop: "10px", transition: "background 0.2s"
        }}
        onMouseOver={e => e.currentTarget.style.background = "var(--blue-700)"}
        onMouseOut={e => e.currentTarget.style.background = "var(--blue-600)"}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
