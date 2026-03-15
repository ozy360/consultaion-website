import {
  ArrowsClockwiseIcon,
  BuildingsIcon,
  CpuIcon,
  SelectionBackgroundIcon,
} from "@phosphor-icons/react";

import ContainComponent from "./contain";

export default function HowWeCreateValueComponent() {
  const valueData = [
    {
      title: "Strategy",
      description:
        "Define where you can win and how to get there. We help you clarify market positioning, identify growth opportunities, and build roadmaps that translate vision into executable plans with clear ROI.",
      icon: <SelectionBackgroundIcon size={24} weight="regular" />,
    },
    {
      title: "Digital Transformation",
      description:
        "Modernize your tech stack and business model. We help you leverage technology to automate processes, enhance customer experiences, and create new revenue streams in digital-first markets.",
      icon: <CpuIcon size={24} weight="regular" />,
    },
    {
      title: "Operations",
      description:
        "Improve what you do and how you do it better. We optimize processes, eliminate inefficiencies, and design operating models that reduce costs while improving quality and customer satisfaction.",
      icon: <BuildingsIcon size={24} weight="regular" />,
    },
    {
      title: "Change Management",
      description:
        "Get your organization to move as one. We guide leadership teams through transition, build stakeholder alignment, and create adoption strategies that minimize resistance and accelerate results.",
      icon: <ArrowsClockwiseIcon size={24} weight="regular" />,
    },
  ];

  return (
    <div className="bg-primary">
      <ContainComponent>
        <div className="flex items-center gap-4 text-neutral">
          <div className="flex-1 h-[1px] bg-white/10" />
          <h2 className="title px-4">How we create value</h2>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden lg:flex-1">
              <img
                src="/value.avif"
                className="object-cover h-full w-full"
                alt="Value"
              />
            </div>
            <div className="hidden lg:block lg:flex-1" />
          </div>
          {valueData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden min-h-[350px] flex flex-col justify-between bg-black/20 p-8 group"
            >
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
            </div>
          ))}
        </div>
      </ContainComponent>
    </div>
  );
}
