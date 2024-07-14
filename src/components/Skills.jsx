import html from "../assets/techstack/html.svg";
import css from "../assets/techstack/css.svg";
import javascript from "../assets/techstack/javascript.svg";
import reactjs from "../assets/techstack/reactjs.svg";
import tailwindcss from "../assets/techstack/tailwindcss.svg";
import mongodb from "../assets/techstack/mongodb.svg";
import expressjs from "../assets/techstack/expressjs.svg";
import nodejs from "../assets/techstack/nodejs.svg";
import git from "../assets/techstack/git.svg";

const techStack = [
  {
    id: 1,
    src: html,
    title: "HTML",
    desc: "Defines the content and structure of web content.",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    desc: "Styling of web documents.",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    desc: "Allows implementation of dynamic features.",
  },
  {
    id: 4,
    src: reactjs,
    title: "ReactJS",
    desc: "JavaScript library for building user interfaces.",
  },
  {
    id: 5,
    src: tailwindcss,
    title: "TailwindCSS",
    desc: "Utility-first CSS framework.",
  },
  {
    id: 6,
    src: mongodb,
    title: "MongoDB",
    desc: "Document-oriented database program.",
  },
  {
    id: 7,
    src: expressjs,
    title: "ExpressJS",
    desc: "NodeJS framework for building RESTful APIs.",
  },
  {
    id: 8,
    src: nodejs,
    title: "NodeJS",
    desc: "JavaScript runtime environment.",
  },
  {
    id: 9,
    src: git,
    title: "Git",
    desc: "Distributed version control system.",
  },
];

function Skills() {
  return (
    <section
      name="skills"
      className="mx-auto flex flex-col items-center justify-center bg-[#f5f7e8] px-4 py-12"
    >
      <h2 className="pb-8 text-4xl font-bold sm:text-5xl">Skills</h2>
      <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3">
        {techStack.map(({ id, src, title, desc }) => (
          <div
            key={id}
            className="mx-auto flex flex-row items-center pt-4 sm:pt-6 md:pt-8"
          >
            <img src={src} alt={title} className="mx-auto w-12 pr-2" />
            <div className="flex h-full w-full flex-col justify-evenly leading-tight">
              <p className="font-bold">{title}</p>
              <p className="max-w-44 text-sm text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
