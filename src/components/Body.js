import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Headers from "./Headers";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        const { uid, email, displayName, photoURL } = auth;
        console.log("displayName");
        const userPayload = {
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        };
        dispatch(addUser(userPayload));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
