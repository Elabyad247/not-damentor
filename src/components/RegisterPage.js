import "./AuthContainer.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthContainer from "./AuthContainer";

export default function RegisterPage() {
  return (
    <AuthContainer
      title="Create an account"
      subtitle="Create new Not DaMentor account"
      showImage={false}>
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
          <label htmlFor="password">Password</label>
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

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-with-icon">
            <RiLockPasswordLine className="input-icon" />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>

        <div className="terms-text">
          By clicking Register, you agree to our{" "}
          <a href="#!">Terms of Service</a> and <a href="#!">Privacy Policy</a>
        </div>

        <button type="submit" className="auth-button">
          Register
        </button>
      </form>

      <div className="auth-footer">
        Already have an account? <a href="/login">Login</a>
      </div>
    </AuthContainer>
  );
}
