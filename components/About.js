import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-10 pt-12 font-sans font-semibold tracking-tight md:pt-24 text-neutral-900 md:pb-8 "
    >
      <FadeUp>
        <h1 className="py-4 pt-4 text-3xl text-center md:text-4xl lg:text-5xl">
          About Us
        </h1>
      </FadeUp>

      <div className="flex self-center w-24 pt-2 border-t-2 border-highlight1"></div>
      <FadeIn>
        <div className="flex flex-col justify-center text-xl text-center md:text-2xl lg:text-3xl">
          <p className="py-4">
            Your mission statement, backstory, or services offered.
          </p>

          <p className="py-4 text-xl lg:text-2xl">
            Fully Licensed and Insured.
          </p>

          <p className="py-4 text-xl md:pb-12 lg:text-2xl">
            Servicing Your City and Surrounding Region.
          </p>
        </div>
      </FadeIn>
      <div className="flex flex-col justify-center px-6 py-4 mt-8 text-xl text-center text-white border-4 shadow-lg font-hand border-highlight1 bg-highlight1 place-self-center md:text-xl lg:text-2xl shadow-black">
        <FadeUp>
          <h2>100% Quality Guarantee</h2>
        </FadeUp>
      </div>
    </section>
  );
}
