import Navbar from "../components/Navbar";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import GlobalReach from "../components/about/GlobalReach";
import CallToAction from "../components/about/CallToAction";
import Newsletter from "../components/about/Newsletter";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="space-y-20 pb-24">
        <AboutHero />
        <MissionVision />
        <GlobalReach />
        <CallToAction />
        <Newsletter />
      </main>
    </>
  );
}
