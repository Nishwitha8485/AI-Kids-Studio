function VideoSettings() {
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
        🎥 Video Settings
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label>Video Resolution</label>
          <select style={inputStyle}>
            <option>720p HD</option>
            <option>1080p Full HD</option>
            <option>1440p 2K</option>
            <option>2160p 4K</option>
            <option>4320p 8K</option>
          </select>
        </div>

        <div>
          <label>Frame Rate (FPS)</label>
          <select style={inputStyle}>
            <option>24 FPS</option>
            <option>30 FPS</option>
            <option>60 FPS</option>
            <option>120 FPS</option>
          </select>
        </div>

        <div>
          <label>Aspect Ratio</label>
          <select style={inputStyle}>
            <option>16:9 YouTube</option>
            <option>9:16 Shorts</option>
            <option>1:1 Instagram</option>
            <option>4:5 Facebook</option>
            <option>21:9 Cinematic</option>
          </select>
        </div>

        <div>
          <label>Video Duration</label>
          <select style={inputStyle}>
            <option>1 Minute</option>
            <option>3 Minutes</option>
            <option>5 Minutes</option>
            <option>10 Minutes</option>
            <option>15 Minutes</option>
            <option>20 Minutes</option>
          </select>
        </div>

        <div>
          <label>Rendering Engine</label>
          <select style={inputStyle}>
            <option>Balanced</option>
            <option>Fast</option>
            <option>Quality</option>
            <option>Cinematic AI</option>
          </select>
        </div>

        <div>
          <label>Video Codec</label>
          <select style={inputStyle}>
            <option>H.264</option>
            <option>H.265 (HEVC)</option>
            <option>AV1</option>
          </select>
        </div>

        <div>
          <label>Frame Interpolation</label>
          <select style={inputStyle}>
            <option>Disabled</option>
            <option>2x Smooth</option>
            <option>4x Smooth</option>
            <option>AI Motion Boost</option>
          </select>
        </div>

        <div>
          <label>HDR Mode</label>
          <select style={inputStyle}>
            <option>Off</option>
            <option>HDR10</option>
            <option>HDR10+</option>
            <option>Dolby Vision</option>
          </select>
        </div>

        <div>
          <label>AI Upscaling</label>
          <select style={inputStyle}>
            <option>Disabled</option>
            <option>2X</option>
            <option>4X</option>
            <option>8X</option>
          </select>
        </div>

        <div>
          <label>Color Enhancement</label>
          <select style={inputStyle}>
            <option>Normal</option>
            <option>Vivid</option>
            <option>Cinematic</option>
            <option>Anime</option>
          </select>
        </div>

        <div>
          <label>Watermark</label>
          <select style={inputStyle}>
            <option>None</option>
            <option>AI Kids Studio</option>
            <option>Custom Logo</option>
          </select>
        </div>

        <div>
          <label>Export Format</label>
          <select style={inputStyle}>
            <option>MP4</option>
            <option>MOV</option>
            <option>MKV</option>
            <option>WEBM</option>
          </select>
        </div>

        <div>
          <label>Compression</label>
          <select style={inputStyle}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Lossless</option>
          </select>
        </div>

        <div>
          <label>AI Video Enhancement</label>
          <select style={inputStyle}>
            <option>Disabled</option>
            <option>Basic</option>
            <option>Advanced</option>
            <option>Professional</option>
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

export default VideoSettings;