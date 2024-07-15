function About() {
  return (
    <section
      name="about"
      className="flex h-screen flex-col items-center justify-center bg-[#D7E2C4]"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <h2 className="mt-7 text-4xl font-bold sm:text-5xl">About Me</h2>
        <p className="mt-8 max-w-lg text-xl text-gray-700">
          Hey there! I&apos;m Gabriel John Perez, an aspiring full-stack
          developer armed with a degree in Computer Science. Entering the
          software engineering field proved challenging due to a lack of
          practical experience. Determined to overcome this obstacle, I embarked
          on a journey with Uplift Code Camp to refresh and enhance my coding
          skills, preparing for a successful career shift.
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
