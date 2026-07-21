function AIAgentPanel() {
  const agents = [
    {
      name: "🧠 Story Agent",
      work: "Generates story, script and dialogues",
      color: "#3b82f6",
    },
    {
      name: "🎨 Character Agent",
      work: "Creates consistent AI characters",
      color: "#8b5cf6",
    },
    {
      name: "🖼️ Image Agent",
      work: "Generates scene illustrations",
      color: "#ec4899",
    },
    {
      name: "🎬 Animation Agent",
      work: "Animates all scenes",
      color: "#f97316",
    },
    {
      name: "🎤 Voice Agent",
      work: "Creates AI narration",
      color: "#14b8a6",
    },
    {
      name: "🎵 Music Agent",
      work: "Adds background music & SFX",
      color: "#10b981",
    },
    {
      name: "🌍 Translation Agent",
      work: "Translates video into multiple languages",
      color: "#6366f1",
    },
    {
      name: "📝 Subtitle Agent",
      work: "Creates synchronized subtitles",
      color: "#f59e0b",
    },
    {
      name: "📺 YouTube SEO Agent",
      work: "Optimizes title, description & hashtags",
      color: "#ef4444",
    },
    {
      name: "🛡️ Safety Agent",
      work: "Checks child-safe content",
      color: "#06b6d4",
    },
    {
      name: "✅ QA Agent",
      work: "Verifies overall video quality",
      color: "#22c55e",
    },
    {
      name: "🚀 Publishing Agent",
      work: "Exports & prepares for YouTube upload",
      color: "#a855f7",
    },
  ];

  return (
    <div
      style={{
        background: "#1f2937",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "20px",
        }}
      >
        🤖 Multi-AI Agent Pipeline
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {agents.map((agent, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              borderLeft: `6px solid ${agent.color}`,
              borderRadius: "12px",
              padding: "18px",
              transition: "0.3s",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
            }}
          >
            <h3
              style={{
                color: "white",
                marginBottom: "10px",
              }}
            >
              {agent.name}
            </h3>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              {agent.work}
            </p>

            <div
              style={{
                marginTop: "15px",
              }}
            >
              <span
                style={{
                  background: "#22c55e",
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                Ready
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIAgentPanel;