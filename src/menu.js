import {loadHome} from "./runWebsite";
import {createStuff} from "./runWebsite";
import Roll1 from "./img/roll1.png";
import Roll2 from "./img/roll2.png";
import Roll3 from "./img/roll3.png";
import Roll4 from "./img/roll4.png";
import Roll5 from "./img/roll5.png";
import Ramen from "./img/ramen.png";


const createMenu = function() {
    const body = document.getElementById("content");
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("mainDiv", "foodContainer");

    foodContainer.append(
        createMenuItem("Roll I", "Orange balls surrounded by an algae", Roll1),
        createMenuItem("Roll II", "Fish surrounded by rice surrounded by algae", Roll2),
        createMenuItem("Roll III", "Some veggies surrounded by seeds-covered rice", Roll3),
        createMenuItem("Roll IV", "Veggies and rice surrounded by a chunk of salmon", Roll4),
        createMenuItem("Roll V", "Our best seller: veggies, cream cheese, rice and salmon", Roll5),
        createMenuItem("Ramen I", "This is the stuff of dreams", Ramen)
    )
    body.append(foodContainer);
}

const createMenuItem = function(name, description, src) {
    const item = document.createElement("div");
    item.className = "item";

    const itemTitle = createStuff("h3", "foodTitle", name);
    const itemDescription = createStuff("p", "itemDescription", description);
    const itemPhoto = new Image();
    itemPhoto.src = src;
    itemPhoto.className = "itemPhoto";

    item.append(itemPhoto, itemTitle, itemDescription);
    return item;
}

function loadMenu() {
    loadHome();
    createMenu();

    let menuButton = Array.from(document.querySelectorAll("button"))[1];
    menuButton.classList.add("selected");
}



export default loadMenu;