import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constans";

function Headers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        const userPayload = {
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        };
        navigate("/browse");
        dispatch(addUser(userPayload));
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <img className="w-12 h-12" alt="login Icon" src={user.photoURL}></img>
          <button className="font-bold text-white " onClick={handleSingOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Headers;
