import React from "react";
import MainTitle from "../UI/MainTitle";
import Breadcrumbs from "../UI/Breadcrumbs";

function ArtistHeader(props) {
  function goToMain() {
    console.log("gotomain");
    props.setShowArtistPage(false);
    props.setShowFestLandPage(true);
  }
  let imgPath;
  let img = props.pickedId.logo;
  img.startsWith("http")
    ? (imgPath = props.pickedId.logo)
    : (imgPath = "https://a3m-festival.herokuapp.com/logos/" + img);

  return (
    <section className="artistHeader">
      <Breadcrumbs bc="Main" className="breadCrumbs" action={goToMain} />
      {imgPath.endsWith("svg") ? (
        <img className="artistPng" src={imgPath} alt={props.pickedId.name} />
      ) : (
        <img className="artistImg" src={imgPath} alt={props.pickedId.name} />
      )}
      <MainTitle
        className="gradientTxt main-Title"
        content={props.pickedId.name}
      />
      <MainTitle className="artist-genre" content={props.pickedId.genre} />
    </section>
  );
}

export default ArtistHeader;
