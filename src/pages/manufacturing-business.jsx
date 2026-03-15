import CaseStudiesContainComponent from "../components/casestudies/casestudiescontain";

export default function ManufacturingBusinessPage() {
  const data = {
    hero: {
      eyebrow: "case study",
      title: "Turning Around a Manufacturing Business Losing $2M Annually",
      stats: [
        { label: "Company", value: "Pulse Life" },
        { label: "Industry", value: "Industrial Manufacturing" },
        {
          label: "Challenge",
          value: "Operational inefficiency driving sustained losses",
        },
        {
          label: "Impact",
          value: "From -$2M loss to $3.5M profit",
        },
      ],
      heroImage: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        alt: "Team collaborating",
      },
      summary:
        "A third-generation manufacturing company with 200 employees was bleeding cash. Despite strong demand for their products, operational inefficiencies had turned what should have been profitable growth into mounting losses. The board was considering a sale or shutdown within 18 months. We were brought in to assess whether the business could be saved. What we found was a fundamentally sound company drowning in complexity—dozens of low-margin product lines, chaotic production scheduling, and zero visibility into actual costs by product or customer.",
    },
    challenge: {
      eyebrow: "The Challenge",
      title: "Death by a thousand inefficiencies",
      intro:
        "The company had grown through acquisition, bolting on new product lines without integrating operations or rationalizing the portfolio. They were manufacturing 200+ SKUs across three facilities, many generating razor-thin margins that disappeared once overhead was properly allocated. Nobody could say with confidence which products or customers were actually profitable.",
      items: [
        {
          heading: "Production chaos",
          body: "Rush orders disrupted schedules daily. Setup times consumed 40% of available capacity because frequent changeovers between low-volume products created constant inefficiency. Quality issues and rework ate another 15% of production time. The team was working harder than ever while falling further behind.",
        },
        {
          heading: "Cuts without a cure",
          body: "Leadership had tried to cut their way to profitability through headcount reductions and deferred maintenance, which only accelerated the decline. Equipment breakdowns increased. Experienced workers left and weren't replaced. The problems were systemic, not budgetary—cost cuts without operational improvement were digging the hole deeper.",
        },
      ],
      outro:
        "The issues ran deeper than any budget line. Without addressing the root causes, every additional dollar of cost-cutting would only accelerate the business's decline.",
      midImage: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        alt: "Strategic planning session",
      },
    },
    solution: {
      eyebrow: "The Solution",
      title: "Rebuilding from the foundation up",
      intro:
        "We started with unforgiving analysis: activity-based costing that revealed true profitability by product and customer. The results were shocking—60% of their SKUs destroyed value when fully costed. The company was subsidizing unprofitable work with the margins from their best products. Armed with this clarity, we made hard decisions fast.",
      items: [
        {
          heading: "Portfolio rationalization",
          body: "We eliminated 120 SKUs over 90 days, exited relationships with unprofitable customers, and consolidated production into two facilities. This immediately freed capacity and reduced complexity across every function in the business.",
        },
        {
          heading: "Operational excellence",
          body: "We implemented lean manufacturing principles, redesigned production flows to minimize changeovers, and established preventive maintenance schedules that cut unplanned downtime by 75%.",
        },
        {
          heading: "Cultural transformation",
          body: "We worked with leadership to move from reactive firefighting to proactive management. New KPIs gave real-time visibility into profitability drivers. We rebuilt trust with the workforce by explaining the strategy, investing in training, and demonstrating that operational excellence protected their jobs better than the old chaos ever could.",
        },
      ],
    },
    results: {
      eyebrow: "Results",
      quote:
        "I didn't think we could be saved. We'd tried everything—cut costs, worked longer hours, took any order that came through the door. What we needed was someone to tell us the truth about what was broken and help us fix it systematically. They saved this company and 200 jobs.",
      author: {
        name: "Fliss Davis",
        role: "Head of Strategy, Pulse Life",
        avatar: {
          src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
          alt: "Fliss Davis",
        },
      },
      stats: [
        { value: "$5.5M", label: "Profit swing in 12 months" },
        { value: "75%", label: "Reduction in unplanned downtime" },
        { value: "40%", label: "Improvement in on-time delivery" },
      ],
    },
  };
  return <CaseStudiesContainComponent data={data} />;
}
