import "./styles.css"
import { findLocationData } from "./process.js"

const container = document.querySelector(".appinfo");
const submitButton = document.querySelector(".submitbutton");
const form = document.querySelector(".form");
const appHeader = document.querySelector(".appheader");
const appContent = document.querySelector(".appcontent");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    let data = new FormData(form);
    let city = "";
    for(let pair of data.entries()) {
        city = pair[1];
    }
    findLocationData(city);
});

function displayLocationData(data) {
    clearDisplay();

    //address, timezone, latitude, longitude, description in header
    const address = document.createElement("div");
    const timezone = document.createElement("div");
    const latitude = document.createElement("div");
    const longitude = document.createElement("div");
    const description = document.createElement("div");

    address.textContent = "Address: " + data.Address;
    timezone.textContent = "Timezone: " + data.Timezone;
    latitude.textContent = "Latitude: " + data.Latitude;
    longitude.textContent = "Longitude: " + data.Longitude;
    description.textContent = "Forecast: " + data.Description;

    appHeader.appendChild(address);
    appHeader.appendChild(timezone);
    appHeader.appendChild(latitude);
    appHeader.appendChild(longitude);
    appHeader.appendChild(description);


    //days data in loop
    for(let i = 0; i < 15; i++) {
        const dayDiv = document.createElement("div");
        const date = document.createElement("div");
        const temp = document.createElement("div");

        date.textContent = "Date: " + data.Days[i].datetime;
        temp.textContent = "Temperature: " + data.Days[i].temp + "F";
        
        dayDiv.appendChild(date);
        dayDiv.appendChild(temp);
        appContent.appendChild(dayDiv);
    }
        
}

function clearDisplay() {
    while(appContent.firstChild) {
        appContent.removeChild(appContent.firstChild);
    }
    while(appHeader.firstChild) {
        appHeader.removeChild(appHeader.firstChild);
    }
}

export {displayLocationData};

