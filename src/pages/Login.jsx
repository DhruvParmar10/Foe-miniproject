import React from "react";
import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate, Link, NavLink } from "react-router-dom";
import {
  GithubLoginButton,
  DiscordLoginButton,
} from "react-social-login-buttons";
import "./css/login.css";

const Login = () => {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let navigate = useNavigate();

  async function handleLogin(event) {
    try {
      event.preventDefault();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert(error);
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error);
    } finally {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
    }
  }

  async function handleGithub(){
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider:'github',
    });
  }
  async function handleDiscord(){
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider:'discord',
    });
  }

  return (
    <div className="App">
      <div className="appAside">
        <div className="appForm">
        <div className="formCenter">
          <h1>Login</h1>
          <form className="formFields" onSubmit={handleLogin}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="formField">
              <button className="formFieldButton">Sign In</button>{" "}
              <Link to="/Register" className="formFieldLink">
                Create an account
              </Link>
            </div>

            <div className="socialMediaButtons">
              <div className="facebookButton">
                <GithubLoginButton onClick={handleGithub} />
              </div>

              <div className="instagramButton">
                <DiscordLoginButton onClick={handleDiscord} />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
