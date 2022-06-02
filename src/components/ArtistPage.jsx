import React, { useContext } from "react";
import ArtistBio from "./UI/ArtistBio";
import ArtistsSection from "./sections/ArtistsSection";
import ArtistHeader from "./sections/ArtistHeader";
import Breadcrumbs from "./UI/Breadcrumbs";

function ArtistPage(props) {
  function goToFestPage() {
    props.setShowArtistPage(false);
    props.setShowFestLandPage(true);
    window.location = "#";
  }

  return (
    <>
      <Breadcrumbs
        className="gobackProgram"
        bcReg="Dest App"
        {...props}
        action={goToFestPage}
      />
      <ArtistHeader {...props} />
      <ArtistBio {...props} />
      <ArtistsSection
        // id="carousel-title"
        className="artistSection carousel-title"
        content="See More Artists"
        {...props}
      />
    </>
  );
}

export default ArtistPage;
