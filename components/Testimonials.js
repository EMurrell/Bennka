import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";

export default function Testimonials() {
  return (
    <section
      id="Testimonial"
      className="py-32 -mt-10 overflow-hidden font-sans tracking-tight bg-center bg-cover md:-mt-16 md:py-28 bg-quote"
    >
      <div className="px-8 ">
        <div className="flex flex-col justify-center ">
          <FadeUp>
            <h1 className="py-4 text-3xl font-medium text-center text-white md:text-4xl lg:text-5xl">
              Testimonials:
            </h1>
          </FadeUp>
          <div className="flex self-center w-24 border-t-2 border-highlight1"></div>
          <FadeIn>
            <blockquote className="mt-8">
              <div className="max-w-3xl mx-auto font-sans text-xl leading-relaxed text-center text-white md:text-2xl ">
                <p className="pb-8">
                  Social proof works by tapping into the basic human instinct to
                  follow the actions of others, building trust and credibility,
                  and lowering barriers to making purchases.
                </p>
                <em>
                  &ldquo;The secret of change is to focus all your energy not on
                  fighting the old but on building the new.&rdquo;
                </em>
              </div>

              <footer className="mt-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center mt-3 text-center">
                    <p className="font-sans text-xl font-medium text-white">
                      Socrates
                    </p>

                    <p className="font-sans text-xl font-medium text-neutral-400">
                      Father of western philosophy
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
