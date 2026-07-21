function SceneSettings() {
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
        🎬 Scene Settings
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label>Scene Count</label>
          <select style={inputStyle}>
            <option>5 Scenes</option>
            <option>10 Scenes</option>
            <option>15 Scenes</option>
            <option>20 Scenes</option>
            <option>30 Scenes</option>
          </select>
        </div>

        <div>
          <label>Scene Transition</label>
          <select style={inputStyle}>
            <option>Fade</option>
            <option>Slide</option>
            <option>Zoom</option>
            <option>Cut</option>
            <option>Cinematic</option>
          </select>
        </div>

        <div>
          <label>Camera Angle</label>
          <select style={inputStyle}>
            <option>Auto</option>
            <option>Close-up</option>
            <option>Wide Shot</option>
            <option>Top View</option>
            <option>Drone</option>
          </select>
        </div>

        <div>
          <label>Camera Movement</label>
          <select style={inputStyle}>
            <option>Static</option>
            <option>Pan</option>
            <option>Zoom</option>
            <option>Tracking</option>
            <option>Cinematic</option>
          </select>
        </div>

        <div>
          <label>Lighting Style</label>
          <select style={inputStyle}>
            <option>Daylight</option>
            <option>Night</option>
            <option>Sunset</option>
            <option>Studio</option>
            <option>Fantasy Glow</option>
          </select>
        </div>

        <div>
          <label>Background Style</label>
          <select style={inputStyle}>
            <option>Forest</option>
            <option>City</option>
            <option>School</option>
            <option>Space</option>
            <option>Ocean</option>
            <option>Castle</option>
            <option>Village</option>
          </select>
        </div>

        <div>
          <label>Animation Smoothness</label>
          <select style={inputStyle}>
            <option>Standard</option>
            <option>Smooth</option>
            <option>Ultra Smooth</option>
          </select>
        </div>

        <div>
          <label>Visual Effects</label>
          <select style={inputStyle}>
            <option>None</option>
            <option>Sparkles</option>
            <option>Magic</option>
            <option>Fireworks</option>
            <option>Particles</option>
          </select>
        </div>

        <div>
          <label>Environment Detail</label>
          <select style={inputStyle}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Ultra</option>
          </select>
        </div>

        <div>
          <label>Scene Rendering Quality</label>
          <select style={inputStyle}>
            <option>Fast</option>
            <option>Balanced</option>
            <option>High Quality</option>
            <option>Ultra Quality</option>
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

export default SceneSettings;