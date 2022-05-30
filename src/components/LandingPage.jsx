import React from "react";
import HeroSection from "./sections/HeroSection";
import LineupSection from "./sections/LineupSection";
import BannerSection from "./sections/BannerSection";
import FaqSection from "./sections/FaqSection";

function LandingPage(props) {
  return (
    <main>
      <HeroSection className="heroSection" {...props} />
      <LineupSection className="lineupSection" {...props} />
      <BannerSection className="bannerSection" />
      <FaqSection className="faqSection" {...props} />
    </main>
  );
}

export default LandingPage;
