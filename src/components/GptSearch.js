import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../Utils/constant";

function GptSearch() {
  return (
    <div>
      <div>
        <img src={BG_URL} className=" absolute -z-10" alt="logo"></img>
      </div>
      <GptMovieSuggestion />
      <GptSearchBar />
    </div>
  );
}

export default GptSearch;
