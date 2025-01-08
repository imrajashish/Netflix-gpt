import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constans";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMoviesTrailer = () => {
  const dispatch = useDispatch();
  const getMoviesTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/558449/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("json", json);
    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesTrailer();
  }, []);
};

export default useMoviesTrailer;
