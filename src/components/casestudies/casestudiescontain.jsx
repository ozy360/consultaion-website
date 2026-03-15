import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import ContainComponent from "../contain";

export default function CaseStudiesContainComponent({ data }) {
  const { hero, challenge, solution, results } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral">
        <ContainComponent>
          <div className="mb-6 lg:mb-12 mt-18">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-gray-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                {hero.eyebrow}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <h1 className="lg:col-span-6 title text-primary leading-[1.1]">
                {hero.title}
              </h1>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
                {hero.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#1a2e35]/40 font-bold">
                      {stat.label}
                    </span>
                    <span className="text-wrap text-base text-[#1a2e35] font-medium leading-snug">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src={hero.heroImage.src}
              alt={hero.heroImage.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-2xl lg:text-3xl text-primary pt-12 lg:pt-24">
            {hero.summary}
          </div>
        </ContainComponent>
      </section>

      {/* Challenge Section */}
      <section className="bg-primary">
        <ContainComponent>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 lg:gap-r-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-gray-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                  {challenge.eyebrow}
                </span>
              </div>
              <div className="title text-neutral">{challenge.title}</div>
            </div>
            <div className="lg:col-span-3 text-gray-300 flex flex-col gap-6 text-base">
              <p>{challenge.intro}</p>
              <ul className="space-y-6">
                {challenge.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircleIcon
                      size={20}
                      className="text-gray-300 mt-1 shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.heading}
                      </h4>
                      <p className="text-gray-300">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p>{challenge.outro}</p>
            </div>
          </div>
        </ContainComponent>
      </section>

      {/* Mid Image */}
      <section className="relative h-[600px]">
        <img
          src={challenge.midImage.src}
          alt={challenge.midImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Solution Section */}
      <section className="bg-primary">
        <ContainComponent>
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start">
            <div className="lg:col-span-2 lg:gap-r-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-gray-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                  {solution.eyebrow}
                </span>
              </div>
              <div className="title text-neutral">{solution.title}</div>
            </div>
            <div className="lg:col-span-3 text-gray-300 flex flex-col gap-6 text-base">
              <p>{solution.intro}</p>
              <ul className="space-y-6">
                {solution.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircleIcon
                      size={20}
                      className="text-gray-300 mt-1 shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.heading}
                      </h4>
                      <p className="text-gray-300">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContainComponent>
      </section>

      {/* Results Section */}
      <section className="bg-neutral">
        <ContainComponent>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-gray-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                  {results.eyebrow}
                </span>
              </div>
            </div>
            <div className="lg:col-span-10">
              <h2 className="title text-primary leading-tight lg:max-w-4xl">
                {results.quote}
              </h2>
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={results.author.avatar.src}
                  alt={results.author.avatar.alt}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="text-lg font-semibold text-primary">
                    {results.author.name}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {results.author.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {results.stats.map((stat, index) => (
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
    </>
  );
}
