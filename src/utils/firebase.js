// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2G3vHmypCKNm0YVDOKxZieIJhs-jK84",
  authDomain: "moviesmod-f9854.firebaseapp.com",
  projectId: "moviesmod-f9854",
  storageBucket: "moviesmod-f9854.firebasestorage.app",
  messagingSenderId: "799208499328",
  appId: "1:799208499328:web:71e06c2b87ee012a5a5e65",
  measurementId: "G-YM8FZ4SFRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
