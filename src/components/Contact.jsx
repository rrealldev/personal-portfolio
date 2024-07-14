import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  {
    id: 1,
    link: "https://facebook.com/gabrieljohn.perez/",
    icon: FaFacebookSquare,
  },
  {
    id: 2,
    link: "https://linkedin.com/in/gabrieljohnperez/",
    icon: FaLinkedin,
  },
  {
    id: 3,
    link: "https://github.com/rrealldev/",
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <section
      name="contact"
      className="flex h-96 flex-col items-center justify-center gap-6 bg-[#f5f7e8]"
    >
      <div className="mx-auto flex flex-col items-center gap-6 px-2">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Get In Touch
        </h2>
        <p className="max-w-lg text-center text-gray-600">
          I&apos;m currently looking for career opportunities to showcase and
          upgrade my skills as a Full Stack Developer. Feel free to contact me
          to know more. You may also check out my social links below.
        </p>
        <a
          href="mailto:perezgabrieljohn@gmail.com"
          className="max-w-64 rounded-lg bg-[#6D9773] px-6 py-4 text-center text-white hover:bg-[#557d58]"
        >
          Send me a message
        </a>
        <div className="flex flex-row gap-4">
          {socials.map(({ id, link, icon: IconComponent }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <IconComponent size={25} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
