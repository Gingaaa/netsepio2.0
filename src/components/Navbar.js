import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav ">
        <div className="container-fluid">
          <img
            className="img"
            src="https://user-images.githubusercontent.com/69159515/163665970-6207901c-4c18-4b17-b048-8691d2132832.png"
            alt="error"
          />
          <h3 className="navbar-brand text">NetSepio</h3>
          <button
            className="navbar-toggler"
            style={{ border:"2px solid rgb(31, 186, 248)"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="menu.png" alt="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ho">
                <Link className=" text" style={{ padding:"12px"}} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" text" style={{ padding:"12px"}} to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" text" style={{ padding:"12px"}} to="/Features">
                  Features
                </Link>
              </li>
            </ul>
          </div>
            <div className="dnw">
              <a href="https://github.com/NetSepio/ChromiumExtension/archive/refs/heads/release.zip">
                <h4 className="dn">Download Now</h4>
              </a>
            </div>
        </div>
      </nav>
    </div>
  );
}