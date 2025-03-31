import "./AuthContainer.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthContainer from "./AuthContainer";

export default function LoginPage() {
  return (
    <AuthContainer
      title="Welcome back"
      subtitle="Login to your Not DaMentor account"
      imageSrc="./assets/LoginBanner.png"
      showImage={true}>
      <form className="auth-form">
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
            <a href="#!" className="forgot-password">
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
        Don't have an account? <a href="#!">Sign up</a>
      </div>
    </AuthContainer>
  );
}
