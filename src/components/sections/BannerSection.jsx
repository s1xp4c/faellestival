import React, { useState, useContext, useEffect } from "react";
import { BandsContext } from "../../Contexts/BandsContext";
import Banner from "../UI/Banner";
import Artist from "../UI/Artist";

function BannerSection(props) {
  const [currentSlide, setCurrentSlide] = useState(1);

  // useEffect(() => {
  //   const intervalBanner =
  //   setInterval(() => {

  //   setCount((count) => {
  //     console.log(count);
  //     return prevCount + 1;
  //   });
  // }, 4000);

  //   setCount((count) => {
  //     console.log(count);
  //     return prevCount + 1;
  //   });
  // }, 4000);

  //   if (count === limit) {
  //     clearInterval(intervalBanner);
  //     console.log('interval cleared!');
  //   }

  // }, []);
  useEffect(() => {
    setTimeout;
    if (currentSlide <= 4) {
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 4000);
    } else {
      setCurrentSlide(1);
    }
  }, [currentSlide]);

  const bandsData = useContext(BandsContext);

  let bandsGenre = bandsData.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue.genre) === -1) {
      previousValue.push(currentValue.genre);
    }
    return previousValue;
  }, []);

  const data = ["7 Days", "3 Stages", bandsData.length + " bands"];

  return (
    <section className={props.className}>
      {currentSlide === 1 && (
        <Banner conClassName="bannerCon" id="b1" className="banner1">
          {data[0]}
        </Banner>
      )}
      {currentSlide === 2 && (
        <Banner conClassName="bannerCon" className="gradientTxt">
          {data[1]}
        </Banner>
      )}
      {currentSlide === 3 && (
        <Banner conClassName="bannerCon" id="b2" className="banner1">
          {data[2]}
        </Banner>
      )}
      {currentSlide === 4 && (
        <Banner conClassName="bannerCon" className="gradientTxt">
          {bandsGenre.map((genre) => (
            <Artist key={Math.random()} content={genre} />
          ))}
        </Banner>
      )}
    </section>
  );
}

export default BannerSection;
