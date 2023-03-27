import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate, NavLink,Link } from "react-router-dom";

const Register = () => {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let navigate = useNavigate();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert(error);
      }
    } catch (error) {
      console.log("error");
    } finally {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      navigate('/');
    }
  }

  return (
    <>
      <div className="App">
        <div className="appAside">
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                true="true"
                to="/Login"
                activeclassname="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Login
              </NavLink>
              <NavLink
                to="/Register"
                activeclassname="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>
            <div className="formCenter">
              <form onSubmit={handleSubmit} className="formFields">
                <h1>Sign Up</h1>
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
                  <label className="formFieldCheckboxLabel">
                    <input
                      className="formFieldCheckbox"
                      type="checkbox"
                      name="hasAgreed"
                    />{" "}
                    I agree all statements in{" "}
                    <a href="null" className="formFieldTermsLink">
                      terms of service
                    </a>
                  </label>
                </div>

                <div className="formField">
                  <button className="formFieldButton">Sign Up</button>{" "}
                  <Link to="/Login" className="formFieldLink">
                    I'm already member
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
