// import Logo from "/MovieHub.png";
// import Logo from "../assets/MovieHub.png";

const Header = () => {
  return (
    <div className="px-8 py-6 absolute bg-gradient-to-b from-black z-10">
      {/* Absolute used for overlap*/}
      <img
        src="https://moviesmod.win/wp-content/uploads/2022/12/moviesmodnew-Custom.png"
        alt="MoviesMod Logo"
      />
    </div>
  );
};

export default Header;
