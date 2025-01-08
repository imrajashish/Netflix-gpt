import React from "react";
import { IMG_CDN_URL } from "../Utils/constans";

function MoviesCard({ posterPath }) {
  return (
    <div className="w-48 pr-4">
      <img alt="Image text " src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
}

export default MoviesCard;
