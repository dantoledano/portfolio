import logo from "../assets/logo-DanT.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-5 flex item-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="my logo"
          className="h-10 w-28 md:h-10 md:w-28 lg:h-12 lg:w-30 mx-2"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/dantoledano"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dantoledano"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
