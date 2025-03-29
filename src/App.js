import "./App.css";
import Sidebar from "./components/Sidebar";
import ColorPalettes from "./ColorPalettes";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="right-area">
        <div className="app-header">
          <h1>App Header</h1>
        </div>
        <div className="app-content">
          <p>App Content</p>
          <ColorPalettes />
        </div>
        <div className="app-footer">
          <p>App Footer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
