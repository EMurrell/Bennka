import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import { Fade as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const links = [
  { name: "About", to: "#About", id: 1 },
  { name: "Testimonial", to: "#Testimonial", id: 2 },
  { name: "Contact", to: "#Contact", id: 3 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);
  const [animateNav, setAnimateNav] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 125) {
        setAnimateNav(true);
      } else setAnimateNav(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`text-neutral-100 w-full flex   justify-between  font-sans  fixed z-50 transition ease-in-out duration-500 ${
        animateNav && "shadow-xl  bg-black/50"
      }`}
    >
      <div
        className={`flex w-screen py-4 bg-transparent    ${
          animateNav && "py-0    bg-black/50 trasition ease-in-out duration-500"
        } mx-auto   justify-between   `}
      >
        <div className="flex w-56 pb-2 md:w-auto ">
          <Link href="/">
            <a className="inline-flex mx-4 text-2xl font-semibold cursor-pointer md:mt-2 font-logo md:text-3xl md:ml-8 lg:ml-16">
              <Image
                src="/bennka-bbb-small.png"
                alt="logo"
                height={92}
                width={300}
              />
            </a>
          </Link>
        </div>

        {/* The Side Bar Menu for screens smaller than 'Medium' */}
        <AnimatePresence>
          {open && (
            <motion.aside
              className="fixed top-0 right-0 h-screen bg-black md:hidden overflow"
              initial={{ width: 0 }}
              transition={{ type: "tween" }}
              animate={{
                width: "100%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.3, duration: 0.15 },
              }}
            >
              <motion.div
                className="flex flex-col p-8 ml-4 text-2xl "
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link href="https://www.trailbridgeweb.com" passHref>
                  <a>
                    <div
                      className="py-10 border-b-2 border-neutral-900"
                      onClick={cycleOpen}
                    >
                      <Image
                        src="/bennka-bbb-small.png"
                        alt="trailbridge logo"
                        height={69}
                        width={225}
                      />
                    </div>
                  </a>
                </Link>

                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    className="flex mt-16 transition duration-100 ease-in-out transform hover:shadow-bottom w-max "
                    variants={itemVariants}
                    aria-current={links.current ? "page" : undefined}
                    onClick={cycleOpen}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* The Hamburger Menu and Close Icons */}
        <div className="flex justify-end md:hidden ">
          <button className="px-2 m-2 cursor-pointer">
            <span className="sr-only ">Open main menu</span>
            <Hamburger toggled={open} toggle={cycleOpen} />
          </button>
        </div>

        {/* The Navbar on medium screens */}
        <div className="hidden pr-8 md:inline-flex ">
          {links.map(({ name, to, id }) => (
            <a
              key={id}
              href={to}
              className="mx-8 my-8 text-lg font-normal transition duration-300 ease-in-out transform hover:scale-150 lg:mx-12 9 md:text-xl hover:text-highlight1"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
