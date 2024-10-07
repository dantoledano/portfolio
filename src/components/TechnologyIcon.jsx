import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

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

TechnologyIcon.propTypes = {
  variant: PropTypes.object.isRequired,
  initial: PropTypes.string.isRequired,
  animate: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default TechnologyIcon;
