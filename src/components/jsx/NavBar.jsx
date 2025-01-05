import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "../../assets/images/icon.png";

function Navbar() {
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

  useEffect(() => {
    console.log("Current URL:", window.location.href);
  }, []); 

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-icon">
            <img src={logo} alt="logo" />
        </div>
        <a href="#home" className="navbar-home-link">
          Home
        </a>
        <a href="#go" className="navbar-link">
          Go
        </a>
      </div>
      <Clock /> 
    </nav>
  );
}

export default Navbar;
