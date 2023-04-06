import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import NavDrawer from "./Components/NavDrawer/NavDrawer";
import Resource from "./Pages/Resource/Resource";
import About from "./Pages/About/About";
function App() {
  return (
    <div className="App">
      <NavBar />
      <NavDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
