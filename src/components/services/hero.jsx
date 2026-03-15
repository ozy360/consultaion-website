import { Link } from "react-router-dom";
import ContainComponent from "../contain";

const HERO_DATA = {
  subtitle: "Our Services",
  title: "Proven strategies that drive transformation and deliver results",
  description:
    "From strategic planning to operational execution, we deliver integrated solutions that address your most critical business challenges and unlock sustainable competitive advantage.",
  bgImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
};

export default function ServicesHero() {
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-18">
            {/* Left Side: Title */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-[1px] bg-gray-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
                  {HERO_DATA.subtitle}
                </span>
              </div>
              <h1 className="text-neutral title">{HERO_DATA.title}</h1>
            </div>

            {/* Right Side: Description & Buttons */}
            <div className="lg:col-span-6 lg:pl-12 flex flex-col gap-10">
              <p className="text-gray-300 leading-relaxed">
                {HERO_DATA.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-main">
                  Book a consultation
                </Link>
                <Link to="#services-list" className="btn btn-blur">
                  View our services
                </Link>
              </div>
            </div>
          </div>
        </ContainComponent>
      </div>
    </section>
  );
}
