import Navbar from "../components/Navbar";
import PromptSection from "../components/PromptSection";
import BasicSettings from "../components/BasicSettings";
import CharacterSettings from "../components/CharacterSettings";
import SceneSettings from "../components/SceneSettings";
import AudioSettings from "../components/AudioSettings";
import VideoSettings from "../components/VideoSettings";
import SubtitleSettings from "../components/SubtitleSettings";
import YoutubeSettings from "../components/YoutubeSettings";
import AIAgentPanel from "../components/AIAgentPanel";
import GenerateButton from "../components/GenerateButton";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        
  style={{
  width: "100%",
  padding: "30px 50px",
  color: "white",
  boxSizing: "border-box",
}}
>
    
        {/* ================= Header ================= */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              fontSize: "44px",
              marginBottom: "12px",
            }}
          >
            🚀 AI Kids Studio
          </h1>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "18px",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "30px",
            }}
          >
            An Autonomous Multi-Agent AI Platform that transforms a simple story
            idea into a complete educational video with AI-generated script,
            storyboard, characters, animation, voice-over, subtitles,
            background music, YouTube SEO optimization, and final MP4 export.
          </p>
        </div>

        {/* ================= Prompt ================= */}

        <PromptSection />

        {/* ================= Basic Settings ================= */}

        <BasicSettings />

        {/* ================= Character ================= */}

        <CharacterSettings />

        {/* ================= Scene ================= */}

        <SceneSettings />

        {/* ================= Audio ================= */}

        <AudioSettings />

        {/* ================= Video ================= */}

        <VideoSettings />

        {/* ================= Subtitle ================= */}

        <SubtitleSettings />

        {/* ================= YouTube ================= */}

        <YoutubeSettings />

        {/* ================= AI Agents ================= */}

        <AIAgentPanel />

        {/* ================= Generate ================= */}

        <GenerateButton />

        {/* ================= Footer ================= */}

        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            color: "#6b7280",
            paddingBottom: "30px",
            lineHeight: "28px",
          }}
        >
          <hr
            style={{
              borderColor: "#374151",
              marginBottom: "20px",
            }}
          />

          <h3>AI Kids Studio v1.0</h3>

          <p>
            Built with React • FastAPI • AI Agents • bemyapp • Python • FFmpeg • Future
            Ready for GPT, Gemini, Claude & Open Source Models
          </p>

          <p>
            © 2026 AI Kids Studio • Autonomous Story-to-Video Generation
            Platform
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;