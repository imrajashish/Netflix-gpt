import React, { useRef, useState } from "react";
import Headers from "./Headers";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

function Login() {
  const [isSignIn, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
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
            photoURL:
              "https://avatars.githubusercontent.com/u/61040769?s=96&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log("displayName");
              const userPayload = {
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              };
              dispatch(addUser(userPayload));
              navigate("/browser");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          console.log(errorMessage);
          // ..
        });
    } else {
      //Sign In the
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user, "SUccessfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          console.log(errorMessage);
        });
    }
  };
  return (
    <div>
      <Headers />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 relative p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl  py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="FullName"
            className="p-4 my-4 w-full bg-gray-500 "
          ></input>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or Phone No"
          className="p-4 my-4 w-full bg-gray-500 "
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
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
          New to Netflix? {isSignIn ? "Sign Up" : "Already register Sigin "}Now
        </p>
      </form>
    </div>
  );
}

export default Login;
