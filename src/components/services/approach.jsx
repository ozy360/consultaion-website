import ContainComponent from "../contain";
import {
  ArrowsClockwiseIcon,
  BuildingsIcon,
  CpuIcon,
  SelectionBackgroundIcon,
} from "@phosphor-icons/react";

const SERVICES_DATA = {
  subtitle: "Our Approach",
  title:
    "Each service is designed to deliver measurable results, not just recommendations.",
  services: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      alt: "Strategy meeting",
    },
    {
      type: "text",
      icon: <SelectionBackgroundIcon size={24} weight="regular" />,
      title: "Strategy",
      description:
        "Define where you can win and how to get there. We help you clarify market positioning, identify growth opportunities, and build roadmaps that translate vision into executable plans with clear ROI.",
    },
    {
      type: "text",
      icon: <BuildingsIcon size={24} weight="regular" />,
      title: "Operations",
      description:
        "Improve what you do and how you do it better. We optimize processes, eliminate inefficiencies, and design operating models that reduce costs while improving quality and customer satisfaction.",
    },
    {
      type: "text",
      icon: <CpuIcon size={24} weight="regular" />,
      title: "Digital Transformation",
      description:
        "Modernize your tech stack and business model. We help you leverage technology to automate processes, enhance customer experiences, and create new revenue streams in digital-first markets.",
    },
    {
      type: "text",
      icon: <ArrowsClockwiseIcon size={24} weight="regular" />,
      title: "Change Management",
      description:
        "Get your organization to move as one. We guide leadership teams through transition, build stakeholder alignment, and create adoption strategies that minimize resistance and accelerate results.",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      alt: "Team collaboration",
    },
  ],
};

export default function ApproachComponent() {
  return (
    <section className="bg-primary text-white">
      <ContainComponent>
        {/* Header */}
        <div className="max-w-4xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-gray-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
              {SERVICES_DATA.subtitle}
            </span>
          </div>

          <h2 className="title">{SERVICES_DATA.title}</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.services.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden min-h-[350px] flex flex-col justify-between ${
                item.type === "text" ? "bg-black/20 p-8 group" : ""
              }`}
            >
              {item.type === "text" ? (
                <>
                  <div className="w-12 h-12 rounded-full bg-[#a3b8b8]/20 flex items-center justify-center mb-8 text-[#a3b8b8] group-hover:bg-[#a3b8b8] group-hover:text-[#1e3a3a] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-4 text-neutral">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed lg:text-sm">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              )}
            </div>
          ))}
        </div>
      </ContainComponent>
    </section>
  );
}
