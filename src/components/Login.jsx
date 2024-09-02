import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../../utils/validate";
import { useDispatch } from "react-redux";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; // Firebase code

import { auth } from "../../utils/firebase";
import { addUser } from "../../utils/userSlice";
import { BG_IMG_SRCSET, BG_IMG_URL, userIcon_URL } from "../../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // If it will be false then will be true if true then will be false
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the user

    // Validate the user input based on form type
    const message = isSignInForm
      ? checkValidateData(null, email.current.value, password.current.value) // Sign-in validation
      : checkValidateData(
          name.current.value,
          email.current.value,
          password.current.value
        ); // Sign-up validation

    setErrorMessage(message);
    if (message) return;

    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      // if my form is not sign in
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userIcon_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser; // Updated value of current user
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          setErrorMessage(null); // Clear any error messages
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setErrorMessage(null); // Clear any error messages
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        {/* <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg 2000w,
                  https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_medium.jpg 1279w,
                  https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_small.jpg 959w"
          alt="BG-IMG"
          aria-hidden="true"
          className="w-full h-full object-cover"
        /> */}
        <img
          src={BG_IMG_URL}
          srcSet={BG_IMG_SRCSET}
          alt="Background Image"
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 p-6 sm:p-8 md:p-12 w-11/12 sm:w-8/12 md:w-3/12 absolute my-20 sm:my-20 md:my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        {/* bgcolor and opacity used for semi transparent form W-3/12 for width of form in a exact size
        mx-auto for margin auto left-0 right-0(center from left and right)*/}
        <h1 className="text-lg sm:text-xl my-3">
          {isSignInForm ? "Sign In" : "Register Now"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 sm:my-4 w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 my-2 sm:my-4 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-2 sm:my-4 w-full bg-gray-600"
        />
        <p className="text-red-700 font-bold m-auto bottom-0 top-0">
          {errorMessage}
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-red-700 w-full p-2 sm:p-3 my-4 sm:my-6 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to MoviesMod? " : "Already Registered? "}
          <span
            className="cursor-pointer text-blue-500"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Register Now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
