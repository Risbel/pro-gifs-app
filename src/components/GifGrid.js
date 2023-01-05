import React from "react";
import { useFethGifs } from "../hooks/useFethGifs";

import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFethGifs(category);

  return (
    <>
      <h1>{category}</h1>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
