import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the reducer
  },
});

export default appStore;
