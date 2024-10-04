import project1 from "../assets/projects/project-1.jpg";
//import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
    image: project1,
    description:
      "A fully functional web application with features that offers It offers a seamless experience for users to explore, book, and review exciting tours around the world.",
    technologies: ["Node.js", "MongoDB", "Express", "Pug", "CSS", "JWT"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwinds"],
  },
  {
    title: "Memory Game",
    image: project4,
    description:
      "CLI Memory Game where you can test your memory skills against another player or an AI opponent.",
    technologies: ["C#", ".NET"],
  },
];

export const CONTACT = {
  address: "Tel Aviv, Israel ",
  phoneNo: "+972 052-7493508 ",
  email: "dan3tol99@gmail.com",
};
