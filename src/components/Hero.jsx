import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/about.jpg";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-6xl font-thin tracking-tight lg:mt-10 lg:text-7xl">
              Dan Toledano
            </h1>
            <span className="bg-gradient-to-r from-purple-100 via-slate-500 to-purple-900 bg-clip-text text-4xl tracking-tight text-transparent">
              Student Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="profile picture"
              className="w-36 h-36 rounded-lg object-cover sm:w-48 sm:h-48 md:w-64 md:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
