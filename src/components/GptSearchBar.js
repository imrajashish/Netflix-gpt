import React from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const config = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12  ">
        <input
          type="text"
          placeholder={lang[config].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button className="col-span-3 m-4 px-2 py-4 bg-red-700 text-white rounded-lg ">
          {lang[config].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
