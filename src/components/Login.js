import React, { useState } from "react";
import Headers from "./Headers";

function Login() {
  const [isSignIn, setIssignin] = useState(true);
  const toggleSignInForm = () => {
    setIssignin(!isSignIn);
  };
  return (
    <div>
      <Headers />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg"></img>
      </div>
      <form className="w-3/12 relative p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl  py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="FullName"
            className="p-4 my-4 w-full bg-gray-500 "
          ></input>
        )}
        <input
          type="email"
          placeholder="Email or Phone No"
          className="p-4 my-4 w-full bg-gray-500 "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          New to Netflix? {isSignIn ? "Sign Up" : "Already register Sigin "}Now
        </p>
      </form>
    </div>
  );
}

export default Login;
