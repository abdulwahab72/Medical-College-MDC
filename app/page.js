import Fifth_hs from "@/components/Home-Components/Fifth_hs";
import Forth from "@/components/Home-Components/Forth";
import HeroBanner from "@/components/Home-Components/HeroBanner";
import Six_H from "@/components/Home-Components/Six_H";
import ThirdH_com from "@/components/Home-Components/ProgramCardSlider";
import WhoWeAre from "@/components/Home-Components/WhoWeAre";
import SecondCOMPUNENT from "@/components/Home-Components/SecondCOMPUNENT";

export default function Home() {
  return (
    <main className=" relative">
      <HeroBanner />
      <SecondCOMPUNENT />
      <WhoWeAre />
      <ThirdH_com />
      <Forth />
      <Fifth_hs />
      <Six_H />
    </main>
  );
}
