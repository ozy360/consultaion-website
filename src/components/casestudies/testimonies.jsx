import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import ContainComponent from "../contain";

const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    quote:
      "We came in thinking we just needed a new brand. What we got was a complete strategic overhaul that repositioned us for the next decade of growth. The results speak for themselves.",
    author: "James Wilson",
    role: "CEO, TechFlow",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote:
      "The team cut through the complexity to help us focus on what actually matters. No fluff, just clear frameworks and disciplined execution. Our board couldn't be happier with the transformation.",
    author: "Sarah Jenkins",
    role: "Director of Operations, GlobalLogix",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    quote:
      "We believe in turning ideas into strategy into reality. Working directly with their senior team gave us confidence we were making the right moves at the right time.",
    author: "Michael Chen",
    role: "Founder, Apex Solutions",
  },
];

export default function TestimonialSlider() {
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
    <section className="bg-neutral">
      <ContainComponent>
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[1px] bg-gray-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
            Testimonials
          </span>
        </div>
        {/* Header with Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <h2 className="title text-primary max-w-2xl">
            We're here to support every step of the journey
          </h2>
          <div className="text-primary flex gap-3 mt-6 lg:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </div>

        {/* Slider Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[450px] lg:min-w-[500px] snap-start relative group rounded-2xl overflow-hidden aspect-[3/4]"
            >
              {/* Image with Dark Gradient Overlay */}
              <img
                src={item.image}
                alt={item.author}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e35] via-[#1a2e35]/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                {/* <div className="w-12 h-[2px] bg-accent mb-6" /> */}
                <p className="text-white leading-relaxed mb-8 opacity-90">
                  "{item.quote}"
                </p>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg">
                    {item.author}
                  </span>
                  <span className="text-gray-300 text-sm uppercase tracking-widest">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainComponent>
    </section>
  );
}
