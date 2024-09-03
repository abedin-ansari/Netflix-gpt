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
      <img src={App_LOGO_URL} alt="MoviesMod Logo" className="w-48 md:w-64" />
      {user && (
        <div className="flex items-center justify-between my-6 md:my-3">
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
          <p className="px-5 text-white">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </p>
          <button
            className="px-2 py-1 bg-cyan-950 text-cyan-600 border-cyan-600 border-2 mr-4 rounded text-sm sm:font-bold "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "🏠Home" : "🔍Search"}
          </button>
          <button
            className="px-2 py-1 bg-red-600 text-white mr-4 rounded text-sm sm:font-bold "
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
