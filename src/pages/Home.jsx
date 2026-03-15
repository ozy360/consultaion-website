import WhoWeAreComponent from "../components/who";
import HowWeCreateValueComponent from "../components/value";
import IndustriesComponent from "../components/industries";
import DifferenceComponent from "../components/difference";
import HowWeWorkComponent from "../components/work";
import HeroComponent from "../components/hero";
import BannerComponent from "./banner";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <WhoWeAreComponent />
      <HowWeCreateValueComponent />
      <HowWeWorkComponent />
      <DifferenceComponent />
      <IndustriesComponent />
      <BannerComponent />
    </div>
  );
}
