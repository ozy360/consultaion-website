import BuiltComponent from "../components/about/built";
import DifferentComponent from "../components/about/different";
import RecognitionComponent from "../components/about/recognition";
import OurStoryComponent from "../components/about/story";
import ValuesComponent from "../components/about/values";
import BannerComponent from "./banner";

export default function About() {
  return (
    <div>
      <OurStoryComponent />
      <BuiltComponent />
      <ValuesComponent />
      <DifferentComponent />
      <RecognitionComponent />
      <BannerComponent />
    </div>
  );
}
