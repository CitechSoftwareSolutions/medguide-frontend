import { useAuth } from "../lib/auth.jsx";
import { navigate } from "../lib/router.js";

export default function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--blue-50)", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div>
            <h1 style={{ color: "var(--blue-700)", margin: "0 0 8px", fontSize: "28px" }}>Welcome, {user?.name || "User"}</h1>
            <p style={{ color: "var(--gray-600)", margin: 0 }}>What would you like to do today?</p>
          </div>
          <button onClick={logout} style={{
            background: "transparent", color: "var(--blue-600)", border: "1px solid var(--blue-600)",
            padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "500"
          }}
          onMouseOver={e => { e.currentTarget.style.background = "var(--blue-600)"; e.currentTarget.style.color = "var(--white)"; }}
          onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--blue-600)"; }}
          >
            Log Out
          </button>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          
          {/* Chat Card */}
          <div 
            onClick={() => navigate("/chat")}
            style={{
              background: "var(--white)", padding: "30px", borderRadius: "16px", cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)", transition: "transform 0.2s, box-shadow 0.2s",
              border: "1px solid var(--gray-200)", display: "flex", flexDirection: "column", gap: "16px"
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.06)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)"; }}
          >
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--blue-100)", color: "var(--blue-700)", display: "grid", placeItems: "center", fontSize: "24px" }}>
              💬
            </div>
            <div>
              <h2 style={{ margin: "0 0 8px", color: "var(--blue-700)", fontSize: "20px" }}>Chat with Assistant</h2>
              <p style={{ margin: 0, color: "var(--gray-600)", lineHeight: 1.5 }}>
                Ask complex medical questions, query guidelines, and get evidence-based insights instantly.
              </p>
            </div>
          </div>

          {/* Read Post Card */}
          <div 
            onClick={() => navigate("/posts/1")}
            style={{
              background: "var(--white)", padding: "30px", borderRadius: "16px", cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)", transition: "transform 0.2s, box-shadow 0.2s",
              border: "1px solid var(--gray-200)", display: "flex", flexDirection: "column", gap: "16px"
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.06)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)"; }}
          >
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--blue-100)", color: "var(--blue-700)", display: "grid", placeItems: "center", fontSize: "24px" }}>
              📄
            </div>
            <div>
              <h2 style={{ margin: "0 0 8px", color: "var(--blue-700)", fontSize: "20px" }}>Read Post</h2>
              <p style={{ margin: 0, color: "var(--gray-600)", lineHeight: 1.5 }}>
                View well-organized clinical posts, guidelines, and recent case study breakdowns.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
