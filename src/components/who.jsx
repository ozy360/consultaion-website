import ContainComponent from "./contain";
export default function WhoWeAreComponent() {
  const data = [
    { text: "12+", subtext: "Years as market leaders" },
    {
      text: "700+",
      subtext: "Engagements delivered",
    },
  ];
  return (
    <div className="bg-neutral">
      <ContainComponent>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-gray-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
            Who we are
          </span>
        </div>
        <div className="title text-primary">
          We turn boardroom vision into marketplace reality through disciplined
          strategy, operational rigor, and leadership that drives real change.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0">
            {data.map((item, index) => (
              <div key={index}>
                <div className="text-5xl lg:text-6xl text-secondary font-medium">
                  {item.text}
                </div>
                <div className="text-primary font-medium">{item.subtext}</div>
              </div>
            ))}
          </div>
          <div className="text-primary mt-6 lg:mt-0">
            We don't believe in cookie-cutter solutions. Every business faces
            unique challenges that demand custom strategies, rigorous analysis,
            and hands-on partnership from discovery through execution.
          </div>
        </div>
      </ContainComponent>
    </div>
  );
}
