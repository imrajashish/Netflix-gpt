import React from "react";
import MoviesList from "./MoviesList";

import { useSelector } from "react-redux";

function SeconderyContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative z-20">
          <MoviesList
            title={"Now playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Trending Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Popular Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"UpComing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MoviesList
            title={"Horror Movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
}

export default SeconderyContainer;
