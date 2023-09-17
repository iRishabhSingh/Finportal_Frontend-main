import React, { useState } from "react";
import { useFirebase } from "../components/context/firebaseContext";
import { useNavigate } from "react-router-dom";
import '../styles/signin.css'

export default function Signin() {
  // use firebase context
  const firebase = useFirebase();
  const navigate = useNavigate();

  // hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // onclick function
  const handleUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.signInUser(email, password);
      console.log("welocme", userCredential);
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-main">
    <div class="logincont container">
      <div class="left-panel">
        <h2>Welcome Back!</h2>
        <p>Log in to access your account.</p>
      </div>
      <div class="right-panel">
        <h1>Login</h1>
        <form id="login-form">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            placeholder="Password"
            required
          />
          <button onClick={handleUser} type="submit">
            Log In
          </button>
        </form>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
    </div>
  );
}
