import React from "react";
import { Link } from "react-router-dom";

function Icons({ name, link, src, badgeCount }) {
  const Badge = badgeCount > 0 ? (
    <span className="notification-badge">{badgeCount}</span>
  ) : null;

  return link.startsWith("/") ? (
    <Link className="dock-button" to={link} aria-label={name}>
      <img src={src} alt={name} />
      {Badge}
      <div className="tooltip">{name}</div>
    </Link>
  ) : (
    <a
      className="dock-button"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <img src={src} alt={name} />
      {Badge}
      <div className="tooltip">{name}</div>
    </a>
  );
}

export default Icons;
