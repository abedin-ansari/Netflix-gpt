import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { App_LOGO_URL, SupportedLanguages } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";
import { clearMovieData } from "../../utils/movieSlice";
import lang from "../../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const currentLang = useSelector((store) => store.config.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(clearMovieData());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black via-black/90 to-transparent z-50">
      <div className="mx-4 md:mx-16 lg:mx-20 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo */}
          <img
            src={App_LOGO_URL}
            alt="MoviesMod Logo"
            className="w-48 md:w-72 hover:scale-105 transition-transform duration-300 cursor-pointer mb-4 md:mb-0 md:ml-8 lg:ml-12"
            onClick={() => navigate("/browse")}
          />

          {user && (
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 md:mr-8 lg:mr-12">
              {/* Language Selector */}
              <select
                className="px-4 py-2 bg-black/50 text-white border-2 border-white rounded-lg
                hover:bg-black/80 focus:outline-none focus:border-white transition-colors
                text-sm md:text-base cursor-pointer w-[120px] font-semibold"
                onChange={handleLangChange}
                value={currentLang}
              >
                {SupportedLanguages.map((language) => (
                  <option
                    key={language.identifier}
                    value={language.identifier}
                    className="bg-black font-semibold"
                  >
                    {language.name}
                  </option>
                ))}
              </select>

              <button
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg
                hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2
                shadow-lg shadow-blue-500/30 text-sm md:text-base font-medium w-[100px]"
                onClick={handleGptSearchClick}
              >
                <i
                  className={`fas ${
                    showGptSearch ? "fa-home" : "fa-search"
                  } text-sm`}
                ></i>
                {showGptSearch
                  ? lang[currentLang].home
                  : lang[currentLang].search}
              </button>

              {/* Sign Out Button */}
              <button
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg
                hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2
                shadow-lg shadow-red-500/30 text-sm md:text-base font-medium min-w-[120px]"
                onClick={handleSignOut}
              >
                <i className="fas fa-sign-out-alt"></i>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
