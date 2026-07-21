function SubtitleSettings() {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>
        📝 Subtitle Settings
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label>Enable Subtitles</label>
          <select style={inputStyle}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label>Subtitle Language</label>
          <select style={inputStyle}>
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Japanese</option>
            <option>French</option>
            <option>German</option>
            <option>Spanish</option>
            <option>Italian</option>
            <option>Korean</option>
            <option>Chinese</option>
          </select>
        </div>

        <div>
          <label>Subtitle Font</label>
          <select style={inputStyle}>
            <option>Arial</option>
            <option>Roboto</option>
            <option>Poppins</option>
            <option>Montserrat</option>
            <option>Open Sans</option>
            <option>Comic Sans</option>
          </select>
        </div>

        <div>
          <label>Font Size</label>
          <select style={inputStyle}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </div>

        <div>
          <label>Subtitle Color</label>
          <select style={inputStyle}>
            <option>White</option>
            <option>Yellow</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Red</option>
            <option>Green</option>
            <option>Pink</option>
          </select>
        </div>

        <div>
          <label>Background Style</label>
          <select style={inputStyle}>
            <option>Transparent</option>
            <option>Black Box</option>
            <option>White Box</option>
            <option>Shadow</option>
            <option>Outline</option>
          </select>
        </div>

        <div>
          <label>Subtitle Position</label>
          <select style={inputStyle}>
            <option>Bottom</option>
            <option>Top</option>
            <option>Center</option>
          </select>
        </div>

        <div>
          <label>Animation</label>
          <select style={inputStyle}>
            <option>None</option>
            <option>Fade</option>
            <option>Slide</option>
            <option>Pop</option>
            <option>Bounce</option>
          </select>
        </div>

        <div>
          <label>Word Highlight</label>
          <select style={inputStyle}>
            <option>Disabled</option>
            <option>Current Word</option>
            <option>Current Sentence</option>
          </select>
        </div>

        <div>
          <label>Subtitle Timing</label>
          <select style={inputStyle}>
            <option>Automatic</option>
            <option>Manual</option>
            <option>AI Synced</option>
          </select>
        </div>

        <div>
          <label>Translation</label>
          <select style={inputStyle}>
            <option>Disabled</option>
            <option>Auto Translate</option>
            <option>Multiple Languages</option>
          </select>
        </div>

        <div>
          <label>Export Subtitle File</label>
          <select style={inputStyle}>
            <option>None</option>
            <option>SRT</option>
            <option>VTT</option>
            <option>TXT</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #444",
  background: "#111827",
  color: "white",
};

export default SubtitleSettings;