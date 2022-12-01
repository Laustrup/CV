
let body;
let header;
let footer;

renderColourModeButton();

function renderColourModeButton() {

    getElements();

    if (document.get.style.backgroundColor == rgb(0, 0, 0)) {
        document.getElementById("colourMode_button").innerHTML = `
                <button class="colourMode_button" onclick="changeColourMode()">Change to lightmode</button>
        `    
    } 
    else {
        document.getElementById("colourMode_button").innerHTML = `
                <button class="colourMode_button" onclick="changeColourMode()">Change to darkmode</button>
        `
    }
    console.log(footer.style.backgroundColor);
}

function changeColourMode() {
    if (document.getElementById("header").style.backgroundColor == "#24252A") {
        changeToLightMode();
    } 
    else {
        changeToDarkMode();
    }
    renderColourModeButton();
}

function changeToLightMode() {
    getElements();

    header.style.backgroundColor = "white";
    header.style.color = "#24252A";

    footer.style.backgroundColor = "white";
    footer.style.color = "#000";
}

function changeToDarkMode() {
    getElements();

    header.style.backgroundColor = "#24252A";
    header.style.color = "white";

    footer.style.backgroundColor = "#000";
    footer.style.color = "white";

}

function getElements() {
    body = document.getElementById("body");
    header = document.getElementById("header");
    footer = document.getElementById("footer");
}