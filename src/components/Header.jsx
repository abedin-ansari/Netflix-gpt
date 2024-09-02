import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import {
  App_LOGO_URL,
  SupportedLanguages,
  userIcon_URL,
} from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Navigate authentication Routings for all signin register and logout will happen from onAuthStateChange
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    // <div className="px-4 w-screen sm:px-8 py-4 sm:py-6 absolute bg-gradient-to-b from-black z-10 flex justify-between">
    //   {/* Absolute used for overlap*/}
    //   <img
    //     src={App_LOGO_URL}
    //     alt="MoviesMod Logo"
    //     className="w-32 sm:w-48 md:w-64"
    //   />
    //   {user && (
    //     <div className="flex p-4">
    //       {showGptSearch && (
    //         <select
    //           className="p-2 m-2 bg-blue-600 text-white"
    //           onChange={handleLangChange}
    //         >
    //           {SupportedLanguages.map((lang) => (
    //             <option key={lang.identifier} value={lang.identifier}>
    //               {lang.name}
    //             </option>
    //           ))}
    //         </select>
    //       )}

    //       <button
    //         className="py-2 px-4 mx-4 bg-purple-700 text-white rounded-lg"
    //         onClick={handleGptSearchClick}
    //       >
    //         {showGptSearch ? "Homepage" : "GPT Search"}
    //       </button>
    //       <img src={userIcon_URL} alt="User Icon" className="w-7 h-7" />
    //       <button className="text-white" onClick={handleSignOut}>
    //         Sign Out
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="px-8 py-6 absolute bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between w-full">
      {/* Absolute used for overlap*/}
      <img src={App_LOGO_URL} alt="MoviesMod Logo" className="w-48 md:w-64" />
      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="p-2 mx-2 bg-blue-600 text-white"
              onChange={handleLangChange}
            >
              {SupportedLanguages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 bg-purple-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img src={userIcon_URL} alt="User Icon" className="w-7 h-7" />
          <button className="text-white ml-4" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
