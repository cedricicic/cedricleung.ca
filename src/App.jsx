import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/jsx/Header';
import Dock from './components/jsx/Dock';

function Home() {
  return (
    <>
      <Header />
      <Dock />
    </>
  );
}

function Contact() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;