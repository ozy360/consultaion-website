import CaseStudiesContainComponent from "../components/casestudies/casestudiescontain";

export default function RegionalBankPage() {
  const data = {
    hero: {
      eyebrow: "case study",
      title: "Repositioning a Regional Bank for Digital-First Growth",
      stats: [
        { label: "Company", value: "Velocity Bank" },
        { label: "Industry", value: "Financial Services" },
        {
          label: "Challenge",
          value: "Declining market share among customers under 45",
        },
        {
          label: "Impact",
          value: "Increased digital acquisition by 240%",
        },
      ],
      heroImage: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        alt: "Team collaborating",
      },
      summary:
        "A mid-sized regional bank with 50 years of history faced a critical challenge: younger customers were choosing digital-first competitors, and traditional branch traffic was declining 15% year-over-year. Leadership knew transformation was necessary but lacked clarity on where to start. We partnered with their executive team to diagnose the core issues, reimagine their value proposition for digital-native customers, and execute a comprehensive repositioning that preserved their community banking strengths while building modern capabilities.",
    },
    challenge: {
      eyebrow: "The Challenge",
      title: "The critical moment",
      intro:
        "The bank's brand positioning hadn't evolved in decades. While they prided themselves on personal service and community relationships, these messages didn't resonate with customers who expected seamless mobile experiences, instant approvals, and digital-first engagement.",
      items: [
        {
          heading: "Disconnected from digital expectations",
          body: "Market research revealed a critical insight: younger customers weren't rejecting community banking values—they simply couldn't access them through the channels they preferred. The bank's digital experience lagged competitors by years, creating friction at every touchpoint from account opening to loan applications.",
        },
        {
          heading: "A strategic dilemma",
          body: "Leadership faced a choice: invest heavily in digital transformation without clear ROI projections, or maintain the status quo and watch market share erode. They needed an integrated strategy that balanced technology investment with brand evolution and organizational change management.",
        },
      ],
      outro:
        "Without a clear path forward, continuing to invest in the existing model would only accelerate the erosion of their customer base.",
      midImage: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        alt: "Strategic planning session",
      },
    },
    solution: {
      eyebrow: "The Solution",
      title: "How we moved forward",
      intro:
        "We began with comprehensive market analysis and customer research, identifying specific friction points in the digital journey and opportunities where the bank's community focus could differentiate even in digital channels. This research informed a three-phase transformation strategy.",
      items: [
        {
          heading: "Phase one: Quick wins",
          body: "We focused on redesigning the mobile app, streamlining account opening, and implementing instant loan pre-approvals. These improvements demonstrated momentum and built internal confidence while we tackled deeper organizational changes.",
        },
        {
          heading: "Phase two: Brand repositioning",
          body: "We repositioned the bank as 'community banking, reimagined for how you live today'—preserving their heritage while signaling modern capability. New marketing campaigns showcased digital features alongside the personal service that made them different.",
        },
        {
          heading: "Phase three: People & systems",
          body: "We trained staff on digital tools and created hybrid service models that blended technology with human expertise, shifting the organization from a branch-first to a digital-first operating model.",
        },
      ],
    },
    results: {
      eyebrow: "Results",
      quote:
        "This wasn't just a rebrand or a tech upgrade—it was a complete rethinking of how we serve customers. The team helped us see that digital transformation didn't mean losing our soul. It meant making our values accessible in ways that actually matter to modern customers.",
      author: {
        name: "Sarah Martinez",
        role: "Chief Strategy Officer, Velocity Bank",
        avatar: {
          src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
          alt: "Sarah Martinez",
        },
      },
      stats: [
        { value: "50%", label: "Reduction in time to open accounts" },
        { value: "30%", label: "Increase in mobile app usage" },
        { value: "90%", label: "Customer brand awareness improvement" },
      ],
    },
  };
  return <CaseStudiesContainComponent data={data} />;
}
