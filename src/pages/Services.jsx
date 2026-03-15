import ApproachComponent from "../components/services/approach";
import ResultsComponent from "../components/services/results";
import DifferentComponent from "../components/services/different";
import ServicesHero from "../components/services/hero";

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <ApproachComponent />
      <ResultsComponent />
      <DifferentComponent />
    </div>
  );
}
