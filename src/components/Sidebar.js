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

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const showTooltip = () => {
    setIsHovered(true);
  };
  const hideTooltip = () => {
    setIsHovered(false);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="./assets/LogoIcon.png" alt="Logo" className="logo" />
        <h1 className="title">Not DaMentor</h1>
      </div>
      <div className="sidebar-content">
        <ul>
          <li className="active">
            <LuLayoutDashboard className="icon" />
            <span>Dashboard</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <GiBookPile className="icon" />
            <span>Courses</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <RiCalendarScheduleLine className="icon" />
            <span>Calendar</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <GoCommentDiscussion className="icon" />
            <span>Discussions</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <FaRegFileAlt className="icon" />
            <span>Assignments</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <MdBookmarkBorder className="icon" />
            <span>Bookmarks</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <MdGroup className="icon" />
            <span>Groups</span>
            <span className="rightLine"></span>
          </li>
          <li>
            <TfiAnnouncement className="icon" />
            <span>Announcements</span>
            <span className="rightLine"></span>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <img
          src="./assets/LogoIcon.png"
          alt="Profile"
          className="profile-icon"
        />
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
