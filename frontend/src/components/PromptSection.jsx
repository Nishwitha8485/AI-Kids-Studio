import { FileText } from "lucide-react";

function PromptSection({ prompt, setPrompt }) {
  return (
    <div
      style={{
        background: "#1f2937",
        borderRadius: "18px",
        padding: "30px",
        marginBottom: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <FileText size={28} style={{ marginRight: "10px" }} />
        Story Prompt
      </h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={12}
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
          padding: "18px",
          background: "#111827",
          color: "white",
          border: "1px solid #374151",
          borderRadius: "12px",
          fontSize: "16px",
          resize: "vertical",
          outline: "none",
          boxSizing: "border-box",
          lineHeight: "1.7",
        }}
      />
    </div>
  );
}

export default PromptSection;