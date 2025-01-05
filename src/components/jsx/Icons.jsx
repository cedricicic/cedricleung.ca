import React from "react";
import { Link } from "react-router-dom";

function Icons(props) {
  return props.link.startsWith("/") ? (
    <Link
      className="dock-button"
      to={props.link}
      aria-label={props.name}
      target="_blank"
    >
      <img src={props.src} alt={props.name} />
      <div className="tooltip">{props.name}</div>
    </Link>
  ) : (
    <a
      className="dock-button"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.name}
    >
      <img src={props.src} alt={props.name} />
      <div className="tooltip">{props.name}</div>
    </a>
  );
}

export default Icons;
