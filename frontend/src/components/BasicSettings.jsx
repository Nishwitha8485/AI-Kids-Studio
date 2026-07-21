function BasicSettings() {
  return (
    <div
      style={{
        background: "#1d2433",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "25px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        ⚙️ Basic Settings
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {/* Animation Style */}
        <div>
          <label style={{ color: "#bbb" }}>Animation Style</label>
          <select style={styles.select}>
            <option>Cartoon</option>
            <option>Anime</option>
            <option>3D Animation</option>
            <option>Disney Style</option>
            <option>Pixar Style</option>
            <option>Clay Animation</option>
            <option>Watercolor</option>
            <option>Comic Book</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label style={{ color: "#bbb" }}>Language</label>
          <select style={styles.select}>
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Japanese</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label style={{ color: "#bbb" }}>Video Duration</label>
          <select style={styles.select}>
            <option>1 Minute</option>
            <option>3 Minutes</option>
            <option>5 Minutes</option>
            <option>10 Minutes</option>
            <option>15 Minutes</option>
            <option>20 Minutes</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label style={{ color: "#bbb" }}>Age Group</label>
          <select style={styles.select}>
            <option>2-4 Years</option>
            <option>5-7 Years</option>
            <option>8-10 Years</option>
            <option>11-13 Years</option>
          </select>
        </div>

        {/* Emotion */}
        <div>
          <label style={{ color: "#bbb" }}>Story Emotion</label>
          <select style={styles.select}>
            <option>Educational</option>
            <option>Funny</option>
            <option>Adventure</option>
            <option>Happy</option>
            <option>Fantasy</option>
            <option>Emotional</option>
            <option>Mystery</option>
          </select>
        </div>

        {/* Voice */}
        <div>
          <label style={{ color: "#bbb" }}>Narrator Voice</label>
          <select style={styles.select}>
            <option>Female</option>
            <option>Male</option>
            <option>Child Girl</option>
            <option>Child Boy</option>
          </select>
        </div>

        {/* Music */}
        <div>
          <label style={{ color: "#bbb" }}>Background Music</label>
          <select style={styles.select}>
            <option>Happy</option>
            <option>Adventure</option>
            <option>Calm</option>
            <option>Funny</option>
            <option>Magical</option>
            <option>Emotional</option>
            <option>No Music</option>
          </select>
        </div>

        {/* Aspect Ratio */}
        <div>
          <label style={{ color: "#bbb" }}>Aspect Ratio</label>
          <select style={styles.select}>
            <option>16:9 (YouTube)</option>
            <option>9:16 (Shorts)</option>
            <option>1:1 (Instagram)</option>
            <option>4:5 (Facebook)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const styles = {
  select: {
    width: "100%",
    marginTop: "8px",
    padding: "12px",
    borderRadius: "8px",
    background: "#111827",
    color: "white",
    border: "1px solid #333",
    fontSize: "15px",
  },
};

export default BasicSettings;