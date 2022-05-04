import Image from "next/image";
import { Facebook, Twitter, Instagram } from "@icons-pack/react-simple-icons";
import { MailIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";
import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer
      id="Contact"
      className="flex flex-col px-8 pt-6 font-sans bg-neutral-900 xl:h-auto md:px-24 lg:px-52 text-neutral-100 "
    >
      <div className="flex flex-col py-20 2xl:py-20 lg:flex-row ">
        <div className="flex flex-col">
          <FadeRight>
            <h1 className="pr-2 mb-8 text-4xl font-semibold md:text-5xl lg:text-6xl lg:w-1/2">
              Company name and logo.
            </h1>

            <div className="flex flex-row mb-10">
              <a href="https://facebook.com/trailbridgeweb">
                <Facebook className="w-8 h-8 mr-8 cursor-pointer md:w-10 md:h-10 hover:text-highlight1" />
              </a>
              <a href="https://twitter.com/trailbridgeweb">
                <Twitter className="w-8 h-8 mr-8 cursor-pointer md:w-10 md:h-10 hover:text-highlight1" />
              </a>
              <a href="https://instagram.com/trailbridgeweb">
                <Instagram className="w-8 h-8 cursor-pointer md:w-10 md:h-10 hover:text-highlight1" />
              </a>
            </div>
          </FadeRight>
        </div>
        <FadeIn>
          <div className="flex flex-col text-base lg:text-lg">
            <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max ">
              <h2 className="flex flex-row w-max">Business Hours:</h2>
              <p className=" text-neutral-400 font-body">Monday to Friday</p>
              <p className=" text-neutral-400 font-body">
                9:00am to 4:00pm EST
              </p>
            </div>
            <a href="mailto:hello@trailbridgeweb.com">
              <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max ">
                <h2 className="flex flex-row w-max">
                  Email &nbsp;
                  <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
                </h2>
                <p className=" text-neutral-400 font-body">
                  hello@trailbridgeweb.com
                </p>
              </div>
            </a>

            <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max ">
              <h2 className="flex flex-row w-max">
                Phone &nbsp;
                <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
              </h2>
              <p className=" text-neutral-400 font-body">(613) 555-1234</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="flex flex-col justify-center py-12 text-base text-center border-t border-neutral-200 lg:text-lg text-neutral-400">
        &copy; {getCurrentYear()} Trailbridge Web <br />
        All Rights Reserved
      </div>
    </footer>
  );
}
