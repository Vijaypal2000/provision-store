import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

// Define the Navbar Component
function Navbar() {
  // Render the Navbar component
  return (
    <>
      {/* Navigation bar */}
      <nav className={`navbar navbar-expand-lg bg-body-tertiary `}>
        <div className="container-fluid">
          {/* Logo link */}
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="logo" width="56px" />
          </Link>

          {/* Navbar toggle button for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* NavLink for ProductList */}
                <NavLink className="nav-link " aria-current="page" to={"/"}>
                  ProductList
                </NavLink>
              </li>
              <li className="nav-item">
                {/* NavLink for About */}
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// Export the Navbar component as the default export
export default Navbar;

