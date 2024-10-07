//import project1 from "../assets/projects/project-1.jpg";
import muchillsPic1 from "../assets/projects/muchills/muchills-photo.png";
import muchillsPic2 from "../assets/projects/muchills/muchills-photo2.png";
import muchillsPic3 from "../assets/projects/muchills/muchills-photo3.png";
import muchillsPic4 from "../assets/projects/muchills/muchills-photo4.png";
import muchillsPic5 from "../assets/projects/muchills/muchills-photo5.png";
import muchillsPic6 from "../assets/projects/muchills/muchills-photo6.png";
import portfolioPoc1 from "../assets/projects/portfolio/portfolio-photo.png";
import portfolioPoc2 from "../assets/projects/portfolio/portfolio-photo2.png";
import portfolioPoc3 from "../assets/projects/portfolio/portfolio-photo3.png";
import portfolioPoc4 from "../assets/projects/portfolio/portfolio-photo4.png";
import portfolioPoc5 from "../assets/projects/portfolio/portfolio-photo5.png";
import memoryPic1 from "../assets/projects/memory/memory-photo.png";
import memoryPic2 from "../assets/projects/memory/memory-photo2.png";
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

export const HERO_CONTENT = `I'm a student software developer who loves building easy-to-use and efficient web applications.`;
export const HERO_TECHNOLOGIES = `I have worked with a variety of technologies, including React, Node.js, MongoDB, Express, and much more.`;
export const ABOUT_TEXT = `I am a second-year Computer Science student at The Academic College of Tel-Aviv Yaffo,
 who is eager to learn and grow as a developer.
  As an 8200 alumni, I bring valuable experience from the tech field and ability to adapt to new technologies.
Alongside my studies, I actively self-learn and have completed several online courses, gaining proficiency in full-stack development with various technologies`;

export const techIconsData = [
  {
    component: FaNode, // Reference to the component, not JSX
    color: "text-green-500",
    duration: 2.5,
  },
  {
    component: SiMongodb,
    color: "text-green-800",
    duration: 3,
  },
  {
    component: FaReact,
    color: "text-cyan-400",
    duration: 3.1,
  },
  {
    component: SiCplusplus,
    color: "text-purple-600",
    duration: 2,
  },
  {
    component: SiCsharp,
    color: "text-blue-600",
    duration: 2.8,
  },
  {
    component: SiDotnet,
    color: "text-blue-800",
    duration: 1.5,
  },
  {
    component: SiExpress,
    color: "text-wheat-200",
    duration: 2.3,
  },
  {
    component: SiHtml5,
    color: "text-orange-700",
    duration: 2.5,
  },
  {
    component: SiCss3,
    color: "text-blue-600",
    duration: 2.5,
  },
];

export const PROJECTS = [
  {
    title: "Muchills",
    slides: [
      muchillsPic1,
      muchillsPic2,
      muchillsPic3,
      muchillsPic4,
      muchillsPic5,
      muchillsPic6,
    ],
    description:
      "A fully functional tour-booking web application with features for exploring, booking, and reviewing exciting tours worldwide. The platform provides a smooth user experience. Currently not responsive.",
    technologies: ["Node.js", "MongoDB", "Express", "Pug", "CSS", "JWT"],
    url: "https://github.com/dantoledano/Muchills_nodejs",
    liveUrl: "https://muchills.onrender.com/",
  },
  {
    title: "Portfolio Website",
    slides: [
      portfolioPoc1,
      portfolioPoc2,
      portfolioPoc3,
      portfolioPoc4,
      portfolioPoc5,
    ],
    description:
      "This personal portfolio website showcasing projects, skills, and contact information, including features for sending emails and light-dark mode functionality",
    technologies: ["React", "Tailwind", "HTML", "CSS"],
    url: "https://github.com/dantoledano/portfolio",
    liveUrl: "https://dantoledano.vercel.app/",
  },
  {
    title: "Memory Game",
    slides: [memoryPic1, memoryPic2],
    description:
      "CLI Memory Game where you can test your memory skills against another player or an AI opponent.",
    technologies: ["C#", ".NET"],
    url: "https://github.com/dantoledano/MemoryGame_CS.NET",
  },
];

export const CONTACT = {
  phoneNo: "+972 52-7493508 ",
  email: "dan3tol99@gmail.com",
};
