import ContainComponent from "../contain";

const STORY_DATA = {
  subtitle: "About us",
  title: "Our story",
  mainConviction:
    "Great businesses are built on sound strategy, disciplined execution, and a commitment to results.",
  paragraph:
    "We partner with ambitious leaders to navigate market disruption, building organizations designed to win beyond just incremental gains. We combine rigorous analysis with hands-on implementation, ensuring our strategies are executable and our results are measurable.",
  imageUrl:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

export default function OurStoryComponent() {
  return (
    <section className="bg-neutral">
      <ContainComponent>
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 mt-18">
          {/* Left Column: Titles */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gray-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                {STORY_DATA.subtitle}
              </span>
            </div>
            <h2 className="title text-primary">{STORY_DATA.title}</h2>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-medium text-primary leading-tight mb-8">
              {STORY_DATA.mainConviction}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {STORY_DATA.paragraph}
            </p>
          </div>
        </div>

        {/* Full-width Image */}
        <div className="w-full rounded-2xl overflow-hidden aspect-[21/9]">
          <img
            src={STORY_DATA.imageUrl}
            alt="Our team collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </ContainComponent>
    </section>
  );
}
