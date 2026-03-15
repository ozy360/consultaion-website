import CaseStudiesContainComponent from "../components/casestudies/casestudiescontain";

export default function SassPlatformPage() {
  const data = {
    hero: {
      eyebrow: "case study",
      title: "Scaling a SaaS Platform from $5M to $50M ARR",
      stats: [
        { label: "Company", value: "Axiom Digital" },
        { label: "Industry", value: "B2B Technology" },
        { label: "Challenge", value: "Hitting growth plateau at $5M ARR" },
        {
          label: "Impact",
          value: "10x revenue growth and successful Series B raise",
        },
      ],
      heroImage: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        alt: "Team collaborating",
      },
      summary:
        "A fast-growing SaaS company had achieved product-market fit and reached $5M in annual recurring revenue, but growth had stalled. Sales cycles were lengthening, churn was creeping upward, and the founding team couldn't pinpoint why momentum had flatlined. We conducted a comprehensive business assessment that revealed the real issue: they'd outgrown their original go-to-market strategy. What worked to reach early adopters was failing with enterprise buyers, and operational chaos was undermining the customer experience.",
    },
    challenge: {
      eyebrow: "The Challenge",
      title: "What was holding them back",
      intro:
        "The company had built an exceptional product, but their go-to-market strategy and internal operations hadn't kept pace. This created several critical roadblocks:",
      items: [
        {
          heading: "Mismatched Go-to-Market",
          body: "Their sales approach targeted everyone, optimizing for no one. This left both enterprise buyers (needing robust support) and SMBs (wanting self-service) with unmet needs.",
        },
        {
          heading: "Operational Chaos",
          body: "Key functions were breaking down. Customer success was reactive, product development lacked focus, and finance couldn't produce reliable forecasts due to disconnected data.",
        },
        {
          heading: "Leadership Misalignment",
          body: "The executive team lacked a unified vision, with conflicting theories about the core problems and the right path forward.",
        },
      ],
      outro:
        "Without strategic clarity and operational discipline, simply investing more in growth would only have amplified these foundational problems.",
      midImage: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        alt: "Strategic planning session",
      },
    },
    solution: {
      eyebrow: "The Solution",
      title: "The transformation playbook",
      intro:
        "We started with a strategic diagnostic that revealed their ideal customer profile wasn't who they thought it was. We re-oriented everything around serving mid-market companies in specific verticals.",
      items: [
        {
          heading: "Go-to-Market Overhaul",
          body: "We rebuilt the sales process for mid-market complexity, created implementation playbooks that reduced time-to-value by 60%, and developed vertical-specific messaging.",
        },
        {
          heading: "Operational Alignment",
          body: "We implemented a strategic planning framework that aligned product, sales, and customer success, shifting the team from reactive firefighting to proactive value delivery.",
        },
        {
          heading: "Leadership & Systems",
          body: "We deployed new systems for real-time visibility and coached the executive team through the mindset shift from scrappy startup to scalable business leadership.",
        },
      ],
    },
    results: {
      eyebrow: "Results",
      quote:
        "They didn't just give us a plan—they worked alongside our team to rewire how we operate. The clarity we gained on our ideal customer changed everything. We stopped chasing every deal and started winning the right deals. That focus unlocked growth we didn't think was possible.",
      author: {
        name: "Sarah Jenkins",
        role: "COO, TechFlow",
        avatar: {
          src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
          alt: "Sarah Jenkins",
        },
      },
      stats: [
        { value: "10x", label: "ARR growth in 18 months" },
        { value: "60%", label: "Reduction in implementation time" },
        { value: "85%", label: "Net revenue retention rate" },
      ],
    },
  };

  return <CaseStudiesContainComponent data={data} />;
}
