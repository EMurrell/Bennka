import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <section className="flex flex-col justify-center w-full h-screen px-6 text-white bg-center bg-no-repeat bg-cover md:px-10 lg:px-16 bg-hero">
      <FadeUp>
        <h1 className="pb-2 text-5xl font-semibold text-center text-white md:text-6xl lg:text-8xl">
          Your Headline
        </h1>
      </FadeUp>
      <div className="flex mx-auto border-t-4 border-white w-72"></div>
      <FadeIn>
        <h2 className="pt-2 pb-8 text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          And a description or slogan
        </h2>
      </FadeIn>
      <DelayedFadeIn>
        <div className="flex flex-row justify-center mx-auto mb-6">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-transparent border-4 border-white shadow-xl hover:bg-highlight1 hover:border-highlight1 md:text-xl lg:py-4 ">
            CONTACT US TODAY
          </button>
        </div>
      </DelayedFadeIn>
      <DelayedFadeIn>
        <div className="absolute mb-4 bottom-6 inset-x-1/2">
          <ChevronDownIcon className="w-10 h-10 -ml-4 ease-in delay-75 text-neutral-100 animate-bounce" />
        </div>
      </DelayedFadeIn>
    </section>
  );
}
