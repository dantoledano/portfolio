import { FaNode, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechnologyIcon = ({ variant, initial, animate, icon }) => (
  <motion.div
    variants={variant}
    initial={initial}
    animate={animate}
    className="rounded-2xl border-4 border-neutral-800 p-4 shadow-md shadow-gray-500"
  >
    {icon}
  </motion.div>
);

// Define prop types for TechnologyIcon
TechnologyIcon.propTypes = {
  variant: PropTypes.object.isRequired,
  initial: PropTypes.string.isRequired,
  animate: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <TechnologyIcon
          variant={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          icon={<FaNode className="text-6xl text-green-500" />}
        />
        <TechnologyIcon
          variant={iconVariants(3)}
          initial="initial"
          animate="animate"
          icon={<SiMongodb className="text-6xl text-green-800" />}
        />
        <TechnologyIcon
          variant={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          icon={<FaReact className="text-6xl text-cyan-400" />}
        />
        <TechnologyIcon
          variant={iconVariants(2)}
          initial="initial"
          animate="animate"
          icon={<SiCplusplus className="text-6xl text-purple-600" />}
        />
        <TechnologyIcon
          variant={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          icon={<SiCsharp className="text-6xl text-blue-600" />}
        />
        <TechnologyIcon
          variant={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          icon={<SiDotnet className="text-6xl text-blue-800" />}
        />
        <TechnologyIcon
          variant={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          icon={<SiExpress className="text-6xl text-wheat-200" />}
        />
        <TechnologyIcon
          variant={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          icon={<SiHtml5 className="text-6xl text-orange-700" />}
        />
        <TechnologyIcon
          variant={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          icon={<SiCss3 className="text-6xl text-blue-600" />}
        />
      </motion.div>
    </div>
  );
};

export default Technologies;

// import { FaNode, FaReact } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiCplusplus,
//   SiCsharp,
//   SiDotnet,
//   SiExpress,
//   SiHtml5,
//   SiCss3,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// const iconVariants = (duration) => ({
//   inital: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h2>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaNode className="text-6xl text-green-500" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiMongodb className="text-6xl text-green-800" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3.1)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <FaReact className="text-6xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiCplusplus className="text-6xl text-purple-600" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.8)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiCsharp className="text-6xl text-blue-600" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiDotnet className="text-6xl text-blue-800" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiExpress className="text-6xl text-wheat-200" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiHtml5 className="text-6xl text-orange-700" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//         >
//           <SiCss3 className="text-6xl text-blue-600" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;
