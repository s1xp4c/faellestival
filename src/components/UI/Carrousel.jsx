import React, { useContext, useState } from "react";
import { BandsContext } from "../../Contexts/BandsContext";
import ArtistCard from "./ArtistCard";
import ScrollElm from "../sections/ScrollElm";

function Carrousel(props) {
  const [pic1, setPick1] = useState(0);
  const [pic2, setPick2] = useState(1);
  const [pic3, setPick3] = useState(2);
  const [pic4, setPick4] = useState(3);
  

  const artists = useContext(BandsContext);

  function showNext() {
    console.log("showNext");
    setPick1((old) => old + 4);
    setPick2((old) => old + 4);
    setPick3((old) => old + 4);
    setPick4((old) => old + 4);
  }

  function showPrev() {
    console.log("showPrev");
    setPick1((old) => old - 4);
    setPick2((old) => old - 4);
    setPick3((old) => old - 4);
    setPick4((old) => old - 4);

  }

  return (
    <div className="carrousel">
      <ScrollElm className="scrollElm prev" action={showPrev} />
      <article className="artistGrid">
        <ArtistCard
          key={pic1}
          id={artists[pic1].name}
          content={artists[pic1].name}
          className="artistCard"
          img={artists[pic1].logo}
          action={() => {
            props.setPickedId(artists[pic1]);
            console.log("gotoArtist", props.pickedId);
            props.setShowFestLandPage(false);
            props.setShowArtistPage(true);
          }}
        />

        <ArtistCard
          key={pic2}
          id={artists[pic2].name}
          content={artists[pic2].name}
          className="artistCard"
          img={artists[pic2].logo}
          action={() => {
            props.setPickedId(artists[pic2]);
            console.log("gotoArtist", props.pickedId);
            props.setShowFestLandPage(false);
            props.setShowArtistPage(true);
          }}
        />

        <ArtistCard
          key={pic3}
          id={artists[pic3].name}
          content={artists[pic3].name}
          className="artistCard"
          img={artists[pic3].logo}
          action={() => {
            props.setPickedId(artists[pic3]);
            console.log("gotoArtist", props.pickedId);
            props.setShowFestLandPage(false);
            props.setShowArtistPage(true);
          }}
        />

        <ArtistCard
          key={pic4}
          id={artists[pic4].name}
          content={artists[pic4].name}
          className="artistCard"
          img={artists[pic4].logo}
          action={() => {
            props.setPickedId(artists[pic4]);
            console.log("gotoArtist", props.pickedId);
            props.setShowFestLandPage(false);
            props.setShowArtistPage(true);
          }}
        />
      </article>
      <ScrollElm className="scrollElm next" action={showNext} />
    </div>
  );
}

export default Carrousel;
