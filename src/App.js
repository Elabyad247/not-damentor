import "./App.css";
import Sidebar from "./components/Sidebar";
import ColorPalettes from "./ColorPalettes";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  const currentPage = "Dashboard";
  switch (currentPage) {
    case "Login":
      return <LoginPage />;
    case "Register":
      return <RegisterPage />;
    default:
      return (
        <div className="app">
          <Sidebar />
          <div className="right-area">
            <div className="app-header">
              <h1>App Header</h1>
            </div>
            <div className="app-content">
              <ColorPalettes />
            </div>
            <div className="app-footer">
              <p>App Footer</p>
            </div>
          </div>
        </div>
      );
  }
}

export default App;
