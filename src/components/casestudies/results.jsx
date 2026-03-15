import { ArrowRightIcon } from "@phosphor-icons/react";
import ContainComponent from "../contain";
import { Link } from "react-router-dom";

const CASE_STUDIES = [
  {
    title: "Scaling a SaaS Platform from $5M to $50M ARR",
    description:
      "A SaaS company reached $5M ARR then hit a wall. Sales cycles lengthened, churn increased, and the team couldn't agree on the path forward. We helped them refocus on their ideal customer, rebuild operations for scale, and achieve 10x revenue growth in 18 months.",
    stat: "10x",
    statLabel: "ARR growth in 18 months",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    link: "/case-studies/saas-platform",
  },
  {
    title: "Repositioning a Regional Bank for Digital-First Growth",
    description:
      "See how we helped a 50-year-old regional bank reposition for digital growth, increasing digital acquisition by 240% while preserving their community banking values. A complete brand and technology transformation.",
    stat: "90%",
    statLabel: "Brand awareness improvement",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1000&q=80",
    link: "/case-studies/regional-bank",
  },
  {
    title: "Turning Around a Business Losing $2M Annually",
    description:
      "A 200-person manufacturing company was losing $2M annually despite strong demand. We rationalized the business, implemented lean operations, and delivered a $5.5M profit swing in 12 months.",
    stat: "$5.5M",
    statLabel: "Profit swing in 12 months",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    link: "/case-studies/manufacturing-business",
  },
];

export default function ResultsComponent() {
  return (
    <section className="bg-primary text-white">
      <ContainComponent>
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-gray-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              Proven Results
            </span>
          </div>
          <h2 className="title max-w-3xl leading-tight">
            Each service is designed to deliver measurable results, not just
            recommendations.
          </h2>
        </div>

        <div className="flex flex-col gap-20 lg:gap-32">
          {CASE_STUDIES.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side - Stays 1st on mobile, alternates on desktop */}
              <div
                className={`lg:col-span-6 overflow-hidden rounded-2xl aspect-video lg:aspect-square ${
                  index % 2 !== 0 ? "lg:order-last" : ""
                }`}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-6 flex flex-col gap-6 lg:px-12">
                <h3 className="titletwo">{study.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {study.description}
                </p>

                {/* Big Stat Block */}
                <div className="py-8 border-y border-white/10 my-4 flex items-center gap-6">
                  <span className="text-5xl lg:text-6xl font-light text-white">
                    {study.stat}
                  </span>
                  <span className="text-sm uppercase tracking-widest text-gray-400 max-w-[150px]">
                    {study.statLabel}
                  </span>
                </div>

                <Link to={study.link}>
                  <button className="flex items-center gap-3 text-primary font-medium group">
                    <span className="cursor-pointer hover:text-primary hover:bg-neutral text-neutral border border-neutral p-4 rounded-full group-hover:bg-transparent transition-colors">
                      <ArrowRightIcon size={20} />
                    </span>
                    <span className="border-b border-transparent text-neutral text-sm">
                      See case study
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContainComponent>
    </section>
  );
}
