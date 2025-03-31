import React from "react";
import "./AuthContainer.css";

function AuthContainer({ title, subtitle, children, imageSrc, showImage }) {
  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          {title && <h1>{title}</h1>}
          {subtitle && <p className="subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>
      {showImage && (
        <div className="auth-image-wrapper">
          <img src={imageSrc} alt="Authentication" className="auth-image" />
        </div>
      )}
    </div>
  );
}

export default AuthContainer;
