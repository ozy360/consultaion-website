import { useState } from "react";
import ContainComponent from "../contain";

const DIFFERENTIATORS = [
  {
    id: "operator",
    title: "Operator Experience",
    description:
      "We've sat in your seat. Our team has held the roles you hold, CEO, COO, CFO. We've made payroll during cash crunches and navigated market crashes. This isn't theoretical for us. It's how we spent decades building our careers before consulting.",
  },
  {
    id: "outcome",
    title: "Outcome-Based Engagement",
    description:
      "Our success is tied directly to yours. We focus on measurable results—revenue growth, margin expansion, and operational efficiency—ensuring our work delivers a clear return on investment.",
  },
  {
    id: "capability",
    title: "Capability Building",
    description:
      "We don't just solve problems; we help you build the internal muscle to solve them yourselves next time. We leave your team stronger and more capable than when we arrived.",
  },
  {
    id: "senior",
    title: "Senior-Level Attention",
    description:
      "You won't be handed off to junior associates. Every project is led and executed by senior practitioners who bring years of battle-tested experience to the table.",
  },
];

export default function DifferentComponent() {
  const [activeTab, setActiveTab] = useState("operator");

  return (
    <section className="bg-[#fff]">
      <ContainComponent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Accordion Content */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-gray-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                What makes us different
              </span>
            </div>

            <h2 className="title text-primary mb-8">
              We challenge the traditional consulting model.
            </h2>

            <div className="flex flex-col border-t border-gray-200">
              {DIFFERENTIATORS.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className="w-full text-left py-6 flex flex-col gap-4 focus:outline-none group"
                  >
                    <h3
                      className={`text-xl lg:text-2xl font-semibold transition-colors ${
                        activeTab === item.id
                          ? "text-primary"
                          : "text-gray-300 group-hover:text-gray-500"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Animated Description height */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        activeTab === item.id
                          ? "max-h-96 opacity-100 mb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed lg:max-w-lg">
                        {item.description}
                      </p>
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
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80"
                alt="Strategic consulting session"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </ContainComponent>
    </section>
  );
}
