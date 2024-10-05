import React from "react";
import PropTypes from "prop-types";

function ProjectButton({ url, children }) {
  const handleClick = () => {
    const childrenString = React.Children.toArray(children).join(" ");
    if (childrenString.includes("Live Demo")) {
      alert("First load may take up to a minute due to free hosting ⏳🥳");
    }
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-purple-950 bg-opacity-40 text-sm rounded shadow-lg hover:bg-purple-900 hover:scale-105 transition transform duration-200 ease-in-out px-1 py-0.5"
    >
      {children}
    </button>
  );
}

ProjectButton.propTypes = {
  url: PropTypes.string.isRequired, // Ensures that 'url' is a string
  children: PropTypes.node.isRequired, // Ensures that 'text' is a string
};

export default ProjectButton;
