import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import ProjectButton from "./ProjectButton";
import { FaGithub, FaChrome } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <ImageSlider>
                {project.slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={project.title}
                    className="mb-6 rounded"
                  />
                ))}
              </ImageSlider>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4 lg:ml-20"
            >
              <h6 className="mb-6 font-semibold text-xl ">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-y-1">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 py-3">
                <ProjectButton url={project.url}>
                  Source <FaGithub className="inline-block ml-1" />
                </ProjectButton>
                {project.liveUrl && (
                  <ProjectButton url={project.liveUrl}>
                    Live Demo <FaChrome className="inline-block ml-1" />
                  </ProjectButton>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
