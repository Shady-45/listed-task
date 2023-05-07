import React, { useRef } from "react";
import "../CSS/Home.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../authentication/Firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const googleAuth = new GoogleAuthProvider();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = () => {
    navigate("/dashboard");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Fill in data to view!!");
    }
  };
  return (
    <>
      <section className="home-section">
        <div className="left-section">
          <h1 className="main-heading">Board.</h1>
        </div>
        <div className="right-section">
          <div className="container">
            <div className="header">
              <h2>Sign In</h2>
              <p className="lato-text">Sign in to your account</p>
            </div>

            <div className="sign-in-links">
              <div onClick={googleLogin} className="auth-sign-in">
                <img className="logo" src="/google.png" alt="google" />
                <p>Sign in with Google</p>
              </div>
              <div className="auth-sign-in">
                <img className="logo" src="/apple.png" alt="google" />
                <p>Sign in with Apple</p>
              </div>
            </div>
            <div className="auth-container">
              <form className="form-container">
                <label htmlFor="email">
                  <p className="form-element">Email address</p>
                </label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                />
                <label htmlFor="pwd">
                  <p className="form-element">Password</p>
                </label>
                <input
                  className="form-input"
                  type="password"
                  ref={passwordRef}
                  name="pwd"
                  id="pwd"
                />
                <p className="form-element">Forgot password?</p>
                <button
                  onClick={handleSubmit}
                  className="form-btn"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
              <div className="auth-negative">
                <p className="auth-fnt">Don’t have an account?</p>
                <span className="auth-blue auth-fnt"> Register here</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
