import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import MissionSection from "./MissionSection/MissionSection";
import InnovationSection from "./InnovationSection/InnovationSection";
import AllWorldSection from "./AllWorldSection/AllWorldSection";
import StoresSection from "./StoresSection/StoresSection";

export default function HomePage() {
  return (
    <div>
      <AboutSection />
      <MissionSection />
      <InnovationSection />
      <AllWorldSection />
      <StoresSection />
    </div>
  );
}
