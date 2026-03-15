import ContainComponent from "./contain";
import { Link } from "react-router-dom";
import { CheckIcon } from "@phosphor-icons/react";

const features = [
  "Executive-level expertise",
  "Results-driven partnership",
  "Zero-fluff approach",
];

export default function HeroComponent() {
  const HERO_DATA = {
    subtitle: "Strategy & Execution",
    title:
      "Strategic consulting built for businesses that refuse to settle for average",
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  };
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_DATA.bgImage}
          alt="Modern architecture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-secondary/4" />
      </div>

      <div className="relative z-10 w-full">
        <ContainComponent>
          <div className="max-w-3xl text-left mt-18">
            <div className="flex items-center justify-start gap-3 mb-8">
              <span className="w-6 h-[1px] bg-gray-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
                {HERO_DATA.subtitle}
              </span>
            </div>
            <h1 className="text-neutral title !text-4xl lg:!text-5xl !leading-tight">
              {HERO_DATA.title}
            </h1>
            <div className="flex flex-wrap justify-start gap-4 mt-10">
              <Link to="/contact" className="btn btn-main">
                Book a consultation
              </Link>
              <Link to="#services-list" className="btn btn-blur">
                View our services
              </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-3 mt-8">
              {features.map((feature, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <CheckIcon weight="bold" className="text-secondary" />
                  <span>{feature}</span>
                </p>
              ))}
            </div>
          </div>
        </ContainComponent>
      </div>
    </section>
  );
}
