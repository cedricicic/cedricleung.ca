import React, { useRef, useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.png";
import { useTypingEffect } from "../js/typing";

function Header() {
  const avatarRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = (e) => {
    if (!avatarRef.current || isMobile) return;

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
    if (!isMobile) {
      setTilt({ x: 0, y: 0 });
    }
  };

  const handleDeviceOrientation = (event) => {
    if (!isMobile) return;

    const maxTiltAngle = 40;
    const tiltX = Math.max(Math.min(event.beta, maxTiltAngle), -maxTiltAngle);
    const tiltY = Math.max(Math.min(-event.gamma, maxTiltAngle), -maxTiltAngle);

    setTilt({ x: tiltX, y: tiltY });
  };

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      setIsMobile(mobile);
    };

    checkIfMobile();

    if (isMobile) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]);

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