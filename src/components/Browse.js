import React from "react";
import Headers from "./Headers";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRating from "../hooks/useTopRating";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRating();
  useUpcomingMovies();

  return (
    <div>
      <Headers />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
