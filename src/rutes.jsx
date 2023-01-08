import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GifExpertApp } from "./pages/GifExpertApp";
import { Details } from "./pages/Details";

export const RutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<GifExpertApp />} />
      <Route path="/app/:q" element={<GifExpertApp />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};
