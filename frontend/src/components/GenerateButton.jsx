function GenerateButton() {
  return (
    <div
      style={{
        marginTop: "40px",
        marginBottom: "50px",
        background: "#111827",
        padding: "30px",
        borderRadius: "18px",
        textAlign: "center",
        border: "2px solid #2563eb",
        boxShadow: "0 0 25px rgba(37,99,235,0.25)",
      }}
    >
      <h2
        style={{
          color: "#60a5fa",
          marginBottom: "10px",
        }}
      >
        🚀 Generate AI Video
      </h2>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "25px",
          lineHeight: "28px",
        }}
      >
        AI Kids Studio will automatically execute every AI Agent in sequence to
        generate your complete educational video.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <Status title="Story Generation" />
        <Status title="Character Creation" />
        <Status title="Scene Generation" />
        <Status title="Animation" />
        <Status title="Voice Over" />
        <Status title="Music & SFX" />
        <Status title="Subtitles" />
        <Status title="Quality Check" />
        <Status title="YouTube SEO" />
        <Status title="Video Export" />
      </div>

      <button
        style={{
          background: "linear-gradient(90deg,#2563eb,#7c3aed)",
          color: "white",
          border: "none",
          padding: "18px 45px",
          borderRadius: "12px",
          fontSize: "20px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ✨ Generate Complete AI Video
      </button>

      <div
        style={{
          marginTop: "25px",
          color: "#d1d5db",
          lineHeight: "30px",
        }}
      >
        <p>⏱ Estimated Generation Time : 5 - 15 Minutes</p>
        <p>📺 Output : MP4 • 4K • AI Optimized</p>
        <p>🤖 AI Agents : 12 Active</p>
        <p>🌍 Multi-language Supported</p>
      </div>
    </div>
  );
}

function Status({ title }) {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "10px",
          color: "#22c55e",
          fontSize: "14px",
        }}
      >
        ✅ Ready
      </div>
    </div>
  );
}

export default GenerateButton;