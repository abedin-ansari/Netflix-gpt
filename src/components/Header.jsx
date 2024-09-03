import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import {
  App_LOGO_URL,
  SupportedLanguages,
  //userIcon_URL,
} from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";
import { clearMovieData } from "../../utils/movieSlice";
import useOnlineStatus from "../CustomHook/useOnlineStatus";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onlineStatus = useOnlineStatus();

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
        dispatch(clearMovieData()); // Clear movie data
        navigate("/");
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
    <div className="px-8 py-6 absolute bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between w-full">
      {/* Absolute used for overlap*/}
      <div className="flex justify-center w-full mb-4 md:mb-0 md:justify-start">
        <img src={App_LOGO_URL} alt="MoviesMod Logo" className="w-48 md:w-64" />
      </div>
      {user && (
        <div className="flex items-center justify-between my-4 md:my-3">
          <p className="text-white whitespace-nowrap mr-2 -ml-2 md:mr-3 md:-ml-0">
            {onlineStatus ? "Online🟢" : "Offline🔴"}
          </p>
          {showGptSearch && (
            <select
              className="mr-3 md:mr-5 p-1 md:p-3 mx-1 md:mx-2 bg-blue-600 text-white w-24 rounded-lg"
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
            className="mr-4 md:mr-5 py-1 px-2 md:px-3 md:py-2 bg-cyan-950 text-cyan-600 border-cyan-600 border-2 rounded text-sm md:text-lg md:font-bold whitespace-nowrap"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "🏠Home" : "🔍Search"}
          </button>
          <button
            className="px-2 py-1 md:py-2 md:px-3 bg-red-600 text-white mr-4 rounded text-sm md:text-lg md:font-bold md:border-[0.10rem] whitespace-nowrap"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
