import React, { useRef, useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.png";
import { useTypingEffect } from "../js/typing";

function Header() {
  const avatarRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!avatarRef.current) return;

    const avatarRect = avatarRef.current.getBoundingClientRect();
    const avatarCenterX = avatarRect.left + avatarRect.width / 2;
    const avatarCenterY = avatarRect.top + avatarRect.height / 2;

    const deltaX = e.clientX - avatarCenterX;
    const deltaY = e.clientY - avatarCenterY;

    const maxTiltAngle = 40; 
    const tiltX = Math.max(Math.min(deltaY / 20, maxTiltAngle), -maxTiltAngle);
    const tiltY = Math.max(Math.min(-deltaX / 20, maxTiltAngle), -maxTiltAngle);

    setTilt({ x: -tiltX, y: -tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const Intro = useTypingEffect("Hi! My name is Cedric.", 50);
  const Description = useTypingEffect(
    "A mathematics student from the University of Waterloo.",
    20
  );

  return (
    <header>
      <img 
        ref={avatarRef}
        src={avatar} 
        alt="Avatar" 
        className="avatar" 
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div className="text-container">
        <h1 ref={Intro}></h1>
        <p ref={Description}></p>
      </div>
    </header>
  );
}

export default Header;