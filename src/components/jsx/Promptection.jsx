import React, { useEffect } from "react";
import "../css/promptection.css";
import { FaShieldAlt, FaDownload, FaCheck } from "react-icons/fa";
import logo from "../../assets/images/promptection-icon-removebg.png";

function Promptection() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Promptection Logo" className="logo-img" />
            <h1>Promptection</h1>
          </div>
          <a
            href="https://github.com/cedricicic/Promptection/archive/refs/heads/main.zip"
            className="install-button"
            download="promptection.zip"
          >
            <FaDownload className="icon-small" />
            <div className="install-text">Install Now</div>
          </a>
        </div>
      </header>

      <main className="main">
        <div className="hero">
          <h2>Protect Your Sensitive Data from AI Chatbots</h2>
          <p>
            Promptection is a Chrome extension that automatically detects and
            redacts sensitive information before it’s sent.
          </p>
        </div>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Real-time Protection</h3>
            <p>
              Uses powerful regex patterns to catch emails, credit cards, SSNs,
              and more.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>High Compatibility</h3>
            <p>
              Works seamlessly with popular AI platforms and chatbots such as
              ChatGPT, Claude, and DeepSeek.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Privacy-Focused Design</h3>
            <p>
              Runs locally, ensuring sensitive data is never stored or exposed.
            </p>
          </div>
        </div>

        <div id="install" className="installation">
          <h2>Installation Guide</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Download the Extension</h3>
                <p>
                  Click the "Install Now" button to download the extension files.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Unzip the Files</h3>
                <p>
                  Extract the downloaded `.zip` file to a folder on your
                  computer.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Load the Extension in Chrome</h3>
                <p>
                  Go to `chrome://extensions/`, enable "Developer mode," and
                  click "Load unpacked" to select the extracted folder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Promptection. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Promptection;