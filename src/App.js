import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-details" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
