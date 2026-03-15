import { Link } from "react-router-dom";
import ContainComponent from "../components/contain";

const BANNER_DATA = {
  title: "Ready to accelerate your growth?",
  subtitle:
    "Let's discuss where your business is today, where you want to be, and the strategic moves that will get you there faster. No sales pitch, just an honest conversation about what's possible.",
  imageUrl:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
};

export default function BannerComponent() {
  return (
    <section className="relative bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BANNER_DATA.imageUrl}
          alt="Banner background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ContainComponent>
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="title leading-tight mb-4">{BANNER_DATA.title}</h2>
            <p className="ttext-gray-300 mb-8">{BANNER_DATA.subtitle}</p>
            <Link to="/contact" className="btn btn-main">
              Start a Conversation
            </Link>
          </div>
        </ContainComponent>
      </div>
    </section>
  );
}
