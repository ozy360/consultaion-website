import ContainComponent from "../contain";

const AWARDS_DATA = {
  subtitle: "Our Awards",
  title: "Recognition that validates our approach",
  items: [
    {
      year: "2025",
      title: "Best Consulting Firm for Mid-Market Growth",
      description:
        "Recognized for delivering enterprise-level strategic guidance with boutique service and measurable client outcomes across mid-market organizations.",
    },
    {
      year: "2024",
      title: "Top 10 Strategy Consultancies",
      description:
        "Named among the industry's leading firms for innovation in business strategy, operational excellence, and digital transformation advisory.",
    },
    {
      year: "2024",
      title: "Excellence in Client Partnership",
      description:
        "Honored for our collaborative approach and commitment to building long-term relationships that prioritize client success over billable hours.",
    },
  ],
};

export default function RecognitionComponent() {
  return (
    <section className="bg-primary text-neutral">
      <ContainComponent>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Title */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gray-500" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                {AWARDS_DATA.subtitle}
              </span>
            </div>
            <h2 className="title">{AWARDS_DATA.title}</h2>
          </div>

          {/* Right Column: Awards List */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {AWARDS_DATA.items.map((award, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col gap-4 py-10 border-t border-gray-700">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-[#a3b8b8] transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-lg font-medium text-gray-400 tabular-nums">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-xl">
                      {award.description}
                    </p>
                  </div>
                  {/* Final divider for the last item */}
                  {index === AWARDS_DATA.items.length - 1 && (
                    <div className="border-t border-gray-700 w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainComponent>
    </section>
  );
}
