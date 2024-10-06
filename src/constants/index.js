//import project1 from "../assets/projects/project-1.jpg";
import muchillsPic1 from "../assets/projects/muchills/muchills-photo.png";
import muchillsPic2 from "../assets/projects/muchills/muchills-photo2.png";
import muchillsPic3 from "../assets/projects/muchills/muchills-photo3.png";
import muchillsPic4 from "../assets/projects/muchills/muchills-photo4.png";
import muchillsPic5 from "../assets/projects/muchills/muchills-photo5.png";
import muchillsPic6 from "../assets/projects/muchills/muchills-photo6.png";
import memoryPic1 from "../assets/projects/memory/memory-photo.png";
import memoryPic2 from "../assets/projects/memory/memory-photo2.png";

export const HERO_CONTENT = `I'm a student software developer who loves building easy-to-use and efficient web applications.`;
export const HERO_TECHNOLOGIES = `I have worked with a variety of technologies, including React, Node.js, MongoDB, Express, and much more.`;
export const ABOUT_TEXT = `I am a second-year Computer Science student at The Academic College of Tel-Aviv Yaffo,
 who is eager to learn and grow as a developer.
  As an 8200 alumni, I bring valuable experience from the tech field and ability to adapt to new technologies.
Alongside my studies, I actively self-learn and have completed several online courses, gaining proficiency in full-stack development with various technologies`;

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
      "A fully functional web application with features that offers a seamless experience for users to explore, book, and review exciting tours around the world.",
    technologies: ["Node.js", "MongoDB", "Express", "Pug", "CSS", "JWT"],
    url: "https://github.com/dantoledano/Muchills_nodejs",
    liveUrl: "https://muchills.onrender.com/",
  },
  {
    title: "Portfolio Website",
    slides: [
      muchillsPic1,
      muchillsPic2,
      muchillsPic3,
      muchillsPic4,
      muchillsPic5,
      muchillsPic6,
    ],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwinds", "HTML", "CSS"],
    url: "https://github.com/dantoledano/portfolio",
    liveUrl: "https://muchills.onrender.com/",
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
