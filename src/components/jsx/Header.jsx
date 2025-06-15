import React, { useRef, useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.png";
import { useTypingEffect } from "../js/typing";

function Header() {
  const avatarRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

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
    if (!isMobile || !hasPermission) return;

    const maxTiltAngle = 40;
    const sensitivity = 1.5;
    
    let tiltX = (event.beta - 45) * sensitivity; 
    let tiltY = event.gamma * sensitivity;

    tiltX = Math.max(Math.min(tiltX, maxTiltAngle), -maxTiltAngle);
    tiltY = Math.max(Math.min(tiltY, maxTiltAngle), -maxTiltAngle);

    setTilt({ x: -tiltX, y: tiltY });
  };

  const requestOrientationPermission = async () => {
    if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        setHasPermission(permission === 'granted');
      } catch (error) {
        console.error('Error requesting device orientation permission:', error);
        setHasPermission(false);
      }
    } else {
      setHasPermission(true);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      setIsMobile(mobile);
    };

    checkIfMobile();

    if (isMobile) {
      requestOrientationPermission();
    }

    const setupEventListeners = () => {
      if (isMobile && hasPermission) {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      } else {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
      }
    };

    setupEventListeners();

    return () => {
      if (isMobile && hasPermission) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile, hasPermission]);

  const Intro = useTypingEffect("Hi! My name is Cedric.", 50);
  const Description = useTypingEffect(
    "A mathematics student from the University of Waterloo.",
    20
  );

  return (
    <>
      {showNotification && (
        <div className="portfolio-notification">
          <div className="notification-content">
            <span className="notification-text">
              New portfolio available at <a href="https://cedri.cc" target="_blank" rel="noopener noreferrer">cedri.cc</a>
            </span>
            <button onClick={closeNotification} className="notification-close">
              ×
            </button>
          </div>
        </div>
      )}
      <header>
        {isMobile && !hasPermission && (
          <button 
            onClick={requestOrientationPermission}
            className="permission-button"
          >
            Enable Tilt Effect?
          </button>
        )}
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
    </>
  );
}

export default Header;