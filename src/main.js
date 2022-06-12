import {createStuff} from "./runWebsite";
import Sushiman from "./img/sushiman.jpg";
import {loadHome} from "./runWebsite";

let createMain = function() {
    const body = document.getElementById("content");

    const mainDiv = document.createElement("div");
    mainDiv.className = "mainDiv";

    mainDiv.append(createStuff("h3", "mainText", "Best sushi in town"),
    createStuff("h3", "mainText", "Imported chefs from Japan since 1823"));

    const sushiMan = new Image();
    sushiMan.src = Sushiman;
    sushiMan.className = "sushiMan";

    mainDiv.append(sushiMan, createStuff("h3", "bottomText", "Order online or come meet us!"));
    body.append(mainDiv);
}


function loadMain() {
    loadHome();
    createMain();
}

export default loadMain;