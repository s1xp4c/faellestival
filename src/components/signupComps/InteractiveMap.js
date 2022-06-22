"use strict"

import { useState } from "react";

let elementToPaint;
let gSpots;


// document.addEventListener("DOMContentLoaded", init);

export async function initMap() {
    // const [mouseoverColorButtonActive, setMouseoverColorButtonActive] = useState(false);
    // const [mouseoutColorButtonActive, setMouseoutColorButtonActive] = useState(false);
    // const [clickColorButtonActive, setClickColorButtonActive] = useState(false);
    let response = await fetch("/campingSpotsSVG1.svg");
    let mySVGdata = await response.text();
    document.querySelector(".camp-map").innerHTML = mySVGdata;

    manipulateSVG();


    function manipulateSVG() {
        console.log("manipulateSVG");
        // DO shit

        // document.querySelector("#Nilfheim").className.add("g_to_interact_with");
        // document.querySelector("#Alfheim").className.add("g_to_interact_with");
        // document.querySelector("#Muspelheim").className.add("g_to_interact_with");
        // document.querySelector("#Helheim").className.add("g_to_interact_with");
        // document.querySelector("#Svartheim").className.add("g_to_interact_with");

        gSpots = document.querySelectorAll(".g_to_interact_with");

        gSpots.forEach(gSpot => {
            console.log(gSpot);

            gSpot.addEventListener("mouseover", mouseoverG);
            gSpot.addEventListener("mouseout", mouseoutG);
            gSpot.addEventListener("click", clickG);
        });

        // Do color buttons

        let colorButtons = document.querySelectorAll(".color-check");

        colorButtons.forEach(colorButton => {
            console.log(colorButton);

            // gspots.className.remove("animatefill");

            // colorButton.addEventListener("mouseover", mouseoverColorButton);
            // colorButton.addEventListener("mouseout", mouseoutColorButton);
            colorButton.addEventListener("click", clickColorButton);
        });

    }

    // function mouseoverColorButton(e) {
    //     console.log("mouseoverColorButton");
    //     setMouseoverColorButtonActive(e)
    //     mouseoverColorButtonActive.className.add("boxShadowThis");
    // }

    // function mouseoutColorButton() {
    //     console.log("mouseoutColorButton");

    //     mouseoverColorButtonActive.className.remove("boxShadowThis");

    // }

    function clickColorButton(e) {
        console.log("clickColorButton", e.id);
        // getAttribute("fill")
        // elementToPaint.className.add("bounce");

        const color = e.fill;

        const tempcolor = document.querySelector("#tempcolor");
        tempcolor.style.fill = color;
        elementToPaint.className += "animatefill";

        elementToPaint.style.fill = color;
    }

    function mouseoverG(e) {
        console.log("mouseoverG");

        e.className += "boxShadowThis";
    }

    function mouseoutG({ e }) {
        console.log("mouseoutG");

        e.className -= "boxShadowThis";
    }

    function clickG(e) {
        console.log("clickG", e);
        e.className -= "animatefill";
        elementToPaint = e;
        elementToPaint.style.fill = "rgba(247, 115, 8, 0.82)";
    }
}
// function windowfunc() {
//     console.log("window animation");
//     document.querySelector(".window").className.add("light");
// }