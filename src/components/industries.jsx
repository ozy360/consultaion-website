import { useRef } from "react";
import ContainComponent from "./contain";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

const INDUSTRIES = [
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    tags: ["Financial Services", "Wealth Management", "Insurance"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthcare", "Medical Devices", "Pharmaceuticals"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    tags: ["Manufacturing", "Supply Chain", "Distribution"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Technology", "SaaS", "Cloud Computing"],
  },
];

export default function IndustriesComponent() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral overflow-hidden">
      <ContainComponent>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="title text-primary">Industries we know inside out</h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-gray-300 rounded-full hover:bg-white transition-all active:scale-95"
            >
              <ArrowLeftIcon
                size={24}
                weight="regular"
                className="text-gray-700"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-gray-300 rounded-full hover:bg-white transition-all active:scale-95"
            >
              <ArrowRightIcon
                size={24}
                weight="regular"
                className="text-gray-700"
              />
            </button>
          </div>
        </div>

        {/* Dynamic Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-8 snap-x no-scrollbar"
        >
          {INDUSTRIES.map((industry, index) => (
            <div
              key={index}
              className="relative min-w-[85%] md:min-w-[45%] lg:min-w-[31.5%] aspect-[3/4] rounded-lg overflow-hidden snap-start shadow-sm"
            >
              {/* Image Layer */}
              <img
                src={industry.image}
                alt={`Industry ${index}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Subtle Overlay to make tags pop */}
              <div className="absolute inset-0 bg-black/5" />

              {/* Dynamic Tags */}
              <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2">
                {industry.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="bg-white px-4 py-2 text-[13px] font-semibold text-[#1a2e35] rounded-[4px] shadow-sm uppercase tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContainComponent>
    </div>
  );
}
