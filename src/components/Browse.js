import React from "react";
import Headers from "./Headers";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopulatMovies";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Headers />
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
}

export default Browse;
