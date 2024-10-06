import { HERO_CONTENT, HERO_TECHNOLOGIES } from "../constants";
import profilePic from "../assets/about.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="lg:mx-20 flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="pb-12 text-5xl font-thin tracking-tight lg:mt-10 lg:text-7xl"
            >
              I am <br />
              Dan Toledano
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-slate-300 via-slate-500 to-slate-400 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent"
            >
              Student Software Developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter font-spacing-medium line-spacing-medium"
            >
              {HERO_CONTENT}
              <br />
              {HERO_TECHNOLOGIES}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
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
