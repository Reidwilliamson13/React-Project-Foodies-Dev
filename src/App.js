import React from "react";
import Navbar from "./Components/navigation/Navbar";
import Home from "./Components/static/Home";
import ListRecipes from "./components/recipes/ListRecipes";
import NewRecipe from "./Components/recipes/NewRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<ListRecipes />} />
        <Route path="/recipes/new" element={<NewRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;
