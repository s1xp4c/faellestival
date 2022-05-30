import React, { useContext } from "react";
import ArtistBio from "./UI/ArtistBio";
import ArtistsSection from "./sections/ArtistsSection";
import ArtistHeader from "./sections/ArtistHeader";

function ArtistPage(props) {
  // const bands = useContext(BandsContext);
  console.log("artist", props.pickedId);

  return (
    <>
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
