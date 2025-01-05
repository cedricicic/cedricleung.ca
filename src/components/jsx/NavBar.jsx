import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "../../assets/images/icon.png";
import dropdownData from "../js/dropdowns.js";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const location = window.location.href;
    switch (true) {
      case location.endsWith("/"):
        setCurrentPage("Home");
        break;
      case location.endsWith("/about") || location.endsWith("/#about"):
        setCurrentPage("About me");
        break;
      case location.endsWith("/contact") || location.endsWith("/#contact"):
        setCurrentPage("Contact");
        break;
      default:
        setCurrentPage("");
        break;
    }
  }, []);

  const Clock = () => {
    const [time, setTime] = useState(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
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
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a className="navbar-link">Go</a>
          <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
            {dropdownData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Clock />
    </nav>
  );
}

export default Navbar;
