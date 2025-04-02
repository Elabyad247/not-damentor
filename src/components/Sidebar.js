import "./Sidebar.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiBookPile } from "react-icons/gi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GoCommentDiscussion } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const sidebarItems = [
  { icon: <LuLayoutDashboard />, label: "Dashboard" },
  { icon: <GiBookPile />, label: "Courses" },
  { icon: <RiCalendarScheduleLine />, label: "Calendar" },
  { icon: <GoCommentDiscussion />, label: "Discussions" },
  { icon: <FaRegFileAlt />, label: "Assignments" },
  { icon: <MdBookmarkBorder />, label: "Bookmarks" },
  { icon: <MdGroup />, label: "Groups" },
  { icon: <TfiAnnouncement />, label: "Announcements" },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showTooltip = () => {
    setIsHovered(true);
  };
  const hideTooltip = () => {
    setIsHovered(false);
  };
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="sidebar-header">
          <img src="./assets/LogoIcon.png" alt="Logo" className="logo" />
          <h1 className="title">Not DaMentor</h1>
        </div>
      </Link>
      <div className="sidebar-content">
        <ul>
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}>
              {item.icon}
              <span className="sidebarLabel">{item.label}</span>
              <span className="rightLine"></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-footer">
        <Link to="/profile">
          <img
            src="./assets/LogoIcon.png"
            alt="Profile"
            className="profile-icon"
          />
        </Link>
        <h3 className="profile-name">User Name</h3>
        <div
          className="tooltip-container"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}>
          <HiDotsHorizontal className="ellipsis-icon" />
          {isHovered && (
            <div className="tooltip">
              <ul>
                <li>
                  <MdOutlineSettings className="tooltip-icon" />
                  Settings
                </li>
                <li>
                  <MdHelpOutline className="tooltip-icon" />
                  Help
                </li>
                <li>
                  <MdLogout className="tooltip-icon" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
