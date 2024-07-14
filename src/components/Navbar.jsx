import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-scroll";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "skills",
  },
  {
    id: 4,
    link: "portfolio",
  },
  {
    id: 5,
    link: "contact",
  },
];

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <section className="fixed flex h-20 w-full items-center justify-between bg-[#f5f7e8] px-4 text-black">
      <div>
        <a href="/" className="ml-2 cursor-pointer text-3xl">
          Gabby
        </a>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer px-4 text-lg font-medium text-gray-900 duration-300 hover:scale-105"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <a
        onClick={() => setMobileNav(!mobileNav)}
        className="z-10 cursor-pointer pr-4 text-gray-900 md:hidden"
      >
        {mobileNav ? <FaTimes size={25} /> : <FaBarsStaggered size={25} />}
      </a>

      {mobileNav && (
        <ul className="absolute left-0 top-0 flex h-dvh w-full flex-col items-center justify-center bg-[#f5f7e8] text-gray-900">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer px-4 py-6 text-3xl">
              <Link
                onClick={() => setMobileNav(!mobileNav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Navbar;
