import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

library.add(faEllipsis);

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="./assets/LogoIcon.png" alt="Logo" className="logo" />
        <h1 className="title">Not DaMentor</h1>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h2>Section 1</h2>
          <ul>
            <li className="active">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h2>Section 2</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h2>Section 3</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h2>Section 4</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h2>Section 5</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
        <img
          src="./assets/LogoIcon.png"
          alt="Profile"
          className="profile-icon"
        />
        <h3 className="profile-name">User Name</h3>
        <FontAwesomeIcon icon="ellipsis" className="ellipsis-icon" />
      </div>
    </div>
  );
}
