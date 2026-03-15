import ContainComponent from "../contain";

const RESULTS_DATA = {
  subtitle: "Results",
  title:
    "Client outcomes tell the real story, not promises, but proven track records of businesses transformed through disciplined strategy and flawless execution.",
  stats: [
    {
      value: "68%",
      label: "Productivity gains achieved",
    },
    {
      value: "300+",
      label: "Companies transformed",
    },
    {
      value: "98%",
      label: "Would recommend us",
    },
  ],
};

export default function ResultsComponent() {
  return (
    <section className="bg-neutral">
      <ContainComponent>
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-32">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gray-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                {RESULTS_DATA.subtitle}
              </span>
            </div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="title text-primary leading-tight lg:max-w-4xl">
              {RESULTS_DATA.title}
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {RESULTS_DATA.stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 py-8 md:py-0 md:px-12 ${
                index !== 0 ? "md:border-l border-gray-300" : "md:pl-0"
              }`}
            >
              <span className="text-6xl lg:text-8xl font-light text-[#94a3a3] tracking-tighter tabular-nums">
                {stat.value}
              </span>
              <p className="text-gray-600 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ContainComponent>
    </section>
  );
}
