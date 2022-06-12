import GitLogo from "./img/git.png";
import loadMain from "./main";
import loadMenu from "./menu";
import loadContact from "./contact";


function createStuff(element, theClass, textContent) {
    let thing = document.createElement(element);
    thing.className = theClass;
    thing.textContent = textContent;
    return thing;
}

let createHome = function() {
    const body = document.getElementById("content");

    const header = document.createElement("div");
    header.className = "header";

    const headerText = document.createElement("div");
    headerText.className = "headerText";
    const nightsAtText = createStuff("h2", "sushiHeader", "Sushi nights at");
    const restaurantName = createStuff("h1", "restaurantName", "Tsuki Bar");
    headerText.append(nightsAtText, restaurantName);
 
    const buttonList = document.createElement("div");
    buttonList.className = "buttonList";

    const homeButton = createStuff("button", "homeButton", "Home");
    const menuButton = createStuff("button", "menuButton", "Menu");
    const contactButton = createStuff("button", "contactButton", "Contact");

    buttonList.append(homeButton, menuButton, contactButton);

    homeButton.onclick = loadMain;
    menuButton.onclick = loadMenu;
    contactButton.onclick = loadContact;

    const footer = document.createElement("div");
    footer.className = "footer";

    const footerContent = createStuff("h3", "footerText", "Copyright © 2022 pedronarbondo");
    const gitLink = document.createElement("a");
    gitLink.setAttribute("href", "https://github.com/pedronarbondo")
    const gitLogo = new Image();
    gitLogo.src = GitLogo;
    gitLogo.className = ("gitLogo");
    gitLink.append(gitLogo);

    footer.append(footerContent, gitLink);
    header.append(headerText, buttonList);
    body.append(header, footer);
}

function loadHome() {
    let body = document.getElementById("content");
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    let newBody = document.createElement("div");
    newBody.setAttribute("id", "content");
    body.append(newBody);
    createHome();
}

export {createHome, loadHome, createStuff};