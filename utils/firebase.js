// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-2G3vHmypCKNm0YVDOKxZieIJhs-jK84",
  authDomain: "moviesmod-f9854.firebaseapp.com",
  projectId: "moviesmod-f9854",
  storageBucket: "moviesmod-f9854.appspot.com",
  messagingSenderId: "799208499328",
  appId: "1:799208499328:web:71e06c2b87ee012a5a5e65",
  measurementId: "G-YM8FZ4SFRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); // Its on a central place becouse it will come again n again so
// it is good to export it and import whenever needed
