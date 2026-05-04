import FeatureAndTiles from "@/components/FeatureAndTiles";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee copy";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Marquee/>
      <Hero/>
      <FeatureAndTiles/>
    </div>
  );
}
