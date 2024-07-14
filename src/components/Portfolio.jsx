import project1 from "../assets/portfolio/cv-pure-html.png";
import project2 from "../assets/portfolio/dictionary-web-app.png";
import project3 from "../assets/portfolio/hr-directory.png";
import project4 from "../assets/portfolio/tindog.png";
import project5 from "../assets/portfolio/pokedex.png";

const projects = [
  {
    id: 1,
    image: project1,
    name: "Online CV",
    description:
      "Simple CV website created using pure HTML during a Udemy Online Course.",
    demoUrl: "https://rrealldev.github.io/cv-bootcamp/",
    codeUrl: "https://github.com/rrealldev/cv-bootcamp",
  },
  {
    id: 2,
    image: project2,
    name: "Dictionary API App",
    description:
      "Dictionary Web App created using Javascript and Free Dictionary API",
    demoUrl: "https://dictionary-web-app-lac-two.vercel.app/",
    codeUrl: "https://github.com/rrealldev/dictionary-web-app",
  },
  {
    id: 3,
    image: project3,
    name: "HR Employee Directory",
    description:
      "A simple HR Employee Directory created using ReactJS and React Router",
    demoUrl: "https://react-hr-directory.vercel.app/",
    codeUrl: "https://github.com/rrealldev/hr-directory",
  },
  {
    id: 4,
    image: project4,
    name: "Tindog",
    description:
      "Tinder for dogs. Created using HTML and CSS during a Udemy Online Course.",
    demoUrl: "https://tindog-nine-lake.vercel.app/",
    codeUrl: "https://github.com/rrealldev/tindog",
  },
  {
    id: 5,
    image: project5,
    name: "Pokedex",
    description: "Simple Pokedex using Pokedex API and Javascript promises",
    demoUrl: "https://pokedex-pokemon-api.vercel.app/",
    codeUrl: "https://github.com/rrealldev/pokemon-api",
  },
];

function Portfolio() {
  return (
    <section name="portfolio" className="flex flex-col bg-[#D7E2C4] py-10">
      <h2 className="py-8 text-center text-4xl font-bold sm:py-10 sm:text-5xl">
        Portfolio
      </h2>
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(
            ({ id, image, name, description, demoUrl, codeUrl }) => (
              <div
                key={id}
                className="w-72 overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">{name}</h3>
                  <p className="mb-4 max-w-full truncate text-xs leading-tight text-gray-700">
                    {description}
                  </p>
                  <div className="flex justify-between gap-4 text-center">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 rounded-lg bg-[#6D9773] px-4 py-2 text-white hover:bg-[#557d58]"
                    >
                      Demo
                    </a>
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 rounded-lg bg-[#6D9773] px-4 py-2 text-white hover:bg-[#557d58]"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
