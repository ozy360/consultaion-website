import { useState } from "react";
import ContainComponent from "./contain";

const tabs = [
  {
    label: "Define the Challenge",
    heading: "Every transformation begins with truth.",
    body: "We diagnose your business deeply—your market position, competitive pressures, and growth barriers. Through stakeholder interviews and market analysis, we identify the leverage points that will drive the most meaningful results for your organization.",
    cta: "Find out more by getting in touch and booking onto a free consultation.",
  },
  {
    label: "Build the Strategy",
    heading: "Strategy that shapes the future.",
    body: "We co-create a roadmap tailored to your unique context—aligning leadership, resources, and initiatives around what matters most. Our frameworks are rigorous, but always grounded in your reality.",
    cta: "Find out more by getting in touch and booking onto a free consultation.",
  },
  {
    label: "Drive Results",
    heading: "Execution is where strategy lives or dies.",
    body: "We work alongside your team to implement change with precision and speed. From quick wins to long-term transformation, we keep momentum high and obstacles low.",
    cta: "Find out more by getting in touch and booking onto a free consultation.",
  },
  {
    label: "Sustain Momentum",
    heading: "Build the capability to keep growing.",
    body: "Lasting change requires more than a project. We embed new behaviours, systems, and mindsets so your organisation can continue to evolve long after our engagement ends.",
    cta: "Find out more by getting in touch and booking onto a free consultation.",
  },
];

// Replace this with your actual image or pass as a prop
const IMAGE_URL =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80";

export default function HowWeWorkComponent() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#fff]">
      <ContainComponent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Accordion Content */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-gray-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                How we work
              </span>
            </div>

            <h2 className="title text-primary mb-8">
              Systematic transformation.
            </h2>

            <div className="flex flex-col border-t border-gray-200">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setActive(index)}
                    className="w-full text-left py-6 flex flex-col gap-4 focus:outline-none group"
                  >
                    <h3
                      className={`text-xl lg:text-2xl font-semibold transition-colors ${
                        active === index
                          ? "text-primary"
                          : "text-gray-300 group-hover:text-gray-500"
                      }`}
                    >
                      {tab.label}
                    </h3>

                    {/* Animated Description height */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        active === index
                          ? "max-h-[500px] opacity-100 mb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-4 text-gray-600 leading-relaxed lg:max-w-lg">
                        <p>
                          <span className="font-medium text-primary">
                            {tab.heading}
                          </span>{" "}
                          {tab.body}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="h-full">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[700px] sticky top-32">
              <img
                src={IMAGE_URL}
                alt="Team in a strategy session"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </ContainComponent>
    </section>
  );
}
