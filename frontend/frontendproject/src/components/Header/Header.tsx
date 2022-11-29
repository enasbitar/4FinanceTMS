import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <img
        onClick={() => navigate("/")}
        className="header-logo"
        src={logo}
        alt="4Finance Logo"
      />

      <nav>
        <ul className="menu-ul">
          <li
            onClick={() => navigate("teachers-management")}
            className="menu-item"
          >
            TEACHERS MANAGEMENT
          </li>
          <li
            onClick={() => navigate("students-management")}
            className="menu-item"
          >
            STUDENTS MANAGEMENT
          </li>
          <li
            onClick={() => navigate("courses-management")}
            className="menu-item"
          >
            COURSES MANAGEMENT
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
