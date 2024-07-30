import { HiDocumentText } from "react-icons/hi2";
import { Link } from "react-scroll";

function Home() {
  return (
    <section name="home" className="h-screen w-full bg-[#f5f7e8]">
      <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center px-4 sm:items-center">
        <h2 className="py-3 text-4xl font-bold text-gray-900 sm:text-7xl">
          Hey, I&apos;m Gabby.
        </h2>
        <p className="max-w-2xl py-4 text-lg text-gray-500 sm:text-center">
          Full Stack Developer. Bringing a blend of creativity and technical
          expertise to every project. Dedicated to continuous learning and
          staying updated with the latest industry trends to deliver innovative
          and effective solutions.
        </p>

        <div className="mt-4 flex max-w-full flex-col justify-center gap-8 py-4 sm:w-full md:flex-row md:gap-8">
          <Link
            to="about"
            smooth
            duration={600}
            className="cursor-pointer rounded-lg border-slate-900 bg-[#6D9773] px-3 py-5 text-center text-white hover:bg-[#557d58] md:w-72"
          >
            Learn more
          </Link>
          <a
            href="/Gabriel_John_Perez_Resume.pdf"
            download
            className="flex items-center justify-center rounded-lg bg-[#6D9773] px-3 py-5 text-white hover:bg-[#557d58] md:w-72"
          >
            <HiDocumentText className="mr-2" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
