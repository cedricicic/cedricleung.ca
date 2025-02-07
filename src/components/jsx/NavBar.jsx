import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "../../assets/images/icon.png";
import dropdownData from "../js/dropdowns.js";
import dropdownDataProjects from "../js/dropdowns_projects.js";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("");
  const [isGoDropdownOpen, setIsGoDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

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

  const DropdownMenu = ({ items, isOpen }) => (
    <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

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
          <DropdownMenu items={dropdownData} isOpen={isGoDropdownOpen} />
        </div>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setIsProjectsDropdownOpen(true)}
          onMouseLeave={() => setIsProjectsDropdownOpen(false)}
        >
          <a className="navbar-link">Projects</a>
          <DropdownMenu items={dropdownDataProjects} isOpen={isProjectsDropdownOpen} />
        </div>
      </div>
      <Clock />
    </nav>
  );
}

export default Navbar;