function PromptSection() {
  return (
    <div
      style={{
        background: "#1d2433",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "25px",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "15px",
        }}
      >
        📝 Story Prompt
      </h2>

      <textarea
        rows="8"
        placeholder={`Example:
Create a funny story about a brave rabbit who saves the forest using teamwork and kindness.

Include:
• Educational message
• Colorful characters
• Funny moments
• Moral lesson
• Happy ending`}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          background: "#111827",
          color: "white",
          border: "1px solid #333",
          fontSize: "16px",
          resize: "vertical",
          outline: "none",
        }}
      ></textarea>
    </div>
  );
}

export default PromptSection;