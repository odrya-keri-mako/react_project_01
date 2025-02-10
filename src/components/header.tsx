import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-sm bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid p-0">
          <button className="navbar-toggler ms-auto" 
                  type="button" 
                  data-bs-toggle="collapse"
                  data-bs-auto-close="true"
                  data-bs-target="#navbar_content" 
                  aria-controls="navbar_content" 
                  aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbar_content" className="collapse navbar-collapse mt-3 mt-sm-0">
            <ul className="navbar-nav me-auto ms-3">
              <li className="nav-item mx-1">
                <NavLink 
                  to="/" 
                  end 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink 
                  to="/page1" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Page 1
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink 
                  to="/page2" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Page 2
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;