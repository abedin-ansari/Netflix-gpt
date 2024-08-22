import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // If it will be false then will be true if true then will be false
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg 2000w, 
                  https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_medium.jpg 1279w, 
                  https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_small.jpg 959w"
          alt="BG-IMG"
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr"
        />
      </div>
      <form className="bg-black bg-opacity-80 p-12 w-3/12 absolute my-36 mx-auto left-0 right-0 text-white rounded-lg">
        {/* bgcolor and opacity used for semi transparent form W-3/12 for width of form in a exact size
        mx-auto for margin auto left-0 right-0(center from left and right)*/}
        <h1 className="text-xl my-3">
          {isSignInForm ? "Sign In" : "Register Now"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="username"
            className="p-2 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-2 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-600"
        />
        <button className="bg-red-700 w-full p-3 my-6 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to MoviesMod ? Register Now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
