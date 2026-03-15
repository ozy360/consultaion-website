import ContainComponent from "../contain";

const TIMELINE_DATA = [
  {
    year: "2018",
    description:
      "Expanded our practice areas as clients demanded deeper capability in digital transformation and operational scale. Market shifts required new expertise—we built it.",
  },
  {
    year: "2021",
    description:
      "Solidified our position as a trusted advisor to high-growth companies, helping them navigate the unprecedented challenges of a rapidly changing global landscape. Our client-first approach led to record retention and growth.",
  },
  {
    year: "2024",
    description:
      "Reached a new pinnacle of global impact, integrating AI-driven strategy with human-led execution. Our commitment remains unchanged: delivering results that show up in revenue and margin.",
  },
];

export default function BuiltComponent() {
  return (
    <div className="bg-primary text-accent">
      <ContainComponent>
        {/* Headline */}
        <h2 className="title max-w-4xl mb-20 leading-tight text-neutral">
          Built through decades of solving the problems that keep executives
          awake at night.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Image */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Our team in action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:pl-12">
            {TIMELINE_DATA.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-5 items-start "
              >
                {/* Year */}
                <div className="text-4xl lg:text-5xl font-semibold text-[#a3b8b8]/40 tabular-nums sm:col-span-2">
                  {item.year}
                </div>

                {/* Text Content */}
                <div className="sm:col-span-3 text-sm font-medium">
                  <p className="text-gray-300 leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainComponent>
    </div>
  );
}
