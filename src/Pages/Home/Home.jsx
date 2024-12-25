import React from "react";
import Banner from "./Banner";
import FeaturedArtifacts from "./FeaturedArtifacts";
import ArtifactLegends from "./ArtifactLegends";
import ArtifactTimeline from "./ArtifactTimeline";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedArtifacts></FeaturedArtifacts>
      <ArtifactLegends></ArtifactLegends>
      <ArtifactTimeline></ArtifactTimeline>
    </div>
  );
};

export default Home;
