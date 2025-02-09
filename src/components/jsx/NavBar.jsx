import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "../../assets/images/icon.png";
import dropdownData from "../js/dropdowns.js";
import dropdownDataProjects from "../js/dropdowns_projects.js";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("");
  const [isGoDropdownOpen, setIsGoDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [cssEnabled, setCssEnabled] = useState(() => {
    const stored = localStorage.getItem("cssEnabled");
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    const location = window.location.href;
    switch (true) {
      case location.endsWith("/"):
        setCurrentPage("Home");
        break;
      case location.endsWith("/about") || location.endsWith("/#about"):
        setCurrentPage("About");
        break;
      case location.endsWith("/contact") || location.endsWith("/#contact"):
        setCurrentPage("Contact");
        break;
      case location.endsWith("/articles") || location.endsWith("/#articles"):
        setCurrentPage("Articles");
        break;
      default:
        setCurrentPage("");
        break;
    }
  }, []);

  const toggleCSS = (e) => {
    e.preventDefault();
    const newState = !cssEnabled;

    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      styleSheets[i].disabled = !newState;
    }

    setCssEnabled(newState);
    localStorage.setItem("cssEnabled", newState);
  };

  const Clock = () => {
    const [time, setTime] = useState(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    );

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            weekday: "short",
            day: "numeric",
            month: "short",
          })
        );
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    return <div className="navbar-clock">{time}</div>;
  };

  useEffect(() => {
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      styleSheets[i].disabled = !cssEnabled;
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-icon">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <a className="navbar-current">{currentPage}</a>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setIsGoDropdownOpen(true)}
          onMouseLeave={() => setIsGoDropdownOpen(false)}
        >
          <a className="navbar-link">Go</a>
          <ul className={`dropdown-menu ${isGoDropdownOpen ? "open" : ""}`}>
            {dropdownData.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setIsProjectsDropdownOpen(true)}
          onMouseLeave={() => setIsProjectsDropdownOpen(false)}
        >
          <a className="navbar-link">Projects</a>
          <ul
            className={`dropdown-menu ${isProjectsDropdownOpen ? "open" : ""}`}
          >
            {dropdownDataProjects.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setIsSettingsDropdownOpen(true)}
          onMouseLeave={() => setIsSettingsDropdownOpen(false)}
        >
          <a className="navbar-link">Settings</a>
          <ul
            className={`dropdown-menu ${isSettingsDropdownOpen ? "open" : ""}`}
          >
            <li>
              <a href="#" onClick={(e) => toggleCSS(e)} className="navbar-link">
                {cssEnabled ? "Disable CSS" : "Enable CSS"}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Clock />
    </nav>
  );
}

export default Navbar;
