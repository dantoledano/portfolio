//import project1 from "../assets/projects/project-1.jpg";
import muchillsPic1 from "../assets/projects/muchills/muchills-photo.png";
import muchillsPic2 from "../assets/projects/muchills/muchills-photo2.png";
import muchillsPic3 from "../assets/projects/muchills/muchills-photo3.png";
import muchillsPic4 from "../assets/projects/muchills/muchills-photo4.png";
import muchillsPic5 from "../assets/projects/muchills/muchills-photo5.png";
import muchillsPic6 from "../assets/projects/muchills/muchills-photo6.png";
import memoryPic1 from "../assets/projects/memory/memory-photo.png";
import memoryPic2 from "../assets/projects/memory/memory-photo2.png";

export const HERO_CONTENT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly web applications.
I have worked with a variety of technologies, including React, Node.js, MongoDB, Express, and much more.`;

export const ABOUT_TEXT = `I am a second-year Computer Science student at The Academic College of Tel-Aviv Yaffo,
 who is eager to learn and grow as a developer.
  As an 8200 alumni, I bring valuable experience from the tech field,
   contributing to my strong problem-solving skills and ability to adapt to new technologies.
    Alongside my academic studies, I am driven by self-learning and have completed multiple online courses,
     enhancing my proficiency in full-stack web development, working with a range of technologies and tools.`;

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
    technologies: ["HTML", "CSS", "React", "Tailwinds"],
  },
  {
    title: "Memory Game",
    slides: [memoryPic1, memoryPic2],
    description:
      "CLI Memory Game where you can test your memory skills against another player or an AI opponent.",
    technologies: ["C#", ".NET"],
  },
];

export const CONTACT = {
  address: "Tel Aviv, Israel ",
  phoneNo: "+972 52-7493508 ",
  email: "dan3tol99@gmail.com",
};
