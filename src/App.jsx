import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Header from "./components/jsx/Header";
import Dock from "./components/jsx/Dock";
import Contact from "./components/jsx/Contact";
import Navbar from "./components/jsx/NavBar";
import About from "./components/jsx/About";
import Articles from "./components/jsx/Articles";
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

function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

function ArticlesPage() {
  return (
    <>
      <Navbar />
      <Articles />
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
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
