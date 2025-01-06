import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Header from "./components/jsx/Header";
import Dock from "./components/jsx/Dock";
import Contact from "./components/jsx/Contact";
import Navbar from "./components/jsx/NavBar";
import "./components/css/loaders.css";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Dock />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {

    const initialLoadTimer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(initialLoadTimer);
  }, []);

  useEffect(() => {
    
    setLoading(true);
    const routeChangeTimer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(routeChangeTimer); 
  }, [location]);

  return (
    <>
      {loading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default function Main() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
