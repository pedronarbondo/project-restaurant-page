import {loadHome} from "./runWebsite";
import {createStuff} from "./runWebsite";
import Location from "./img/location.png";


let createContact = function() {
    const body = document.getElementById("content");

    const contactDiv = document.createElement("div");
    contactDiv.className = "mainDiv";

    const location = new Image();
    location.src = Location;
    location.className = "location";

    contactDiv.append(
        createStuff("h3", "contactInfo", "📞 +598 123 456 78"),
        createStuff("h3", "contactInfo", "🏠 Hollywood Boulevard 42, LA"),
        location
    )

        body.append(contactDiv);
}

function loadContact() {
    loadHome();
    createContact();

    let contactButton = Array.from(document.querySelectorAll("button"))[2];
    contactButton.classList.add("selected");
}

export default loadContact;