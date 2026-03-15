import ContainComponent from "../contain";
import {
  TargetIcon,
  ChatCenteredTextIcon,
  WrenchIcon,
  LightbulbIcon,
  HandshakeIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react";

const VALUES_DATA = {
  subtitle: "Our Values",
  title: "What drives us",
  description:
    "Our values aren't wall art, they're the principles that guide every client engagement, hiring decision, and strategic choice we make as a firm.",
  images: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  ],
  principles: [
    {
      icon: <TargetIcon size={24} weight="regular" />,
      title: "Client outcomes first",
      text: "We measure success by client results, not billable hours. Every recommendation must pass one test: will this create measurable value for the business?",
    },
    {
      icon: <ChatCenteredTextIcon size={24} weight="regular" />,
      title: "Intellectual honesty",
      text: "We tell you what you need to hear, not what you want to hear. Tough conversations early prevent costly mistakes later.",
    },
    {
      icon: <WrenchIcon size={24} weight="regular" />,
      title: "Practical over theoretical",
      text: "Business strategy must survive contact with reality. We design solutions your teams can actually execute with the resources you actually have.",
    },
    {
      icon: <LightbulbIcon size={24} weight="regular" />,
      title: "Strategic excellence",
      text: "Every engagement demands our best thinking. We bring frameworks refined over decades and customize them to your specific context and constraints.",
    },
    {
      icon: <HandshakeIcon size={24} weight="regular" />,
      title: "Collaborative mindset",
      text: "Your team knows your business better than we ever will. Our job is to bring outside perspective, proven methods, and capacity to accelerate what you already know needs doing.",
    },
    {
      icon: <TreeStructureIcon size={24} weight="regular" />,
      title: "Long-term partnerships",
      text: "Quick wins matter, but sustainable advantage comes from building organizational capabilities that compound over years, not quarters.",
    },
  ],
};

export default function ValuesComponent() {
  return (
    <section className="bg-neutral">
      <ContainComponent>
        {/* Top Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-gray-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              {VALUES_DATA.subtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
            <h2 className="!text-left title text-[#1a2e35]">
              {VALUES_DATA.title}
            </h2>
            {/* <p className="text-gray-600 leading-relaxed lg:max-w-md lg:ml-auto">
              {VALUES_DATA.description}
            </p> */}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-24">
          {VALUES_DATA.images.map((src, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden lg:h-[440px] ${
                index === 0 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <img
                src={src}
                alt={`Value visual ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Principles Grid (The Bottom Part) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {VALUES_DATA.principles.map((item, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#5c7a7a] flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-[#1a2e35]">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContainComponent>
    </section>
  );
}
