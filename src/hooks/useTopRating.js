import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatingMovies } from "../Utils/moviesSlice";

const useTopRating = () => {
  const dispatch = useDispatch();

  const getTopRatingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("addTopRatingMovies", addTopRatingMovies);
    dispatch(addTopRatingMovies(json.results));
  };

  useEffect(() => {
    getTopRatingMovies();
  }, []);
};

export default useTopRating;
