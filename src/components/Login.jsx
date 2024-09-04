// import { useRef, useState } from "react";
// import Header from "./Header";
// import { checkValidateData } from "../../utils/validate";
// import { useDispatch } from "react-redux";

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth"; // Firebase code

// import { auth } from "../../utils/firebase";
// import { addUser } from "../../utils/userSlice";
// import { BG_IMG_SRCSET, BG_IMG_URL, userIcon_URL } from "../../utils/constants";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);

//   const [errorMessage, setErrorMessage] = useState(null);
//   const dispatch = useDispatch();

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm); // If it will be false then will be true if true then will be false
//   };

//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
//     // Validate the user

//     // Validate the user input based on form type
//     const message = isSignInForm
//       ? checkValidateData(null, email.current.value, password.current.value) // Sign-in validation
//       : checkValidateData(
//           name.current.value,
//           email.current.value,
//           password.current.value
//         ); // Sign-up validation

//     setErrorMessage(message);
//     if (message) return;

//     // Sign In / Sign Up Logic
//     if (!isSignInForm) {
//       // if my form is not sign in
//       // Sign Up Logic

//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed up
//           const user = userCredential.user;

//           updateProfile(user, {
//             displayName: name.current.value,
//             photoURL: userIcon_URL,
//           })
//             .then(() => {
//               const { uid, email, displayName, photoURL } = auth.currentUser; // Updated value of current user
//               dispatch(
//                 addUser({
//                   uid: uid,
//                   email: email,
//                   displayName: displayName,
//                   photoURL: photoURL,
//                 })
//               );
//             })
//             .catch((error) => {
//               setErrorMessage(error.message);
//             });
//           setErrorMessage(null); // Clear any error messages
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     } else {
//       // Sign In Logic
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           setErrorMessage(null); // Clear any error messages
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setErrorMessage(errorCode + "-" + errorMessage);
//         });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         {/* Background image */}
//         <img
//           src={BG_IMG_URL}
//           srcSet={BG_IMG_SRCSET}
//           alt="Background Image"
//           aria-hidden="true"
//           className="h-screen w-screen object-cover"
//         />
//       </div>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="bg-black bg-opacity-80 p-12 w-[80%] h-[50%] md:h-[57%] md:w-3/12 absolute mt-32 my-20 md:my-36 mx-auto left-0 right-0 text-white rounded-lg"
//       >
//         {/* Form content */}
//         <h1 className="text-lg md:text-xl my-2">
//           {isSignInForm ? "Sign In" : "Register Now"}
//         </h1>
//         {!isSignInForm && (
//           <input
//             ref={name}
//             type="text"
//             placeholder="Full Name"
//             className="p-2 my-4 w-full bg-gray-600"
//           />
//         )}
//         <input
//           ref={email}
//           type="text"
//           placeholder="email"
//           className="p-2 my-4 w-full bg-gray-600"
//         />
//         <input
//           ref={password}
//           type="password"
//           placeholder="password"
//           className="p-2 my-4 w-full bg-gray-600"
//         />
//         <p className="text-red-700 font-bold m-auto">{errorMessage}</p>
//         <button
//           onClick={handleButtonClick}
//           className="bg-red-700 w-full p-3 my-3 md:my-6 rounded-lg"
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <p>
//           {isSignInForm ? "New to MoviesMod? " : "Already Registered? "}
//           <span
//             className="cursor-pointer text-blue-500"
//             onClick={toggleSignInForm}
//           >
//             {isSignInForm ? "Register Now" : "Sign In now"}
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import { useRef, useState } from "react";
// import Header from "./Header";
// import { checkValidateData } from "../../utils/validate";
// import { useDispatch } from "react-redux";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../../utils/firebase";
// import { addUser } from "../../utils/userSlice";
// import { BG_IMG_SRCSET, BG_IMG_URL, userIcon_URL } from "../../utils/constants";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const dispatch = useDispatch();

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleButtonClick = async () => {
//     const name = nameRef.current?.value;
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;

//     // Validate the user input based on form type
//     const message = isSignInForm
//       ? checkValidateData(null, email, password)
//       : checkValidateData(name, email, password);

//     setErrorMessage(message);
//     if (message) return;

//     try {
//       if (!isSignInForm) {
//         // Sign Up Logic
//         toast.info("Registering...");
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const user = userCredential.user;

//         await updateProfile(user, {
//           displayName: name,
//           photoURL: userIcon_URL,
//         });

//         const {
//           uid,
//           email: userEmail,
//           displayName,
//           photoURL,
//         } = auth.currentUser;
//         dispatch(
//           addUser({
//             uid,
//             email: userEmail,
//             displayName,
//             photoURL,
//           })
//         );

//         toast.success("Registration successful!");
//         setErrorMessage(null);
//       } else {
//         // Sign In Logic
//         toast.info("Logging in...");
//         const userCredential = await signInWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const user = userCredential.user;
//         toast.success("Login successful!");
//         setErrorMessage(null);
//       }
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setErrorMessage(errorCode + "-" + errorMessage);
//       toast.error("Error: " + errorMessage);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="absolute">
//         <img
//           src={BG_IMG_URL}
//           srcSet={BG_IMG_SRCSET}
//           alt="Background Image"
//           aria-hidden="true"
//           className="h-screen w-screen object-cover"
//         />
//       </div>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="bg-black bg-opacity-80 p-12 w-[80%] h-[60%] md:h-[70%] md:w-3/12 absolute mt-32 my-20 md:my-36 mx-auto left-0 right-0 text-white rounded-lg"
//       >
//         <h1 className="text-lg md:text-xl my-2">
//           {isSignInForm ? "Sign In" : "Register Now"}
//         </h1>
//         {!isSignInForm && (
//           <>
//             <input
//               ref={nameRef}
//               type="text"
//               placeholder="Full Name"
//               className="p-2 my-4 w-full bg-gray-600"
//             />
//             <p className="text-gray-400 text-sm">
//               Create a strong password including a capital letter, unique
//               character, and a number.
//             </p>
//           </>
//         )}
//         <input
//           ref={emailRef}
//           type="text"
//           placeholder="Email"
//           className="p-2 my-4 w-full bg-gray-600"
//         />
//         <input
//           ref={passwordRef}
//           type="password"
//           placeholder="Password"
//           className="p-2 my-4 w-full bg-gray-600"
//         />
//         <p className="text-red-700 font-bold m-auto">{errorMessage}</p>
//         <button
//           onClick={handleButtonClick}
//           className="bg-red-700 w-full p-3 my-3 md:my-6 rounded-lg"
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>
//         <p>
//           {isSignInForm ? "New to MoviesMod? " : "Already Registered? "}
//           <span
//             className="cursor-pointer text-blue-500"
//             onClick={toggleSignInForm}
//           >
//             {isSignInForm ? "Register Now" : "Sign In now"}
//           </span>
//         </p>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../../utils/validate";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser } from "../../utils/userSlice";
import { BG_IMG_SRCSET, BG_IMG_URL, userIcon_URL } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = async () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // Validate the user input based on form type
    const message = isSignInForm
      ? checkValidateData(null, email, password)
      : checkValidateData(name, email, password);

    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up Logic
        toast.info("Registering...");
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name,
          photoURL: userIcon_URL,
        });

        const {
          uid,
          email: userEmail,
          displayName,
          photoURL,
        } = auth.currentUser;
        dispatch(
          addUser({
            uid,
            email: userEmail,
            displayName,
            photoURL,
          })
        );

        toast.success("Registration successful!");
        setErrorMessage(null);
      } else {
        // Sign In Logic
        toast.info("Logging in...");
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        toast.success("Login successful!");
        setErrorMessage(null);
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
      toast.error("Error: " + errorMessage);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG_URL}
          srcSet={BG_IMG_SRCSET}
          alt="Background Image"
          aria-hidden="true"
          className="h-screen w-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 p-12 w-[80%] h-[50%] md:h-[70%] md:w-3/12 absolute mt-32 my-20 md:my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="text-lg md:text-xl my-2">
          {isSignInForm ? "Sign In" : "Register Now"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-600"
            />
          </>
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-600"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600"
        />
        {!isSignInForm && (
          <p className="text-gray-400 text-sm">
            Create a strong password including a capital letter, unique
            character, and a number.
          </p>
        )}
        <p className="text-red-700 font-bold m-auto">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-red-700 w-full p-3 my-3 md:my-6 rounded-lg"
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
      <ToastContainer />
    </div>
  );
};

export default Login;
