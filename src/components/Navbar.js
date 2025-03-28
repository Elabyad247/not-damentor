import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FiGrid, FiBook, FiLayout, FiCalendar } from "react-icons/fi";

const navItems = [
  { label: "Link 1", icon: <FiGrid /> },
  { label: "Link ", icon: <FiBook /> },
  { label: "Link 3", icon: <FiLayout /> },
  { label: "Link 4", icon: <FiCalendar /> },
];

export default function Navbar() {
  const [active, setActive] = useState("Link 1");
  const [bubbleStyle, setBubbleStyle] = useState({});
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const activeBtn = container.querySelector(".nav-btn.active");
    if (activeBtn) {
      setBubbleStyle({
        width: activeBtn.offsetWidth + "px",
        left: activeBtn.offsetLeft + "px",
      });
    }
  }, [active]);

  return (
    <div className="navbar">
      <div className="logo">Not DaMentor</div>
      <div className="nav-items" ref={containerRef}>
        <div className="bubble" style={bubbleStyle}></div>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-btn ${active === item.label ? "active" : ""}`}
            onClick={() => setActive(item.label)}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="cta">
        <button className="cta-btn">Action</button>
      </div>
    </div>
  );
}
