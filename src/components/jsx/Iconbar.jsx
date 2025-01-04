import React from "react";

function IconBar() {
  return (
    <div className="icon-bar">
      <div className="icon-container">
        <img src="/path-to-spotify-icon.png" alt="Spotify" className="icon" />
        <span className="icon-label">Spotify</span>
      </div>
      <div className="icon-container">
        <img src="/path-to-photos-icon.png" alt="Photos" className="icon" />
        <span className="icon-label">Photos</span>
      </div>
      <div className="icon-container">
        <img src="/path-to-mail-icon.png" alt="Mail" className="icon" />
        <span className="icon-label">Mail</span>
      </div>
    </div>
  );
}

export default IconBar;
