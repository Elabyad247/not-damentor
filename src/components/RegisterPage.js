import "./RegisterPage.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export default function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-form-wrapper">
          <p className="subtitle">Create new Not DaMentor account</p>
          <form className="register-form">
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

            <button type="submit" className="register-button">
              Register
            </button>
          </form>

          <div className="terms-text">
            By clicking continue, you agree to our{" "}
            <a href="#!">Terms of Service</a> and{" "}
            <a href="#!">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
