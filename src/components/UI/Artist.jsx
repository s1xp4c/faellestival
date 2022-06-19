import React from "react";

function Artist(props, index) {
  return <span key={index}>{props.content} • </span>;
}

export default Artist;
