import React from "react";
import Navbar from "./Components/navigation/Navbar";
import Home from "./Components/static/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
};

export default App;
