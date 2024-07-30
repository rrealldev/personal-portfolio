function About() {
  return (
    <section
      name="about"
      className="flex h-screen flex-col items-center justify-center bg-[#D7E2C4]"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <h2 className="mt-7 text-4xl font-bold sm:text-5xl">About Me</h2>
        <p className="mt-8 max-w-lg text-xl text-gray-700">
          Hey there! I&apos;m Gabriel John Perez,{" "}
          <strong>a full-stack developer</strong> armed with a degree in{" "}
          <strong>Computer Science</strong>, a proven track record of{" "}
          <strong>
            solving complex problems and providing effective solutions
          </strong>
          , and recently acquired and refreshed coding skills via my rigorous
          journey with{" "}
          <a
            href="https://www.upliftcodecamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-blue-600">Uplift Code Camp.</strong>
          </a>
        </p>
        <br />
        <p className="max-w-lg text-xl text-gray-700">
          In my free time, I enjoy watching anime, K-Dramas, movies, and series,
          which help me unwind and broaden my knowledge beyond the realm of
          technology. I also have a passion for reading and researching random
          facts, which fuels my endlessly curious mind. I also write literary
          pieces which helps train my creativity and artistic expression.
        </p>
      </div>
    </section>
  );
}

export default About;
