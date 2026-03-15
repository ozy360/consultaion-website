import ContainComponent from "../contain";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

const COMPARISON_DATA = {
  subtitle: "Our Advantage",
  title: "How we're different",
  competitors: {
    label: "Everyone else",
    points: [
      "Junior consultants learning on your time",
      "Recommendations that never get implemented",
      "Generic frameworks copied from textbooks",
      "Disappear after delivering the final deck",
      "Bill by the hour with no accountability",
    ],
  },
  companyname: {
    label: "Companyname",
    points: [
      "Senior practitioners leading every engagement",
      "We stay through implementation and results",
      "Custom strategies built for your reality",
      "Partnership that extends beyond project timelines",
      "Fixed pricing tied to measurable outcomes",
    ],
  },
};

export default function DifferentComponent() {
  return (
    <section className="bg-secondary text-white">
      <ContainComponent>
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#a3b8b8]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#a3b8b8] font-medium">
              {COMPARISON_DATA.subtitle}
            </span>
          </div>
          <h2 className="title text-neutral">{COMPARISON_DATA.title}</h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* ── Competitors Column ── */}
          <div className="flex flex-col lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#a3b8b8] mb-3">
                The Standard
              </span>
              <p className="text-xl font-semibold text-white">
                {COMPARISON_DATA.competitors.label}
              </p>
            </div>

            {/* Points */}
            <div className="flex flex-col gap-7">
              {COMPARISON_DATA.competitors.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-red-400/90 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon
                      size={12}
                      weight="bold"
                      className="text-red-400/90"
                    />
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed line-through decoration-white/60">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── companyname Column ── */}
          <div className="flex flex-col lg:pl-16">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#a3b8b8] mb-3">
                The Companyname
              </span>
              <p className="text-xl font-semibold text-white">
                {COMPARISON_DATA.companyname.label}
              </p>
            </div>

            {/* Points */}
            <div className="flex flex-col gap-7">
              {COMPARISON_DATA.companyname.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4 group/item">
                  <div className="w-6 h-6 rounded-full border border-[#a3b8b8] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                    <CheckIcon
                      size={12}
                      weight="bold"
                      className="text-[#a3b8b8] transition-colors duration-300"
                    />
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainComponent>
    </section>
  );
}
