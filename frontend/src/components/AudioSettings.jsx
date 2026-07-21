function AudioSettings() {
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
        🎵 Audio Settings
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label>Voice Type</label>
          <select style={inputStyle}>
            <option>Female</option>
            <option>Male</option>
            <option>Child Girl</option>
            <option>Child Boy</option>
            <option>Grandmother</option>
            <option>Story Teller</option>
          </select>
        </div>

        <div>
          <label>Voice Language</label>
          <select style={inputStyle}>
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Japanese</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        <div>
          <label>AI Narrator Speed</label>
          <select style={inputStyle}>
            <option>0.75x</option>
            <option>1x (Normal)</option>
            <option>1.25x</option>
            <option>1.5x</option>
            <option>2x</option>
          </select>
        </div>

        <div>
          <label>Voice Emotion</label>
          <select style={inputStyle}>
            <option>Happy</option>
            <option>Funny</option>
            <option>Excited</option>
            <option>Educational</option>
            <option>Adventure</option>
            <option>Calm</option>
            <option>Emotional</option>
          </select>
        </div>

        <div>
          <label>Background Music</label>
          <select style={inputStyle}>
            <option>None</option>
            <option>Happy Kids</option>
            <option>Adventure</option>
            <option>Fantasy</option>
            <option>Calm Piano</option>
            <option>Funny Cartoon</option>
            <option>Epic</option>
          </select>
        </div>

        <div>
          <label>Music Volume</label>
          <select style={inputStyle}>
            <option>0%</option>
            <option>25%</option>
            <option>50%</option>
            <option>75%</option>
            <option>100%</option>
          </select>
        </div>

        <div>
          <label>Narrator Volume</label>
          <select style={inputStyle}>
            <option>25%</option>
            <option>50%</option>
            <option>75%</option>
            <option>100%</option>
          </select>
        </div>

        <div>
          <label>Background Sound Effects</label>
          <select style={inputStyle}>
            <option>Disabled</option>
            <option>Nature</option>
            <option>Rain</option>
            <option>Birds</option>
            <option>Forest</option>
            <option>Ocean</option>
            <option>Cartoon FX</option>
          </select>
        </div>

        <div>
          <label>Audio Quality</label>
          <select style={inputStyle}>
            <option>Standard</option>
            <option>High</option>
            <option>Studio</option>
            <option>Lossless</option>
          </select>
        </div>

        <div>
          <label>Noise Reduction</label>
          <select style={inputStyle}>
            <option>Off</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label>Voice Pitch</label>
          <select style={inputStyle}>
            <option>Very Low</option>
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
            <option>Very High</option>
          </select>
        </div>

        <div>
          <label>Audio Format</label>
          <select style={inputStyle}>
            <option>MP3</option>
            <option>WAV</option>
            <option>AAC</option>
            <option>FLAC</option>
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

export default AudioSettings;