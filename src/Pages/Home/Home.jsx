import React from "react";
import Banner from "./Banner";
import FeaturedArtifacts from "./FeaturedArtifacts";
import ArtifactLegends from "./ArtifactLegends";
import ArtifactTimeline from "./ArtifactTimeline";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Artifacts | Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedArtifacts></FeaturedArtifacts>
      <ArtifactLegends></ArtifactLegends>
      <ArtifactTimeline></ArtifactTimeline>
    </div>
  );
};

export default Home;
