import React from "react";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/jsx/Header";
import Dock from "./components/jsx/Dock";
import Contact from "./components/jsx/Contact";
import Navbar from "./components/jsx/NavBar";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Dock />
    </>
  );
}

function ContactPage(){
  return(<>
    <Navbar />
    <Contact />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;