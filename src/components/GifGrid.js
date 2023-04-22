import React from "react";
import { useFethGifs } from "../hooks/useFethGifs";

import { CircularProgress } from "@mui/material";

import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFethGifs(category);

  return (
    <div>
      <h1 className="text-slate-100 text-center py-4">{category}</h1>

      {loading && (
        <div className="flex justify-center">
          <CircularProgress color="primary" />
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-8">
        {images.map((img) => (
          <div key={img.id} className="animate__animated animate__fadeIn">
            <GifGridItem {...img} />
          </div>
        ))}
      </div>
    </div>
  );
};
