import React from "react";
import Title from "../UI/Title";
import Carrousel from "../UI/Carrousel";

function ArtistsSection(props) {
  return (
    <section className={props.className}>
      <Title content={props.content} className={props.titleClassName} />
      <Carrousel {...props} />
    </section>
  );
}

export default ArtistsSection;
