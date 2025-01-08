import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesList({ title, movies }) {
  return (
    <div>
      <div className="p-6 ">
        <h1 className="text-4xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => (
              <MoviesCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
