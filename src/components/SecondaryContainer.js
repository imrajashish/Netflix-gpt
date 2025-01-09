import React from "react";
import MoviesList from "./MoviesList";

import { useSelector } from "react-redux";

function SecondaryContainer() {
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
            title={"Top Rating Movies"}
            movies={movies.topRatingMovies}
          />
          <MoviesList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MoviesList
            title={"UpComing Movies"}
            movies={movies.upcomingMovies}
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

export default SecondaryContainer;
