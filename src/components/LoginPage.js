import "./LoginPage.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h1>Welcome back</h1>
          <p className="subtitle">Login to your Not DaMentor account</p>

          <form className="login-form">
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

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="signup-link">
            Don't have an account? <a href="#!">Sign up</a>
          </div>
        </div>
      </div>

      <div className="login-image-wrapper">
        <img
          src="./assets/LoginBanner.png"
          alt="DaMentor Login"
          className="login-image"
        />
      </div>
    </div>
  );
}
