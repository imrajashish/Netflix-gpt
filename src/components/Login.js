import React, { useRef, useState } from "react";
import Headers from "./Headers";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL, USERAVTAR } from "../Utils/constant";

function Login() {
  const [isSignIn, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignin(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      //name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //sign Up the
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USERAVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              const userPayload = {
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              };
              dispatch(addUser(userPayload));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In the
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed In
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage); // Add this line for debugging
        });
    }
  };
  return (
    <div>
      <Headers />
      <div className="absolute">
        <img src={BG_URL} className="object-cover" alt="logo"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl  py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            //ref={name}
            type="text"
            placeholder="FullName"
            autoComplete="name"
            className="p-4 my-4 w-full bg-gray-500 "
          ></input>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or Phone No"
          autoComplete="email"
          className="p-4 my-4 w-full bg-gray-500 "
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="p-4 my-4 w-full bg-gray-500"
        ></input>
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          New to Netflix? {isSignIn ? "Sign Up" : "Already register Sign In"}Now
        </p>
      </form>
    </div>
  );
}

export default Login;
