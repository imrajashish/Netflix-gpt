import React from "react";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import { useSelector } from "react-redux";

function VideoBaground({ moviesId }) {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  console.log("trailerVideo", trailerVideo);
  useMoviesTrailer(moviesId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default VideoBaground;
