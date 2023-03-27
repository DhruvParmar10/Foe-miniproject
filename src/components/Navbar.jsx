import React, {useState} from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Navbar = () => {
  const [search, setsearch] = useState(null);
  async function getSearch() {
    const { data, error } = await supabase
      .from("Products")
      .select()
      .textSearch("Name", search);

    if(data){
      setsearch(data);
    }
    if(error){
      setsearch(null);
      alert(error);
    }
  }
  

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/">Yenox</Link>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="search..."
              onChange={(e) => {setsearch(e.target.value)}  }
              onDoubleClick={getSearch}
            />
            <span className="icon">
              <svg
                width="19px"
                height="19px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="1"
                    d="M14 5H20"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    opacity="1"
                    d="M14 8H17"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                    stroke="#000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    opacity="1"
                    d="M22 22L20 20"
                    stroke="#000"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <a href="#">Find A Store 📌</a>
              </li>
              <li>
                <a href="#">Get In Touch</a>
              </li>
              <li>
                <Link to="/Login">👤</Link>
              </li>
              <li>
                <Link to="/Cart">🛒</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
