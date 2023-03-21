import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//import { HomePage } from "./pages/HomePage";
const HomePage = lazy(() => import("./pages/HomePage"));
//import { GifExpertApp } from "./pages/GifExpertApp";

const GifExpertApp = lazy(() => import("./pages/GifExpertApp"));
//import { Details } from "./pages/Details";
const Details = lazy(() => import("./pages/Details"));

export const RoutesTree = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<GifExpertApp />} />
        <Route path="/app/:q" element={<GifExpertApp />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Suspense>
  );
};
