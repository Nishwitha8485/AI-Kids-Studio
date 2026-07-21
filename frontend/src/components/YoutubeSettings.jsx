function YoutubeSettings() {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#5946e4", marginBottom: "20px" }}>
        📺 YouTube Optimization
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label>Auto Generate Title</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>Auto Description</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>Auto Hashtags</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>Auto Thumbnail</label>
          <select style={inputStyle}>
            <option>AI Generated</option>
            <option>Custom Upload</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>Thumbnail Style</label>
          <select style={inputStyle}>
            <option>Kids Cartoon</option>
            <option>Bright & Colorful</option>
            <option>Disney Style</option>
            <option>Anime</option>
            <option>3D Cartoon</option>
          </select>
        </div>

        <div>
          <label>YouTube Category</label>
          <select style={inputStyle}>
            <option>Education</option>
            <option>Kids</option>
            <option>Entertainment</option>
            <option>Animation</option>
            <option>Science & Technology</option>
          </select>
        </div>

        <div>
          <label>Audience</label>
          <select style={inputStyle}>
            <option>Made for Kids</option>
            <option>General Audience</option>
            <option>Teens</option>
          </select>
        </div>

        <div>
          <label>Visibility</label>
          <select style={inputStyle}>
            <option>Private</option>
            <option>Unlisted</option>
            <option>Public</option>
          </select>
        </div>

        <div>
          <label>Upload Schedule</label>
          <select style={inputStyle}>
            <option>Immediately</option>
            <option>Schedule Later</option>
            <option>Best AI Time</option>
          </select>
        </div>

        <div>
          <label>Preferred Upload Time</label>
          <select style={inputStyle}>
            <option>6 AM</option>
            <option>9 AM</option>
            <option>12 PM</option>
            <option>3 PM</option>
            <option>6 PM</option>
            <option>9 PM</option>
          </select>
        </div>

        <div>
          <label>SEO Optimization</label>
          <select style={inputStyle}>
            <option>Basic</option>
            <option>Advanced</option>
            <option>Maximum AI SEO</option>
          </select>
        </div>

        <div>
          <label>Keyword Generation</label>
          <select style={inputStyle}>
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>

        <div>
          <label>Video Chapters</label>
          <select style={inputStyle}>
            <option>Automatic</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>End Screen</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>YouTube Cards</label>
          <select style={inputStyle}>
            <option>Automatic</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>Playlist</label>
          <select style={inputStyle}>
            <option>Educational Stories</option>
            <option>Rhymes</option>
            <option>Learning Videos</option>
            <option>None</option>
          </select>
        </div>

        <div>
          <label>Comments</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div>
          <label>Monetization Ready</label>
          <select style={inputStyle}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label>Video Language</label>
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
          <label>Publishing Region</label>
          <select style={inputStyle}>
            <option>Worldwide</option>
            <option>India</option>
            <option>USA</option>
            <option>Japan</option>
            <option>Europe</option>
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

export default YoutubeSettings;