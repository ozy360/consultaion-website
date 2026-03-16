import ContainComponent from "./contain";
import { ArrowRightIcon } from "@phosphor-icons/react";

const DATA = {
  testimonials: [
    {
      quote:
        "They didn't just deliver a strategy, they helped us execute it. Within six months, we'd entered two new markets and doubled our enterprise sales pipeline. This team gets business, not just consulting.",
      name: "Sarah Mitchell",
      role: "Founder & CEO, Axiom Digital",
    },
    {
      quote:
        "What impressed me most was their ability to translate high-level strategy into action plans our teams could actually execute. No jargon, no theory, just practical guidance that moved the needle.",
      name: "Marcus Chen",
      role: "Chief Strategy Officer, Velocity Bank",
    },
  ],
  stats: [
    { value: "225%", label: "Average client revenue growth" },
    { value: "10x", label: "Return on consulting investment" },
  ],
};

export default function DifferenceComponent() {
  return (
    <section className="bg-primary text-white">
      <ContainComponent>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-[1px] bg-white/10" />
          <h2 className="title px-4">Making a difference</h2>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
          {/* Sarah Mitchell Testimonial - Wide */}
          <div className="md:col-span-8 bg-[#243c44] p-8 lg:p-12 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-[#2a464f] transition-colors">
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              "They didn't just deliver a strategy, they helped us execute it.
              Within six months, we'd entered two new markets and doubled our
              enterprise sales pipeline. This team gets business, not just
              consulting."
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-12 space-y-6 lg:space-y-0">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  alt="Sarah Mitchell"
                />
                <div>
                  <h4 className="font-semibold text-white">Sarah Mitchell</h4>
                  <p className="text-sm text-gray-400">
                    Founder & CEO, Axiom Digital
                  </p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#1a2e35] transition-all">
                <ArrowRightIcon size={20} />
              </div>
            </div>
          </div>

          {/* Revenue Growth Stat - Tall */}
          <div className="md:col-span-4 bg-[#2e4a52] p-8 lg:p-12 rounded-xl flex flex-col justify-end">
            <div className="mb-4">
              <span className="text-6xl lg:text-8xl font-light">225%</span>
              <p className="text-gray-400 uppercase tracking-widest text-xs mt-6">
                Average client revenue growth
              </p>
            </div>
          </div>

          {/* ROI Stat */}
          <div className="md:col-span-4 bg-[#2e4a52] p-8 lg:p-12 rounded-xl flex flex-col justify-end">
            <div className="mb-4">
              <span className="text-6xl lg:text-8xl font-light">10x</span>
              <p className="text-gray-400 uppercase tracking-widest text-xs mt-6">
                Return on consulting investment
              </p>
            </div>
          </div>

          {/* Marcus Chen Testimonial - Wide */}
          <div className="md:col-span-8 bg-[#243c44] p-8 lg:p-12 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-[#2a464f] transition-colors">
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              "What impressed me most was their ability to translate high-level
              strategy into action plans our teams could actually execute. No
              jargon, no theory, just practical guidance that moved the needle."
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-12 space-y-6 lg:space-y-0">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  alt="Marcus Chen"
                />
                <div>
                  <h4 className="font-semibold text-white">Marcus Chen</h4>
                  <p className="text-sm text-gray-400">
                    Chief Strategy Officer, Velocity Bank
                  </p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#1a2e35] transition-all">
                <ArrowRightIcon size={20} />
              </div>
            </div>
          </div>
        </div>
      </ContainComponent>
    </section>
  );
}
