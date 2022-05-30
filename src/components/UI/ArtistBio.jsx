import React from "react";

function ArtistBio(props) {
  return (
    <div className="artist-container">
      {/* <div className="artist-genre">Genre: {props.pickedId.genre}</div> */}
      <ul className="artist-list">
        <span className="members-name">Band Members:</span>
        {props.pickedId.members.map((artist) => (
          <li className="artist">{artist}</li>
        ))}
      </ul>
      <div className="artist-bio">
        <span className="bio">Bio: </span>
        <br></br>
        {props.pickedId.bio}
      </div>
      <div className="logo-credits">
        {props.pickedId.logoCredits && (
          <p>
            <span className="credits">Logo credits:</span> <br></br>{" "}
            {props.pickedId.logoCredits}
          </p>
        )}
      </div>
    </div>
  );
}

export default ArtistBio;
