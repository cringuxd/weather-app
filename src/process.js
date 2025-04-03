import { displayLocationData } from "./index.js"
//API calls and api processing are included here
const key = "9KQB625NNNE2F7E7Q6G8TV8X5";
const baseurl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function findLocationData(location) {
    try {
        const resp = await fetch(baseurl + location + "/?key=" + key, {
            mode: 'cors'
        });
        const json = await resp.json();
        parseLocationData(json);
    }
    catch (error) {
        console.log(error);
    }
}

function parseLocationData(data) {
    const dataObject = {
        Address: data.resolvedAddress,
        Timezone: data.timezone,
        Latitude: data.latitude,
        Longitude: data.longitude,
        Description: data.description,
        Days: data.days
    };
    console.log(dataObject);
    displayLocationData(dataObject);
}

export {key, baseurl, findLocationData, parseLocationData };