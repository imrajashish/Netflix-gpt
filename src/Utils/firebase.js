// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAXtObfd828jzcZNoD3GAnqRSPNHCzf_8",
  authDomain: "netflixgpt-8543.firebaseapp.com",
  projectId: "netflixgpt-8543",
  storageBucket: "netflixgpt-8543.firebasestorage.app",
  messagingSenderId: "993916433098",
  appId: "1:993916433098:web:d2dce923548f3950557a33",
  measurementId: "G-68RRKHJ3HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();