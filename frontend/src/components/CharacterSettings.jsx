function CharacterSettings() {
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
        👦 Character Settings
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <label>Number of Characters</label>
          <select style={inputStyle}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>

        <div>
          <label>Main Character Type</label>
          <select style={inputStyle}>
            <option>Boy</option>
            <option>Girl</option>
            <option>Animal</option>
            <option>Robot</option>
            <option>Fantasy Creature</option>
            <option>Mixed</option>
          </select>
        </div>

        <div>
          <label>Character Age</label>
          <select style={inputStyle}>
            <option>Toddler</option>
            <option>Child</option>
            <option>Teen</option>
            <option>Adult</option>
          </select>
        </div>

        <div>
          <label>Character Style</label>
          <select style={inputStyle}>
            <option>Disney</option>
            <option>Pixar</option>
            <option>Anime</option>
            <option>3D Cartoon</option>
            <option>Chibi</option>
            <option>Realistic</option>
          </select>
        </div>

        <div>
          <label>Hair Color</label>
          <select style={inputStyle}>
            <option>Black</option>
            <option>Brown</option>
            <option>Blonde</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Pink</option>
          </select>
        </div>

        <div>
          <label>Eye Color</label>
          <select style={inputStyle}>
            <option>Brown</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Black</option>
            <option>Hazel</option>
          </select>
        </div>

        <div>
          <label>Outfit Style</label>
          <select style={inputStyle}>
            <option>Casual</option>
            <option>School</option>
            <option>Fantasy</option>
            <option>Superhero</option>
            <option>Traditional</option>
          </select>
        </div>

        <div>
          <label>Character Consistency</label>
          <select style={inputStyle}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Ultra</option>
          </select>
        </div>

        <div>
          <label>Facial Expressions</label>
          <select style={inputStyle}>
            <option>Simple</option>
            <option>Normal</option>
            <option>Expressive</option>
            <option>Cinematic</option>
          </select>
        </div>

        <div>
          <label>Animation Detail</label>
          <select style={inputStyle}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Ultra HD</option>
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

export default CharacterSettings;