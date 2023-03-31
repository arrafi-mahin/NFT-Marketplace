import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import NavDrawer from "./Components/NavDrawer/NavDrawer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
