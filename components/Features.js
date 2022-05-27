import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";

const features = [
  {
    name: "Vision",
    image: "/speedometer.png",
    description:
      "The ability to think about or plan the future with imagination or wisdom.",
  },
  {
    name: "Passion",
    image: "/resp-dev.png",
    description:
      "An intense desire or enthusiasm for what matters most to you.",
  },
  {
    name: "Diligence",
    image: "/bulb.png",
    description:
      "Constant and earnest effort to accomplish what is undertaken.",
  },
];

export default function Features() {
  return (
    <div id="Features" className="relative font-sans">
      <div className="h-32 bg-transparent"></div>
      <div className="max-w-md px-4 mx-auto -mt-48 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="">
          <div className="grid grid-cols-1 md:gap-10 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="py-6">
                <div className="flow-root px-10 pb-8 mx-6 bg-white shadow-lg h-60 shadow-neutral-800/50 lg:mx-0 md:mx-32 ">
                  <FadeUp>
                    <h3 className="pt-10 pb-2 text-3xl font-medium tracking-tight font-hand text-neutral-900 ">
                      {feature.name}
                    </h3>
                  </FadeUp>
                  <div className="flex w-16 mx-auto border-t-2 border-highlight1"></div>
                  <FadeIn>
                    <p className="mt-4 text-lg font-medium text-neutral-900">
                      {feature.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
