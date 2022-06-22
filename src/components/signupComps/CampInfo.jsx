import React, { useState, useEffect } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import "./_InteractiveMap.scss";

// import { default as Logo } from "./campingSpotsSVG1.svg";

function CampInfo({ formData, setFormData, checkboxLabels }) {
  const [areaIsChecked, setAreaIsChecked] = useState([]);

  const [gToPlay, setGToPlay] = useState([]);
  const [gToColor, setGToColor] = useState([]);

  // const helColor = document.getElementById("SVG-Helheim");
  // const svartColor = document.getElementById("SVG-Svartheim");
  // const muspelColor = document.getElementById("SVG-Muspelheim");
  // const alfColor = document.getElementById("SVG-Alfheim");
  // const nilColor = document.getElementById("SVG-Nilfheim");

  useEffect(() => {
    let campsites = [
      { id: 1, campsite: checkboxLabels[16], fill: "rgba(245, 40, 145, 0.8) " },
      { id: 2, campsite: checkboxLabels[17], fill: "rgba(108, 93, 183, 0.54)" },
      { id: 3, campsite: checkboxLabels[18], fill: "rgba(19, 162, 183, 0.54)" },
      { id: 4, campsite: checkboxLabels[19], fill: "rgba(19, 212, 83, 0.54)" },
      { id: 5, campsite: checkboxLabels[20], fill: "rgba(227, 208, 30, 0.54)" },
    ];

    setAreaIsChecked(
      campsites.map((d) => {
        return {
          select: false,
          value: d.campsite,
          id: d.id,
          fill: d.fill,
        };
      })
    );
    //We want to update only elements that match this selectors
    // const selector = ["${}:nth-child(1)", "rect:nth-child(4)"];
  }, []);

  // useEffect(() => {
  //   let myG = document.getElementById({ gToPlay });
  //   myG.setAttribute("class", "boxShadowThis");
  // }, [gToPlay]);

  // manipulateSVG();

  // function manipulateSVG() {
  //   console.log("manipulateSVG");

  //   gSpots = document.querySelectorAll(".g_to_interact_with");

  //   gSpots.forEach((gSpot) => {
  //     console.log(gSpot);

  //     (<gSpot onMouseOver={() => mouseoverG()} />),
  //       (<gSpot onMouseLeave={() => mouseoutG()} />),
  //       (<gSpot onClick={() => clickG()} />);
  //     //   gSpot.addEventListener("mouseout", mouseoutG);
  //     //   gSpot.addEventListener("click", clickG);
  //   });

  // function mouseoverG() {
  //   console.log("mouseoverG");

  //   this.classList.add("boxShadowThis");
  // }

  // function mouseoutG({}) {
  //   console.log("mouseoutG");

  //   this.classList.remove("boxShadowThis");
  // }

  // function clickG() {
  //   console.log(gToPlay);
  // if (e === "Helheim") {
  // let myG = document.getElementById({ gToPlay });
  // myG.setAttribute("class", "boxShadowThis");
  // } else if (e === "Svartheim") {
  //   [svartColor].getDOMNode().setAttribute("class", "boxShadowThis");
  // } else if (e === "Muspelheim") {
  //   [muspelColor].getDOMNode().setAttribute("class", "boxShadowThis");
  // } else if (e === "Alfheim") {
  //   [alfColor].getDOMNode().setAttribute("class", "boxShadowThis");
  // } else if (e === "Nilheim") {
  //   [nilColor].getDOMNode().setAttribute("class", "boxShadowThis");
  // }

  // console.log("clickG", e);
  // this.classList.remove("animatefill");
  // elementToPaint = this;
  // elementToPaint.style.fill = "rgba(247, 115, 8, 0.82)";
  // }

  return (
    <div className="camp-container">
      <div className="check-container">
        <div className="check-header">
          <h3>Campsite</h3>
          <p>*Choose where to camp</p>
        </div>

        <div className="check-body camp-check">
          {areaIsChecked.map((d, index) => (
            <div key={index}>
              <input
                className="color-check"
                type="checkbox"
                fill={d.fill}
                id={d.id}
                value={d.value}
                checked={d.select}
                onChange={(event) => {
                  let checked = event.target.checked;

                  setAreaIsChecked(
                    areaIsChecked.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      } else {
                        data.select = !checked;
                      }
                      return data;
                    })
                  );
                  setFormData({ ...formData, campsite: event.target.value });
                  setGToPlay(event.target.value);
                  setGToColor(event.target.fill);
                }}
              ></input>
              <div>
                <span>{d.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div id="svg">
          <div className={"check-body camp-map"}>
            <SvgLoader path="/campingSpotsSVGtest-01.svg">
              <SvgProxy
                id="svgNow"
                selector={{ gToPlay } && "path"}
                fill="rgba(172, 255, 47, 0.425)"
              ></SvgProxy>
            </SvgLoader>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampInfo;
