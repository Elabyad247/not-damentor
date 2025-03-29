import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p>Header</p>
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
        <p>Footer</p>
      </div>
    </div>
  );
}
