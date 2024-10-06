import PropTypes from "prop-types"; // Import PropTypes
import logo from "../assets/logo-DanT.png";
import darkLogo from "../assets/dark-logo-DanT.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiLight, CiCloudMoon } from "react-icons/ci";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={`${darkMode ? logo : darkLogo}`}
          alt="my logo"
          className="h-10 w-28 md:h-10 md:w-28 lg:h-12 lg:w-30 mx-2"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button
          onClick={toggleDarkMode}
          className={`relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-600 ${
            darkMode ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <span
            className={`absolute left-1 right--1 w-6 h-5  rounded-full transition-transform duration-600 transform ${
              darkMode ? "translate-x-6 bg-gray-700" : "bg-white"
            }`}
          />
          <span className="absolute left-0.5">
            {darkMode ? <CiLight className="text-black" /> : ""}
          </span>
          <span className="absolute right-1">
            {darkMode ? "" : <CiCloudMoon className="text-white" />}
          </span>
        </button>
        <a
          href="https://www.linkedin.com/in/dantoledano"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 dark:shadow-md dark:shadow-gray-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dantoledano"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 dark:shadow-md dark:shadow-gray-500"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
