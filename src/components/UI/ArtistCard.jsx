import React from "react";

function ArtistCard(props) {
  let imgPath;
  let img = props.img;
  img.startsWith("http")
    ? (imgPath = props.img)
    : (imgPath = "https://a3m-festival.herokuapp.com/logos/" + img);
  console.log(imgPath);

  //         let root = document.documentElement;
  //   root.style.setProperty('--img', imgPath);

  return (
      <button className={props.className} onClick={props.action}>
        {imgPath.endsWith("svg") ? <img className="artistPng" src={imgPath} alt={props.content} /> : <img className="artistImg" src={imgPath} alt={props.content} />}
      {/* <img className="artistImg" src={imgPath} alt={props.content} /> */}
        <h3> {props.content}</h3>
      </button>
  );
}

export default ArtistCard;
