import "./AuthContainer.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthContainer from "./AuthContainer";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <AuthContainer
      title="Welcome back"
      subtitle="Login to your Not DaMentor account"
      imageSrc="./assets/LoginBanner.png"
      showImage={true}>
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-with-icon">
            <AiOutlineMail className="input-icon" />
            <input
              type="email"
              id="email"
              placeholder="elabyad@example.com"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="password-label-row">
            <label htmlFor="password">Password</label>
            <a href="/forgot-password" className="forgot-password">
              Forgot your password?
            </a>
          </div>
          <div className="input-with-icon">
            <RiLockPasswordLine className="input-icon" />
            <input
              type="password"
              id="password"
              placeholder="Your password"
              required
            />
          </div>
        </div>

        <button type="submit" className="auth-button">
          Login
        </button>
      </form>

      <div className="auth-footer">
        Don't have an account? <a href="/register">Sign up</a>
      </div>
    </AuthContainer>
  );
}
