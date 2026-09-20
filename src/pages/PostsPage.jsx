import { navigate } from "../lib/router.js";

export default function PostsPage({ postId }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--blue-50)", padding: "40px 20px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", background: "var(--white)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid var(--gray-200)" }}>
        
        {/* Header */}
        <div style={{ padding: "30px 40px", borderBottom: "1px solid var(--gray-200)", background: "#fafbfc" }}>
          <button onClick={() => navigate("/")} style={{
            background: "none", border: "none", color: "var(--blue-600)", padding: 0,
            cursor: "pointer", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px"
          }}>
            ← Back to Dashboard
          </button>
          
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <span style={{ background: "var(--blue-100)", color: "var(--blue-700)", padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Clinical Guidelines</span>
            <span style={{ background: "#e4f4e8", color: "#1c6b34", padding: "4px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Reviewed</span>
          </div>
          
          <h1 style={{ color: "var(--blue-700)", margin: "0 0 12px", fontSize: "32px", lineHeight: 1.2 }}>
            Management of Primary Tremors
          </h1>
          <p style={{ color: "var(--gray-600)", margin: 0, fontSize: "15px" }}>
            Published on Sep 20, 2026 • 5 min read
          </p>
        </div>

        {/* Content */}
        <div className="markdown" style={{ padding: "40px", color: "#333", fontSize: "16px", lineHeight: 1.7 }}>
          <p>
            Tremor is an unintentional, rhythmic, muscle movement involving to-and-fro movements (oscillations) of one or more parts of the body. It is the most common of all involuntary movements and can affect the hands, arms, head, face, voice, trunk, and legs.
          </p>
          
          <h2 style={{ marginTop: "32px" }}>1. Initial Approach</h2>
          <ul>
            <li><strong>Detailed history:</strong> Note the onset, duration, and specific hand involvement. Ask about triggers such as stress or caffeine.</li>
            <li><strong>Comprehensive examination:</strong> Evaluate the tremor at rest, with posture, and with action.</li>
            <li><strong>Identify red flags:</strong> Sudden onset, rapid progression, or focal neurologic signs warrant immediate referral.</li>
          </ul>

          <h2 style={{ marginTop: "32px" }}>2. Classification</h2>
          <p>
            The two most commonly encountered primary tremors in outpatient clinical practice are:
          </p>
          <div style={{ background: "var(--blue-50)", padding: "16px 20px", borderRadius: "8px", borderLeft: "4px solid var(--blue-600)", margin: "20px 0" }}>
            <strong>Essential Tremor (ET)</strong>: Typically a bilateral action tremor that predominantly affects the upper extremities. It may also affect the head and voice. A family history is often present.
          </div>
          <div style={{ background: "var(--blue-50)", padding: "16px 20px", borderRadius: "8px", borderLeft: "4px solid var(--blue-600)", margin: "20px 0" }}>
            <strong>Parkinsonian Tremor</strong>: Classically a "pill-rolling" resting tremor. It is often asymmetric at onset and decreases with voluntary movement.
          </div>

          <h2 style={{ marginTop: "32px" }}>3. Management & Follow-up</h2>
          <p>
            Treating the underlying cause is paramount if secondary factors are identified. For primary symptomatic management:
          </p>
          <ul>
            <li><strong>Conservative:</strong> Reassurance, avoiding stimulants (caffeine), stress management, and weighted utensils.</li>
            <li><strong>Pharmacologic (First-line for ET):</strong> Propranolol (40-240 mg/day) or Primidone (25-250 mg/day). Always start low and titrate upward.</li>
            <li><strong>Follow-up:</strong> Review the patient in 4-6 weeks to assess tremor severity, impact on activities of daily living (ADLs), and any medication side effects.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
