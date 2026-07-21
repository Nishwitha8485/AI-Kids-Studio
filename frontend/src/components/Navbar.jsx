import "./../styles/navbar.css";
import {
  LayoutDashboard,
  FolderOpen,
  BookOpen,
  BarChart3,
  Bot,
  Settings,
  Bell,
  UserCircle,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎬 <span>AI Kids Studio</span>
      </div>

      <ul className="nav-links">
        <li><LayoutDashboard size={18} /> Dashboard</li>
        <li><FolderOpen size={18} /> Projects</li>
        <li><BookOpen size={18} /> Templates</li>
        <li><BarChart3 size={18} /> Analytics</li>
        <li><Bot size={18} /> AI Agents</li>
      </ul>

      <div className="nav-right">
        <Bell className="icon" size={22} />
        <Settings className="icon" size={22} />
        <UserCircle className="icon" size={28} />
      </div>
    </nav>
  );
}

export default Navbar;